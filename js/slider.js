// let swiper = new Swiper(".swiper", {
//     sliderPerWiev: 3,
//     spaceBetween: 30,
//     loop: true,
//     // watchOverflow: false,
//     // centerSlide: true,
//     // fade: true,
//     grabCursor: true,
//     // autoplay: {
//     //     delay: 5000,
//     //     disableOnInteraction: false,
//     //   },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,

//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 30,
    // slidesPerGroupSkip: 1,
    grabCursor: true,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});