mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleDBlYXN5IiwiYSI6ImNqdGtmM3p0aDBjMjk0NHVvZHlwa29mdnYifQ.7V5_Hbxoh4KWZElnFQFrxA';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-75, 40], // starting position [lng, lat]
  zoom: 11 // starting zoom
});

// ================
var newyork = function() {
  map.panTo([-73.9736, 40.7739]);
};

var phila = function () {
  map.panTo([-75.1640, 39.9526]);
};


// ======================
$(document).ready(function() {

      $('#ny').click(function() {
        newyork();
      });

      $('#philly').click(function() {
        phila();
      });

    }
  );
