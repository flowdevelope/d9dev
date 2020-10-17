(function ($, Drupal) {
  Drupal.behaviors.Vanity = {
    attach: function (context, settings) {

      $('.topnav a', context).on('click touch', function(e){
        var target = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(target).offset().top - 10
        }, 2000);
      });

    }
  }

})(jQuery, Drupal);
