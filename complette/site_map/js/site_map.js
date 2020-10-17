(function ($, Drupal) {
  Drupal.behaviors.SiteMap = {
    attach: function (context, settings) {
      var map;
      var styles = drupalSettings.site_map.style;

      function initMap() {
        var mapLayer = document.getElementById("map-layer");
        var latlng = (new google.maps.LatLng(drupalSettings.site_map.coordinates[0], drupalSettings.site_map.coordinates[1]));

        //var defaultOptions = { center: centerCoordinates, zoom: 5 }
        var styledMap = new google.maps.StyledMapType(styles,
          {name: "Styled Map"});

        var mapOptions = {
          zoom: 12,
          center: latlng,
          scrollwheel: false, // disableScrollingWithMouseWheel as default
          disableDefaultUI: false,
          scaleControl: false,  // fixed to BOTTOM_RIGHT
          panControl: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: true,
          streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
          },
          overviewMapControl: true,
        };

        map = new google.maps.Map(mapLayer, mapOptions);
        map.mapTypes.set("map_style", styledMap);
        map.setMapTypeId("map_style");

        var icon = {
          url: drupalSettings.site_map.marker,
          scaledSize: new google.maps.Size(35, 45),
        };

        var marker = new google.maps.Marker({
          position: latlng,
          map: map,
          title: drupalSettings.site_map.address,
          icon: icon
        });
      }

      google.maps.event.addDomListener(window, "load", initMap);

    }
  }
})(jQuery, Drupal);
