// $(document).ready(function() {
//     const slider = $('.slider');
//     const slides = $('.slide');

//     let slideIndex = 0;

//     function showSlide(index) {
//         slider.css('transform', `translateX(-${index * 100}%)`);
//     }

//     slides.click(function() {
//         slideIndex = slides.index($(this));
//         showSlide(slideIndex);
//     });
// });

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

