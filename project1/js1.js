

// $( document ).ready(function() {
  // Handler for .ready() called.
  mapboxgl.accessToken = 'pk.eyJ1IjoicmVwYXJvIiwiYSI6ImNqdGtlaW5ubzAyNzk0M3BoaWtjNTRkcG0ifQ.zIoid_0qjvLcr2fTtyxhxQ';
  var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/reparo/cjttgliy6010e1fl5g052ho01', // stylesheet location
      center:[-75.1020, 39.950], // starting position [lng, lat]
      zoom: 10 // starting zoom
  });
// });
