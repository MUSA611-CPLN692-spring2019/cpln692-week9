mapboxgl.accessToken = 'pk.eyJ1Ijoicm9jaGlubmVyIiwiYSI6ImNpdjdraTF0bDAwMTEydG04d2x3cGxidGgifQ.mVnp9OqAHCylzC_RqOXg7A';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
  zoom: 16,
  center: [-77.104486, 38.881470]
});
//center: [-77.0318472, 38.912571]

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
  var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].onclick = switchLayer;
}
