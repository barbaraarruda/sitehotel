let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times'); 
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

//inicializando swiper home
var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//inicializando swiper about

var swiper = new Swiper(".collaborators-slider", {
    grabCursor: true,
    loop:true,
    spaceBetween: 20,
    autoHeight:true,
    breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        700: {
          slidesPerView: 2,
          
        },
        1000: {
          slidesPerView: 3,
          
        },
      },
});


//inicializando swiper contact

var swiper = new Swiper(".contact-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  
});