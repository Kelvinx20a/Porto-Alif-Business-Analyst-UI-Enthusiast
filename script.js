document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal on Scroll
    const revealElements = document.querySelectorAll('.js-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-reveal-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));

    // 2. Hamburger & Side Menu Logic
    const menuBtn = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-links');
    const mainContent = document.querySelector('#main-content');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('is-active');
            navMenu.classList.toggle('active');
            
            // Blur effect & Scroll Lock
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                mainContent.style.filter = 'blur(5px)';
                mainContent.style.transition = '0.5s';
            } else {
                document.body.style.overflow = 'auto';
                mainContent.style.filter = 'none';
            }
        });
    }

    // Auto-close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('is-active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
            mainContent.style.filter = 'none';
        });
    });
});