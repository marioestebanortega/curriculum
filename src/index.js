import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './css/font-icons.css';
import './css/global.css';
import './css/body.css';
import './css/responsive.css';
import './css/print.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);