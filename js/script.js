// Toggle Navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


window.onscroll = () => {
// Remove Toggle Icon
menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
}



ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.heading, .about-content h3, .portofolio h2, .contact h2', { origin: 'top' });
ScrollReveal().reveal('.item, .softwares a, .softwares span, .software, .about-content a, .skills-content h3, .skills-content p, cards, .text-container h2, .text-container a, .folio h1', { origin: 'buttom' });
ScrollReveal().reveal('.about-content p, .home-content, .home-contact h1, .skills-content h2', { origin: 'left' });
ScrollReveal().reveal('.about-img, .about-contact, .swiper-pagination-bullet', { origin: 'right' });