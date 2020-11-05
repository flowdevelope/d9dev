(function ($, Drupal) {
  Drupal.behaviors.Vanity = {
    attach: function (context, settings) {

      var menu = $("#block-infoblock").html();
      $(window).on('load resize', function () {
        var win = $( window ).width();
        if (win < 992 ) {
          $(".drilldown").html(menu);
          $("#block-infoblock").html('');
        } else {
          $("#block-infoblock").html(menu);
          $(".drilldown").html('');
        }
      });

      $(window).on('load resize', function(){
        var win = $(this);

        if (win.width() < 1023) {
          var proheight = $('.projektheader .headerbox').innerHeight() - 150;
          $('.projektheader').css('min-height', proheight + 'px');
          $('.projektheader .blur').css('min-height', proheight + 'px');
        } else {
          $('.projektheader').css('min-height',win.height() - 150);
          $('.blur').css('min-height', win.height() - 150);
        }
        if (win.width() < 669) {
          var pheight = $('.pageheader .headerbox').innerHeight() + 100;
          $('.pageheader').css('min-height', pheight + 'px');
          $('.pageheader .blur').css('min-height', pheight + 'px');
        } else {
          $('.pageheader').css('min-height',win.height() - 45);
          $('.pageheader .blur').css('min-height', win.height() - 45);
        }
        var i=0;
        $('.projektcontent .body').each(function(){
          if (win.width() < 768) {
            var shorttext = '';
            shorttext = projekttext[i].substr(0, projekttext[i].lastIndexOf(' ', 60));
            $(this).text(shorttext + ' ...');
          } else {
            var longtext = '';
            longtext = projekttext[i].substr(0, projekttext[i].lastIndexOf(' ', 160));
            $(this).text(longtext + ' ...');
          }
          i++;
        });

      });
      /*
      $('.navbar-toggle', context).on('click touch', function(e){
        $('.overlay').toggle('slow');
        $('header').toggleClass('green');
      });

       */

      $('.topnav a', context).on('click touch', function (e) {
        $('.navbar-collapse').toggleClass('show');
      });

    }
  }
})(jQuery, Drupal);
