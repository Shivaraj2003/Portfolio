
const initApp = () =>{
    const hambergMenu = document.getElementById('hamberger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu =() =>{
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    }
    hambergMenu.addEventListener('click',toggleMenu);
    mobileMenu.addEventListener('click',toggleMenu);
}
document.addEventListener('DOMContentLoaded',initApp);
