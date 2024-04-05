
const initApp = () =>{
    const hambergMenu = document.getElementById('hamberger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu =() =>{
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    }
    hambergMenu.addEventListener('click',toggleMenu);
    mobileMenu.addEventListener('click',toggleMenu);

    const project1 = document.getElementById('visit1');
    project1.addEventListener('click',()=>{
        document.getElementById('modal-id').style.display= 'flex';
        document.getElementById('project-grid').style.display = 'none';
    });
    const close = document.getElementById('close');
    const close1 = document.getElementById('close1');
    close.addEventListener('click',()=>{
        document.getElementById('modal-id').style.display= 'none';
                document.getElementById('project-grid').style.display = 'grid';

    });
    close1.addEventListener('click',()=>{
        document.getElementById('modal-id').style.display= 'none';
                document.getElementById('project-grid').style.display = 'grid';

    });

}


document.addEventListener('DOMContentLoaded',initApp);
