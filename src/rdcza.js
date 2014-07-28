document.documentElement.setAttribute('data-ua', navigator.userAgent);

$(document).ready(function() {

  Modernizr.addTest('backgroundcliptext', function() {
    var div = document.createElement('div');
    div.style.webkitBackgroundClip = "text";
    var text = div.style.cssText.indexOf('text');
    if (text > 0) { return true; }
    'Webkit Moz O ms Khtml'.replace(/([A-Za-z]*)/g, function(val) {
      if (val + 'BackgroundClip' in div.style) { return true; }
    });
  });

  // Google Maps API v3
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(-25.446876,30.884290),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', initialize);

});
