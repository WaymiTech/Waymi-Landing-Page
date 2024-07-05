document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navBar = document.getElementById('navbar');
    const closeBtn = document.getElementById('close-btn');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        closeBtn.style.display = navLinks.classList.contains('nav-active') ? 'block' : 'none';
    });

    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        closeBtn.style.display = 'none';
    });

    window.onscroll = () => {
        if (window.scrollY > 300) {
            navBar.classList.add('nav-scroll');
        } else {
            navBar.classList.remove('nav-scroll');
        }
    };
});
