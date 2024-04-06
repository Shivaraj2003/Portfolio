
const initApp = () => {
    const hambergMenu = document.getElementById('hamberger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    }
    hambergMenu.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);

    //     const projectss = document.getElementById('visit1');
    //     projectss.addEventListener('click',()=>{
    // //         document.getElementById('modal-id').innerHTML = `<div class="text-6xl  ml-auto mb-auto cursor-pointer md:hidden block" id="close">&times</div>

    // // <div class="w-full mx-auto h-[70vh]   text-black col-span-12 md:col-span-6  bg-[url('../images/intro-bg.jpg')] bg-cover">
    // //         <div class=" w-full bg-black/50 h-full flex justify-center items-center md:p-5 md:px-5 px-0 ">

    // //         </div>
    // //     </div>
    // //     <div class="w-full mx-auto  h-[70vh]   col-span-12 md:col-span-6 ">
    // //         <div class=" w-full bg-blue-50 h-full flex justify-center items-center p-5 md:px-5 px-0 ">
    // //             <div class="flex flex-col justify-center items-center md:w-5/6 w-full p-3 gap-5">
    // //                 <!-- <div class="text-6xl ">&times</div> -->
    // //                 <h1 class="font-poppins  text-4xl font-bold text-center leading-normal mt-5">
    // //                     ShoezKart
    // //                 </h1>
    // //                 <p class=" text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis ipsa eveniet nemo sequi amet.</p>
    // //                     <div>
    // //                         <h2 class="text-xl">Technologies used:</h2>
    // //                         <ul class="list-none flex flex-col justify-center items-center  gap-3">
    // //                             <li>HTML</li>
    // //                             <li>CSS</li>
    // //                             <li>JavaScript</li>

    // //                         </ul>
    // //                     </div>
    // //                     <div class="bg-blue-300 p-2 text-black cursor-pointer font-semibold"><a href="" class="btn">View Project</a></div>
    // //                 <!-- <button class="bg-blue-200 text-lg px-4 py-2 font-bold text-black" id="close">
    // //                     Close
    // //                 </button> -->
    // //             </div>
    // //         </div>
    // //     </div>
    // //     <div class="text-6xl  ml-auto mb-auto cursor-pointer hidden md:block" id="close1">&times</div>
    // //   </div>`;
    //         document.getElementById('modal-id').style.display= 'flex';
    //         document.getElementById('project-grid').style.display = 'none';
    //     });

    const projectData = [
        {
            "id": "project1",
            "title": "ShoezKart",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ad.",
            "image": "images/project1.jpg",
            "link": "https://shivaraj2003.github.io/ShoesKart/",
            "technologies": ["HTML", "CSS", "JavaScript"],

        },
        {
            "id": "project2",
            "title": "Webovio-Clone",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ad.",
            "image": "images/project2.jpg",
            "link": "https://shivaraj2003.github.io/webovio-clone/",
            "technologies": ["HTML", "CSS", "Bootstrap"],

        },
        {
            "id": "project3",
            "title": "Ketamine-Clone",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ad.",
            "image": "images/project3.jpg",
            "link": "https://shivaraj2003.github.io/Ketamine-Clone/",
            "technologies": ["HTML", "CSS", "JavaScript"],
        }
    ];


    function createProjectCard(project) {
        const projectCard = document.createElement("div");
        projectCard.setAttribute("id", project.id);
        projectCard.classList.add("gap-2", "col-span-12", "sm:col-span-6", "lg:col-span-4", "min-h-[300px]", "m-3", "mx-0", "md:m-5", "bg-cover", "bg-center", "border-2", "border-black", "bg-cover");
        projectCard.style.backgroundImage = `url(${project.image})`;


        const innerContent = `
            <div class="p-3 flex flex-col justify-around items-center gap-3 my-auto h-full text-black opacity-0 hover:backdrop-blur hover:opacity-100 hover:cursor-pointer">
                <h1 class="text-2xl font-bold">${project.title}</h1>
                <p class="text-lg text-center">${project.description}</p>
                <button class="mx-auto border-2 border-black px-5 py-2 font-medium hover:bg-blue-300 visit" ">Visit</button>
            </div>
        `;

        projectCard.innerHTML = innerContent;
        return projectCard;
    }


    const projectGrid = document.querySelector("#project-grid .grid");

    projectData.forEach(function (project) {
        const projectCard = createProjectCard(project);
        projectGrid.appendChild(projectCard);
    });



    const visitBtns = document.querySelectorAll('.visit');
    for (let i = 0; i < visitBtns.length; i++) {
        const button = visitBtns[i];

        button.addEventListener('click', () => {
            let technologiesListItems = '';
            projectData[i].technologies.forEach(tech => {
                technologiesListItems += `<li>${tech}</li>`;
            });

            document.getElementById('modal-id').innerHTML = `
        <div class="text-6xl mb-auto cursor-pointer ms-auto md:hidden block  border-2 " id="close">&times</div>
        <div class="w-full mx-auto h-[70vh] text-black col-span-12 md:col-span-6 bg-no-repeat bg-contain md:bg-cover  bg-center " style="background-image:url('${projectData[i].image}')">
            <div class="w-full h-full flex justify-center items-center md:p-5 md:px-5 px-0 "></div>
        </div>
        <div class="w-full mx-auto h-[70vh] col-span-12 md:col-span-6 ">
            <div class="w-full bg-blue-50 h-full flex justify-center items-center p-5 md:px-5 px-0 ">
                <div class="flex flex-col justify-center items-center md:w-5/6 w-full p-3 gap-5">
                    <h1 class="font-poppins text-3xl font-bold text-center leading-normal mt-5">${projectData[i].title}</h1>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis ipsa eveniet nemo sequi amet.</p>
                    <div>
                        <h2 class="text-xl">Technologies used:</h2>
                        <ul class="list-none flex flex-col justify-center items-center mt-3 gap-3">
                            ${technologiesListItems}
                        </ul>
                    </div>
                    <div class="bg-blue-300 p-2 text-black cursor-pointer font-semibold"><a href="${projectData[i].link}" target="_blank" class="btn">View Project</a></div>
                </div>
            </div>
        </div>
        <div class="text-6xl ml-auto mb-auto cursor-pointer hidden md:block" id="close1">&times</div>
    `;

            document.getElementById('modal-id').style.display = 'flex';
            document.getElementById('project-grid').style.display = 'none';

            const close = document.getElementById('close');
            const close1 = document.getElementById('close1');
            close.addEventListener('click', () => {
                document.getElementById('modal-id').style.display = 'none';
                document.getElementById('project-grid').style.display = 'grid';
            });
            close1.addEventListener('click', () => {
                document.getElementById('modal-id').style.display = 'none';
                document.getElementById('project-grid').style.display = 'grid';
            });
        });


    }

    // document.getElementById('3').addEventListener('click',()=>{
    //     alert('hiii');
    // })


}


document.addEventListener('DOMContentLoaded', initApp);
