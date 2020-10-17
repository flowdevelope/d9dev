(function($, Drupal) {
  "use strict";

  /**
   * Anchor behavior.
   */
  Drupal.behaviors.anchor = {
    attach: function(context, settings) {
      if (settings.showAnchors) {
        anchors.add('.paragraphtitle');
      }

      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
          var target = $(this.hash),
            //headerHeight = jQuery('.main-container').get(0).offsetTop; // Get fixed header height

          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 200
            }, 500);
            return false;
          }
        }
      });
    }
  };

})(jQuery, Drupal);
