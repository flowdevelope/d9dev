(function ($, Drupal) {
  Drupal.behaviors.Slider = {
    attach: function (context, settings) {


      $('.leistungen.slider', context).once().slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        autoplaySpeed: 2000,
        variableWidth: false,
        focusOnSelect: true,
        adaptiveHeight: false,
        centerMode: false,
        prevArrow: "",
        nextArrow: "",
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 2,
              dots: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              dots: true,
            }
          }
        ]
      })
        .on('setPosition', function (event, slick) {
          $('.leistungen.slider').find('.slick-slide').css('height', slick.$slideTrack.height() + 'px');
        });

      $('.field-galery').unwrap();

      $('.paragraph--type--imagegallery .items', context).once().slick({
        infinite: false,
        autoplay: true,
        slidesPerRow: 3,
        rows: 2,
        mobileFirst: true,
        prevArrow:"",
        nextArrow:"",
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesPerRow: 1,
              rows: 1,
            }
          }
        ]
      });

    }
  }
})(jQuery, Drupal);
