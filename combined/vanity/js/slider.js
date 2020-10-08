(function ($, Drupal) {
  Drupal.behaviors.Slider = {
    attach: function (context, settings) {

      $('.leistungen.slider', context).once().slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        autoplaySpeed: 2000,
        variableWidth: false,
        focusOnSelect: true,
        adaptiveHeight: false,
        centerMode: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></button>",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      })
        .on('setPosition', function (event, slick) {
          $('.aktuelles').find('.slick-slide').css('height', slick.$slideTrack.height() + 'px');
        });

      $('.sliderreferenz', context).once().slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        autoplaySpeed: 2000,
        variableWidth: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        centerMode: false,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></button>",
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      })
        .on('setPosition', function (event, slick) {
          $('.aktuelles').find('.slick-slide').css('height', slick.$slideTrack.height() + 'px');
        });

    }
  }
})(jQuery, Drupal);
