(function ($, Drupal) {
  Drupal.behaviors.Slider = {
    attach: function (context, settings) {

      $('.slider', context).once().slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        centerMode: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></button>",
      });

    }
  }
})(jQuery, Drupal);
