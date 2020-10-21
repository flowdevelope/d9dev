(function ($, Drupal) {
  Drupal.behaviors.Vanity = {
    attach: function (context, settings) {

      $(window).on('load resize', function() {
        var win = $(this);
        $('.topnav a', context).on('click touch', function (e) {
          var target = $(this).attr('href');
          $('html, body').animate({
            scrollTop: $(target).offset().top - 250
          }, 2000);
          if (win.width() < 1023) {
            $('.navbar-collapse').removeClass('show');
            $('.overlay').toggle('slow');
            $('header').removeClass('headercolor');
          }
        });
      });

      $('.navbar-toggle', context).on('click touch', function(e){
        $('.overlay').toggle('slow');
        $('header').toggleClass('headercolor');
      });

      $('.rolldown', context).on('click touch', function(e){
        $('html, body').animate({
          scrollTop: $('#kontakt').offset().top - 250
        }, 2000);
      });

    }
  }

})(jQuery, Drupal);
