let menuIcon = document.querySelector('#menu-icon');
let navbarIcon = document.querySelector('.navbar');

let sections = document.querySelectorAll('section'); // Fixed selector to target sections
let navLinks = document.querySelectorAll('.header nav a'); // Corrected variable name

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            })
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active'); // Corrected selector
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbarIcon.classList.toggle('active');
}