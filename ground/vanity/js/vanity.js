(function ($, Drupal) {
  Drupal.behaviors.Vanity = {
    attach: function (context, settings) {

      $('.topnav a', context).on('click touch', function(e){
        var target = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(target).offset().top - 10
        }, 2000);
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
