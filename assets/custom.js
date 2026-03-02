// Vertical Image Slider Js

$(".vertical-slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  asNavFor: ".vertical-slider-nav",
});

$(".vertical-slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  vertical: true,
  asNavFor: ".vertical-slider-for",
  dots: false,
  focusOnSelect: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        vertical: false,
      },
    },
  ],
});

document.addEventListener("DOMContentLoaded", function () {
  var selectedWrapper = document.querySelector(
    ".variant-quantity-wrapper input[type=radio]:checked+.variant-quantity-wrapper-variant-wrapper"
  );

  if (selectedWrapper) {
    // Get the price inside the selected wrapper
    var priceRegular = selectedWrapper.querySelector(
      ".variant-quantity-price-regular"
    );
    if (priceRegular) {
      var price = priceRegular.innerText.trim();
      // Append the price to the .price-item--regular
      var priceItemRegular = document.querySelector(".price-item--regular");
      if (priceItemRegular) {
        priceItemRegular.innerText = price + " USD";
      }
    }
  }
});

$(document).ready(function(){

  $('.js-for-image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.js-nav-image-slider'
  });

  $('.js-nav-image-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.js-for-image-slider',
    dots: false,
    focusOnSelect: true,
    arrows: true
  });

});