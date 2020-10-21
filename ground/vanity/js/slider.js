(function ($, Drupal) {
  Drupal.behaviors.Slider = {
    attach: function (context, settings) {


      $('.field-galery').unwrap();
      $('.field-galery').unwrap();
      $('.field-galery').unwrap();
      $('.imagegalery', context).once().slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: false,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });

      $('.field-team').unwrap();
      $('.field-team').unwrap();
      $('.field-team').unwrap();
      $('.team-slider', context).once().slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",
      });

    }
  }
})(jQuery, Drupal);
