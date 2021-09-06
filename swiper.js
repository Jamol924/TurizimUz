 
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        // disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints:{
        300:{
          spaceBetween: 10,
          slidesPerView: 1,
        },
        
        700:{
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1100:{
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      
    });
