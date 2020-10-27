const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    //toggle nav
    burger.addEventListener('click', ()=>{
        console.log('clicked')
        nav.classList.toggle('nav-active');
    })

    const navLinks = document.querySelectorAll('.nav-links li')
    //animate
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 1.5}s`
    })
}

navSlide();