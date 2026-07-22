# Documentación técnica — Proyecto `curriculum`

> Hoja de vida (CV) online de **Mario Esteban Ortega Garcés**, construida como una
> Single Page Application en React, con contenido bilingüe (español / inglés)
> dirigido por datos JSON, empaquetada con Webpack y desplegada en Vercel.

---

## 1. Visión general

Este proyecto es un **currículum web de una sola página**. No tiene backend ni base
de datos: todo el contenido (experiencia, certificaciones, educación, idiomas, datos
de contacto) vive en archivos **JSON** dentro del repositorio. React lee esos JSON y
pinta la página. El idioma se detecta automáticamente del navegador y se puede cambiar
con un selector.

| Aspecto | Detalle |
|---|---|
| **Tipo** | SPA estática (client-side rendering) |
| **Framework UI** | React 18 (`createRoot`, Context API, Hooks) |
| **Bundler** | Webpack 5 + Babel |
| **Estilos** | CSS plano por componente (sin framework CSS) |
| **i18n** | Propio, basado en JSON + React Context |
| **Datos** | JSON estáticos (`src/translate/*.json`) |
| **Backend** | Ninguno |
| **Despliegue** | Vercel (`vercel.json`) |
| **Analítica** | Google Analytics (gtag `UA-171840911-2`) |
| **Node** | 20.x (`engines` en `package.json`) |

---

## 2. Flujo de arranque (de HTML a pantalla)

```
index_template.html            src/index.js               src/app.js
┌──────────────────┐          ┌──────────────────┐       ┌────────────────────────┐
│ <div id="app">   │  ──────► │ createRoot(#app) │ ────► │ <LanguageProvider>     │
│ carga fuentes,   │          │ root.render(App) │       │   <AppContent/>        │
│ gtag, favicon    │          │ importa CSS      │       │ </LanguageProvider>    │
└──────────────────┘          └──────────────────┘       └────────────────────────┘
```

1. **`index_template.html`** — plantilla que Webpack usa (vía `HtmlWebpackPlugin`)
   para generar el `dist/index.html` final. Define:
   - El contenedor raíz `<div id="app"></div>`.
   - Fuentes de Google Fonts (Merriweather, Source Sans Pro, Fjalla One, Open Sans).
   - Los iconos propios (`public/fonts.css` → fuente **icomoon**).
   - El snippet de **Google Analytics** (`gtag`).
   - El `<title>`: *"Hoja de vida Mario Esteban Ortega Garcés"*.

2. **`src/index.js`** — punto de entrada de JavaScript. Monta React sobre `#app`
   con la API moderna `createRoot` (React 18) e importa los CSS globales
   (`font-icons`, `global`, `body`, `responsive`, `print`).

3. **`src/app.js`** — envuelve toda la app en `<LanguageProvider>` y renderiza los
   componentes en orden vertical:

   ```
   Menu → Header → Hero → Experience → Certification → Education → Language → Footer
   ```

---

## 3. Sistema de idiomas (i18n) — el corazón del proyecto

Todo gira alrededor de **`LanguageContext`**. Es un React Context que expone a
cualquier componente cuatro cosas: el idioma actual, una función para cambiarlo, los
**textos de interfaz** y los **datos del CV**.

### `src/context/LanguageContext.js`

```js
const [lang, setLang] = useState('es');           // idioma por defecto: español

useEffect(() => {                                  // al montar, detecta el idioma
  const browserLang = navigator.language;          // del navegador
  if (browserLang.includes('en')) setLang('en');
  else setLang('es');
}, []);

const value = {
  lang,                    // 'es' | 'en'
  setLang,                 // cambiar idioma manualmente
  text: getTextLang(lang), // etiquetas de UI (títulos de sección, labels…)
  data: getData(lang)      // contenido del CV (experiencia, educación…)
};
```

Cualquier componente consume esto con el hook `useLanguage()`:

```js
const { data, text, lang, setLang } = useLanguage();
```

### `src/config.js` — el selector de fuente de datos

Hace de "router" de datos: según el idioma devuelve un JSON u otro.

```js
getTextLang(lang) → spanish.json | english.json     // etiquetas fijas de UI
getData(lang)     → iniSpanish.json | iniEnglish.json // contenido real del CV
```

### Dos capas de JSON — clave para entender el proyecto

| Archivo | Rol | Contenido |
|---|---|---|
| `translate/spanish.json` / `english.json` | **Etiquetas de UI** (~50 líneas) | Títulos de secciones, labels tipo "Fecha inicio:", nombres de menú |
| `translate/iniSpanish.json` / `iniEnglish.json` | **Datos del CV** (~705 líneas) | Experiencia, certificaciones, educación, tecnologías, contacto |

> **Para actualizar el CV** (nuevo trabajo, certificación, etc.) se editan
> `iniSpanish.json` **y** `iniEnglish.json`. Para cambiar textos fijos de la interfaz,
> `spanish.json` / `english.json`. **No se toca código React.**

### Estructura de `iniSpanish.json` / `iniEnglish.json`

```
general:                      ← datos de contacto y cabecera
  fullname, role, role-description, email, cellphone, address, cv_url
  show_technologies: true     ← flag que muestra/oculta la fila de iconos del Hero
  technologies: [ {tech, url} × 19 ]   ← iconos de tecnologías
experience: [ ... × 13 ]      ← cada empleo:
  experienceId, enterpriseName, enterpriseImage, position,
  dateIni, dateEnd, expDesc, enterpriseUrl, enterpriseAddress,
  enterprisePhone, achievements:[…], technologies:[{tech,url,name}]
education: [ ... × 2 ]
  educationId, educationName, educationImage, educationTitle,
  educationDateIni, educationDateEnd
certification: [ ... × 4 ]
  certificationId, certificationImage, certificationName,
  certificationUrl, certificationDateIni, certificationDateEnd
```

---

## 4. Componentes (`src/components/`)

Cada componente vive en su carpeta con su propio CSS. Todos leen del contexto con
`useLanguage()` y son **presentacionales** (sin estado propio salvo el `Menu`).

| Componente | Sección / `id` | Qué hace | Estado propio |
|---|---|---|---|
| **`Menu`** | `#seccionMenu` | Navegación lateral + botón hamburguesa + **botón imprimir** (`window.print()`) | Sí: `isActive`, `isArrowHidden` |
| **`Header`** | `.header` | Logo + **selector de idioma** (`<select>` que llama a `setLang`) | No |
| **`Hero`** | `#encabezado` | Nombre, rol, contacto, foto y fila de iconos de tecnologías | No |
| **`Experience`** | `#experiencia` | Recorre `data.experience` → una `<article>` por empleo con logros y tecnologías | No |
| **`Certification`** | `#certificaciones` | Recorre `data.certification` → tarjetas de certificados | No |
| **`Education`** | `#educacion` | Recorre `data.education` → tarjetas de estudios | No |
| **`Language`** | `#idiomas` | Nivel de inglés (speaking/reading/writing/listening) con barras al 80% **hardcodeadas** | No |
| **`Footer`** | `#footerPage` | Créditos y logo | No |
| **`Switch`** | (commons) | Componente de toggle **no usado** actualmente en la app | No |

### Detalles notables por componente

- **`Menu.js`** es el único con lógica real:
  - `toggleMenu()` abre/cierra el menú móvil (`is-active`).
  - `toggleDesktopMenu()` colapsa/expande el menú de escritorio (flecha).
  - `useEffect` cierra el menú al hacer clic fuera.
  - El botón imprimir dispara `window.print()`, que aprovecha `css/print.css`.
  - El link "Portafolio" apunta a `href="#"` (**pendiente / placeholder**).

- **`Hero.js`** — la fila de tecnologías solo se muestra si
  `data.general.show_technologies === true`. Los iconos se pintan con clases
  `icon-<tech>` de la fuente icomoon.

- **`Experience.js`** — es el componente más denso: anida tres `map`:
  empleos → logros → tecnologías usadas. Usa `enterpriseImage` desde
  URLs de **Clearbit** (`logo.clearbit.com/...`) para logos de empresa.

- **`Language.js`** — ⚠️ los porcentajes (80%) y las barras están **fijos en el JSX**,
  no vienen del JSON. Cambiarlos requiere editar el componente.

---

## 5. Estilos (CSS)

No hay framework CSS (ni Tailwind, ni Bootstrap). Es **CSS plano** dividido en dos grupos:

### CSS global (`src/css/`, importado en `index.js`)

| Archivo | Rol |
|---|---|
| `global.css` | Reset, tipografía base (`html { font-size: 9px }` + unidades `rem`), headings con fuente *Fjalla One* |
| `body.css` | Layout general del `body` |
| `responsive.css` | Media queries (268 líneas — el grueso del responsive) |
| `print.css` | Estilos para impresión / exportar a PDF (usado por el botón imprimir) |
| `font-icons.css` | Definición de las clases `icon-*` de la fuente icomoon |
| `contacts.css` | Estilos de contacto |

### CSS por componente (junto a cada `.js`)

`menu.css`, `header.css`, `hero.css`, `experience.css`, `knowledges.css`
(compartido por Certification y Education), `languages.css`, `footer.css`, `switch.css`.

> **Técnica de escalado**: `html { font-size: 9px }` + todo en `rem`. Cambiando ese
> único valor se re-escala proporcionalmente toda la maqueta.

### Iconos

Fuente propia **icomoon** en `public/fonts/` (`.eot`, `.svg`, `.ttf`, `.woff`),
declarada en `public/fonts/style.css` y `public/fonts.css`. Se usan como
`<i className="icon-java">`, `icon-user`, `icon-printer`, etc.

---

## 6. Build y empaquetado (`webpack.config.js`)

```
entry:  src/index.js  (chunk "home")
output: dist/[name].js  +  clean:true (borra dist en cada build)
```

**Loaders** (`module.rules`):
| Test | Loader | Resultado |
|---|---|---|
| `.js` | `babel-loader` (preset-env + preset-react) | Transpila JSX y ES moderno |
| `.css` | `MiniCssExtractPlugin.loader` + `css-loader` | Extrae CSS a `dist/css/[name].css` |
| imágenes/fuentes/video | `type: 'asset/resource'` | Copia y versiona los assets |

**Plugins**:
- `HtmlWebpackPlugin` — genera `dist/index.html` desde `index_template.html`, inyecta favicon y título.
- `MiniCssExtractPlugin` — saca el CSS a archivos aparte (`css/home.css`).
- `CopyPlugin` — copia `public/` → `dist/public/` tal cual (imágenes, fuentes).

**Dev server** (`devServer`): puerto **8080**, `hot` (HMR), `compress`,
`historyApiFallback` (rutas SPA), `open` (abre navegador).

### Babel

- `.babelrc`: presets `preset-env` + `preset-react`, plugin `transform-runtime`.
- Nota: el `webpack.config.js` también declara los presets inline en el `babel-loader`;
  ambas configuraciones coexisten.

---

## 7. Scripts (`package.json`)

| Script | Comando | Uso |
|---|---|---|
| `npm start` | `webpack serve --mode development --open` | **Desarrollo** local (localhost:8080, HMR) |
| `npm run build` | `webpack --mode production` | Build de producción → `dist/` (lo que usa Vercel) |
| `npm run build:dev` | `webpack --mode development` | Build sin minificar |
| `npm run lint` | `eslint src/**/*.js` | Linter |
| `npm run lint:fix` | `eslint --fix` | Linter con autofix |
| `npm run format` | `prettier --write` | Formateo de código |

---

## 8. Calidad de código

- **ESLint** (`.eslintrc.json`): `eslint:recommended` + `plugin:react/recommended`
  + `plugin:prettier/recommended`. Parser `@babel/eslint-parser`. Reglas: prop-types
  desactivado, no exige `import React` en scope.
- **Prettier** (`.prettierrc`): `singleQuote`, `semi`, `tabWidth: 2`,
  `printWidth: 100`, `trailingComma: none`, `jsxSingleQuote`.

---

## 9. Utilidad extra: `check_links.js`

Script **standalone de Node** (no forma parte del build). Recorre los JSON de datos
(`iniSpanish.json`, `iniEnglish.json`), extrae todas las URLs de ciertas claves
(`url`, `cv_url`, `enterpriseImage`, `educationImage`, `certificationImage`,
`certificationUrl`, `enterpriseUrl`) y hace peticiones `HEAD` para comprobar que
**no haya enlaces rotos** (logos de empresa, imágenes, URLs externas). Útil de correr
tras actualizar el CV.

Ejecución: `node check_links.js`

---

## 10. Despliegue (`vercel.json`)

```json
{ "buildCommand": "npm run build", "outputDirectory": "dist", "framework": null }
```

Vercel corre `npm run build` y sirve `dist/` como sitio estático. `framework: null`
porque no usa un preset conocido (config Webpack manual). El CV público vive en la URL
de `data.general.cv_url`.

---

## 11. Cómo trabajar con el proyecto (guía rápida)

| Quiero… | Hago… |
|---|---|
| Correr en local | `npm install` → `npm start` → http://localhost:8080 |
| Añadir/editar un empleo | Editar `experience[]` en `iniSpanish.json` **y** `iniEnglish.json` |
| Cambiar textos de UI (menú, labels) | Editar `spanish.json` / `english.json` |
| Cambiar datos de contacto | Bloque `general` en los `ini*.json` |
| Ocultar la fila de tecnologías del Hero | `general.show_technologies: false` |
| Cambiar el % de idiomas | Editar directamente `Language.js` (están hardcodeados) |
| Validar que no hay enlaces rotos | `node check_links.js` |
| Publicar | `git push` → Vercel despliega automáticamente |

---

## 12. Observaciones y posibles mejoras

- **Contenido duplicado ES/EN**: la estructura de datos se mantiene por partida doble
  en dos JSON. Un cambio estructural obliga a tocar ambos → fácil que se desincronicen.
  `check_links.js` ayuda con las URLs, pero no valida que las claves coincidan.
- **`Language.js` con datos hardcodeados**: los niveles de idioma (80%) deberían venir
  del JSON para ser coherentes con el resto del enfoque data-driven.
- **`Switch.js`**: componente sin usar y con JSX inválido (`class=` en vez de
  `className=`, `<label>{ }</label>` vacío). Candidato a eliminar.
- **Link "Portafolio"** en el menú apunta a `#` (placeholder).
- **`README.md`** está prácticamente vacío (`"# curriculum"`) — este documento lo cubre.
- **Rutas de imágenes absolutas** (`/public/images/...`): funcionan porque `CopyPlugin`
  replica `public/` en la raíz de `dist`. Ojo si se cambia el `outputDirectory` o el base path.
- **Analítica con Universal Analytics** (`UA-...`): Google descontinuó Universal
  Analytics; convendría migrar a GA4 si se quiere seguir midiendo tráfico.
