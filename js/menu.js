
(() => {
    const menu = document.querySelector('.menu');    
    const body = document.querySelector('body');

    const closeMenu=()=>{
        if(menu.classList.contains('is-active')){
           menu.classList.remove('is-active');
        }
    }

    const ipad = window.matchMedia('screen and (max-width: 767px)');

        
       
        const burgerMenu = document.querySelector('#burger-menu');
        const hideShow = () => {
            
                body.addEventListener('click',()=>{});
            
           
            if (menu.classList.contains('is-active')) {
                menu.classList.remove('is-active');

            }
            else {
                menu.classList.add('is-active');
                body.addEventListener('click',closeMenu,true);
            }

        }
        
    
    const validation = (event) => {
        if (event.matches) {
            burgerMenu.addEventListener(
                'click',
                hideShow
            );
        }
        else{
            burgerMenu.removeEventListener('click',hideShow);
        }
    }
    ipad.addListener(validation);
    validation(ipad);
})()