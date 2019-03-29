mapboxgl.accessToken = 'pk.eyJ1Ijoicm9jaGlubmVyIiwiYSI6ImNpdjdraTF0bDAwMTEydG04d2x3cGxidGgifQ.mVnp9OqAHCylzC_RqOXg7A';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g', // the outdoors-v10 style but without Hillshade layers
  center: [-74.088482, 4.657302],
  minZoom: 8,
  maxZoom: 17,
  zoom: 11
});

var swatches = document.getElementById('swatches');
var layer = document.getElementById('layer');
var colors = [
  '#5ca1a1',
  '#a1dab4',
  '#41b6c4',
  '#2c7fb8',
  '#253494',
  '#a1a300',
  '#a1ce00',
  '#6e9f6b',
  '#15696d',
  '#103b29'
];

colors.forEach(function(color) {
  var swatch = document.createElement('button');
  swatch.style.backgroundColor = color;
  swatch.addEventListener('click', function() {
    map.setPaintProperty(layer.value, 'fill-color', color);
  });
  swatches.appendChild(swatch);
});

map.on('load', function () {

  map.addLayer({
    "id": "hillshading",
    "source": {
      "type": "raster-dem",
      "url": "mapbox://mapbox.terrain-rgb"
    },
    "type": "hillshade"
    }, 'waterway-river-canal-shadow');

});
