const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    
    burger.addEventListener('click', () => {
        //toggle nav
        console.log('clicked')
        nav.classList.toggle('nav-active')

        //animate
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
            }
    })

    //burger animation
    burger.classList.toggle('toggle-nav')
    })
    
}

navSlide();


// sticky nav
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("my-nav");
var sticky = navbar.offsetTop + 400;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}