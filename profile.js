let toggleBtn = document.querySelector("#menu-icon");
let sidebar = document.querySelector(".navbar");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.onclick=()=>{
    toggleBtn.classList.toggle("bx-x");
    sidebar.classList.toggle("active");
};

let sections = document.querySelectorAll("section"); 
let navLinks =document.querySelectorAll("header nav li a");

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");


        if(top>= offset && top<offset + height){
            navLinks.forEach(links=> {
                links.classList.remove("active");
            });

        document.querySelector('header nav li a[href='+id+']').classList.add("active");
        }
    })


// after 100px on scrolling in Y-Direction to make the navbar in sticky position


let header = document.querySelector("#header");
header.classList.toggle("sticky",window.scrollY>100);

// after scrolling to make the opened navbar inactive 

toggleBtn.classList.remove("bx-x");
sidebar.classList.remove("active");
};


let darkMode = document.querySelector("#darkMode-icon");

darkMode.onclick=()=>{
    darkMode.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");
};

// using scroll reveal to bring in some delay in loading of contents

let reveal = ScrollReveal({
    distance: '50px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal(".home-content", { origin: 'top' });
ScrollReveal().reveal(".right-section img, .section-container,.about-details-container,.edu-icon,#about,#skills,.projects-container,contact-container", { origin: 'bottom' });
ScrollReveal().reveal(".home-content h1,.about-container img,.skill-container img,.contact-info-container", { origin: 'left' });
ScrollReveal().reveal(".home-content h3, home-content p,.section-container", { origin: 'right' });
