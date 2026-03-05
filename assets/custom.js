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
    fade: true,
    cssEase: 'linear',
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


  // On load fill the check value
  let subs_com_price =$('.flock_options.subscribe_save .gt-prod-var-box-sub .flock_item input:checked').attr('data-comp-price');
  let subs_price =$('.flock_options.subscribe_save .gt-prod-var-box-sub .flock_item input:checked').attr('data-subs-price');
  let sav_price = $('.flock_options.subscribe_save .gt-prod-var-box-sub .flock_item input:checked').attr('data-save-price');
  let original_price = $('.flock_options.subscribe_save .gt-prod-var-box-sub .flock_item input:checked').attr('data-original-price');
  $('.bbfreq_radio_wrapper .subscribe-label .frq_info .save-price').text(sav_price);
  $('.bbfreq_radio_wrapper .subscribe-label .frq_info .ss-price').text(subs_price);
  $('.bbfreq_radio_wrapper .subscribe-label .frq_info .ss-comp-price').text(subs_com_price);
  $('.product-form__buttons .product-form__submit .product-price .price').text(subs_price);
  $('.product-form__buttons .product-form__submit .product-price .compare-price').text(subs_com_price);
  $('.bbfreq_radio_wrapper .frq_info .ot-price').text(original_price);


  // On subscribe button chnage prices
  $('.flock_options .gt-prod-var-box-sub .flock_item input').on('click', function(){
      let com_p = $(this).attr('data-comp-price');
      let sub_p = $(this).attr('data-subs-price');
      let save_p = $(this).attr('data-save-price');
      let s_price = $(this).attr('data-v-price');
      let original_price = $('.flock_options.subscribe_save .gt-prod-var-box-sub .flock_item input:checked').attr('data-original-price');
      let v_id = $(this).attr('data-v-id');
       $('#buy_box_form .product-variant-id').val(v_id);
      $('.bbfreq_radio_wrapper .subscribe-label .frq_info .save-price').text(save_p);
      $('.bbfreq_radio_wrapper .subscribe-label .frq_info .ss-price').text(sub_p);
      $('.bbfreq_radio_wrapper .subscribe-label .frq_info .ss-comp-price').text(com_p);
      $('.product-form__buttons .product-form__submit .product-price .price').text(sub_p);
      $('.product-form__buttons .product-form__submit .product-price .compare-price').text(com_p);
      $('.bbfreq_radio_wrapper .frq_info .ot-price').text(s_price);   
      let instock = $(this).attr('data-instock');
      if(instock == 'false'){
        $('.product-form__submit').attr('disabled','disabled');
        $('.product-form__submit span').text('Sold Out-');
      }else{
        $('.product-form__submit').removeAttr('disabled');
        $('.product-form__submit span').text('Add to cart-');
      }
  });

  $('.bb_frequancy_inner .bbfreq_radio_wrapper input').on('click',function(){
    let check_name  = $(this).val();
    if(check_name == 'onetime'){
      $('.flock_options.one_time').show();
      $('.flock_options.subscribe_save').hide();
      let ot_c_price = $('.flock_options.one_time .gt-prod-var-box-sub .flock_item input:checked').attr('data-comp-price');
      let ot_original_price = $('.flock_options.one_time .gt-prod-var-box-sub .flock_item input:checked').attr('data-v-price');
      let ot_save_price = $('.flock_options.one_time .gt-prod-var-box-sub .flock_item input:checked').attr('data-save-price');
      let sub_original_price = $('.flock_options.one_time .gt-prod-var-box-sub .flock_item input:checked').attr('data-subs-price');
      $('.bbfreq_radio_wrapper .subscribe-label .frq_info .save-price').text(ot_save_price);
      $('.bbfreq_radio_wrapper .subscribe-label .frq_info .ss-price').text(sub_original_price);
      $('.bbfreq_radio_wrapper .subscribe-label .frq_info .ss-comp-price').text(ot_c_price);
      $('.product-form__buttons .product-form__submit .product-price .price').text(ot_original_price);
      $('.product-form__buttons .product-form__submit .product-price .compare-price').text(ot_c_price);
      $('.bbfreq_radio_wrapper .frq_info .ot-price').text(ot_original_price);
      $('.flock_options.one_time .gt-prod-var-box-sub:first-child .flock_item input').trigger('click');
      $('.flock_options.one_time .gt-prod-var-box-sub:first-child').addClass('active');
    }else{
      $('.flock_options.one_time').hide();
      $('.flock_options.subscribe_save').show();
       let ot_c_price = $('.flock_options.subscribe_save .gt-prod-var-box-sub .flock_item input:checked').attr('data-comp-price');
      let ot_original_price = $('.flock_options.subscribe_save .gt-prod-var-box-sub .flock_item input:checked').attr('data-v-price');
      let ot_save_price = $('.flock_options.subscribe_save .gt-prod-var-box-sub .flock_item input:checked').attr('data-save-price');
      let sub_original_price = $('.flock_options.subscribe_save .gt-prod-var-box-sub .flock_item input:checked').attr('data-subs-price');
      $('.bbfreq_radio_wrapper .subscribe-label .frq_info .save-price').text(ot_save_price);
      $('.bbfreq_radio_wrapper .subscribe-label .frq_info .ss-price').text(sub_original_price);
      $('.bbfreq_radio_wrapper .subscribe-label .frq_info .ss-comp-price').text(ot_c_price);
      $('.product-form__buttons .product-form__submit .product-price .price').text(ot_original_price);
      $('.product-form__buttons .product-form__submit .product-price .compare-price').text(ot_c_price);
      $('.bbfreq_radio_wrapper .frq_info .ot-price').text(ot_original_price);
      $('.flock_options.subscribe_save .gt-prod-var-box-sub:first-child .flock_item input').trigger('click');
      $('.flock_options.subscribe_save .gt-prod-var-box-sub:first-child').addClass('active');
    }
  });

  $('.product-form__submit').on('click',function(e){
    e.preventDefault();
    let $this = $(this);
    $this.attr('disabled','disabled');
    $this.find('.loader').addClass('show');
    var itemsArray = [];
    let var_id = $('.product-variant-id').val();

    var fre_op =  $('.bb_frequancy_inner .bbfreq_radio_wrapper input:checked').val();
    if(fre_op == 'onetime'){
        var customItem = [
          {
            id: var_id,
            quantity: 1
          }
        ];
      itemsArray.push(...customItem);
    }else{
        var selling_plan_id = $('#frquancy option:selected').val();     
        var customItem = [{
          id: var_id,
          quantity: 1,
          selling_plan: selling_plan_id
        }];
        itemsArray.push(...customItem);
    }

    $.ajax({
        url: '/cart/add.js',
        method: "POST",
        dataType: "JSON",
        data: { items: itemsArray },
        success: function (data) {
           fetch(`${window.location.pathname}?sections=cart-drawer,cart-icon-bubble`)
              .then(response => response.json())
              .then((sections) => {

                const cartDrawer = document.querySelector('cart-drawer');

                cartDrawer.renderContents({
                  id: data.id,
                  sections: {
                    'cart-drawer': sections['cart-drawer'],
                    'cart-icon-bubble': sections['cart-icon-bubble']
                  }
                });

            });

          $this.find('.loader').removeClass('show');
          $this.removeAttr('disabled');
        },
          error: function (data) {
        }
    });

  });
});