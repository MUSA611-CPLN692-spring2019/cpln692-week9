mapboxgl.accessToken = 'pk.eyJ1IjoiZGdidWNrbGVyIiwiYSI6ImNqdGtlajExMTM5c2s0Ym8zdzI4eGFpZDcifQ.BWCDdvvWrI8f4hBHA2FR9g';

//var scale = ;

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.50, 40],
  zoom: 9
});

document.getElementById('fly').addEventListener('click', function () {
  // Fly to a random location by offsetting the point -74.50, 40
  // by up to 5 degrees.
  map.flyTo({
    center: [
    -74.50 + (Math.random() - 0.5) * parseInt($('#scale').val()),
    40 + (Math.random() - 0.5) * parseInt($('#scale').val())]
  });
});
