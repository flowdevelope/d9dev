(function($, Drupal) {
    "use strict";

    /**
     * Simple play/pause overlay button.
     */
    Drupal.behaviors.vanityShariff = {
        attach: function(context, settings) {
            $('.vanity-shariff', context).each(function() {
                if (!this.hasOwnProperty('shariff')) {
                    var options = {
                        mailBody: function () {
                            return 'Hallo,\n\n' +
                                'gute Inhalte und lesenswerte Blogartikel teile ich immer wieder gern mit Freunden.\n' +
                                'Diesen Artikel auf der Seite von www.flowconcept.de solltest du nicht verpassen!\n' +
                                'Viel Spaß beim Lesen!\n\n' + this.getTitle() + '\n' +
                                '<a href="' +
                                this.getURL() +
                                '">' +
                                this.getURL() +
                                '</a>';
                        }
                    };
                    // Instantiate Shariff with options.
                    this.shariff = new Shariff(this, options);
                    // Add shariff class for theme.
                    $(this).addClass('shariff');
                }
            });
        }
    }

})(jQuery, Drupal);
