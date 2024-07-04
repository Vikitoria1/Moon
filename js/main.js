const btn = document.querySelector('.menu-btn');
const inner = document.querySelector('.header__inner');

btn.addEventListener('click', ()=>{
    inner.classList.toggle('menu-open');
});

$(function(){
    $('.team__list').slick({
        arrows: false,
        infinity: false,
        slidesToShow: 4,
        slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 940,
      settings: {
        arrows: false,
        infinity: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1.5
      }
    }
  ]
});
});