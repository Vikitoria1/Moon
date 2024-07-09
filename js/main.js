const btn = document.querySelector(".menu-btn");
const inner = document.querySelector(".header__inner");

btn.addEventListener("click", () => {
  inner.classList.toggle("menu-open");
});

$(document).ready(function () {
  $(".catalog__list").slick({
    arrows: false,
    infinity: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1142,
        settings: {
          infinity: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 940,
        settings: {
          infinity: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 430,
      //   settings: {
      //     slidesToShow: 1.5,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  });
});

$(document).ready(function () {
  $(".team__list").slick({
    arrows: false,
    infinity: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1142,
        settings: {
          infinity: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 940,
        settings: {
          infinity: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 430,
      //   settings: {
      //     slidesToShow: 1.5,
      //     slidesToScroll: 1.5,
      //   },
      // },
    ],
  });
});
