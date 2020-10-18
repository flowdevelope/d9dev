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
        arrows: false,
      });

    }
  }

})(jQuery, Drupal);
