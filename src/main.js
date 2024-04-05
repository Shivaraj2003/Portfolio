
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
//         document.getElementById('modal-id').innerHTML = `<div class="text-6xl  ml-auto mb-auto cursor-pointer md:hidden block" id="close">&times</div>

// <div class="w-full mx-auto h-[70vh]   text-black col-span-12 md:col-span-6  bg-[url('../images/intro-bg.jpg')] bg-cover">
//         <div class=" w-full bg-black/50 h-full flex justify-center items-center md:p-5 md:px-5 px-0 ">
            
//         </div>
//     </div>
//     <div class="w-full mx-auto  h-[70vh]   col-span-12 md:col-span-6 ">
//         <div class=" w-full bg-blue-50 h-full flex justify-center items-center p-5 md:px-5 px-0 ">
//             <div class="flex flex-col justify-center items-center md:w-5/6 w-full p-3 gap-5">
//                 <!-- <div class="text-6xl ">&times</div> -->
//                 <h1 class="font-poppins  text-4xl font-bold text-center leading-normal mt-5">
//                     ShoezKart
//                 </h1>
//                 <p class=" text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis ipsa eveniet nemo sequi amet.</p>
//                     <div>
//                         <h2 class="text-xl">Technologies used:</h2>
//                         <ul class="list-none flex flex-col justify-center items-center  gap-3">
//                             <li>HTML</li>
//                             <li>CSS</li>
//                             <li>JavaScript</li>
                            
//                         </ul>
//                     </div>
//                     <div class="bg-blue-300 p-2 text-black cursor-pointer font-semibold"><a href="" class="btn">View Project</a></div>
//                 <!-- <button class="bg-blue-200 text-lg px-4 py-2 font-bold text-black" id="close">
//                     Close
//                 </button> -->
//             </div>
//         </div>
//     </div>
//     <div class="text-6xl  ml-auto mb-auto cursor-pointer hidden md:block" id="close1">&times</div>
//   </div>`;
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
