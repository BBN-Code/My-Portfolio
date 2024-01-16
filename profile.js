const menuNav = document.querySelector(".navbar");
const toggleNav = document.querySelector(".ri-menu-3-line");
const closeNav = document.querySelector(".ri-close-line");

toggleNav.addEventListener("click", ()=>{
    menuNav.classList.add("show-menu");
});

closeNav.addEventListener("click", ()=>{
    menuNav.classList.remove("show-menu");
});


// Initialize ScrollReveal with configuration
let reveal = ScrollReveal({
    distance: '50px',
    duration: 2000,
    delay: 200
});

// Use the reveal object to apply the effects
reveal.reveal(".home-content", { origin: 'top' });
reveal.reveal(".right-section img, .section-container, .about-details-container, .edu-icon, #about, #skills, .projects-container, .contact-container", { origin: 'bottom' });
reveal.reveal(".home-content h1, .about-container img, .skill-container img, .contact-info-container", { origin: 'left' });
reveal.reveal(".home-content h3, .home-content p, .section-container", { origin: 'right' });
