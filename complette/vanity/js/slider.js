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
        prevArrow: "<img class='slick-prev' src='/themes/custom/vanity/images/Pfeil_links.svg'>",
        nextArrow: "<img class='slick-next' src='/themes/custom/vanity/images/Pfeil_rechts.svg'>",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 992,
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
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        autoplaySpeed: 2000,
        variableWidth: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        prevArrow: " ",
        nextArrow: " ",
        centerMode: false,
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
