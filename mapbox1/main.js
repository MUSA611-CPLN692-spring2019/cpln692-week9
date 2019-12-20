mapboxgl.accessToken = 'pk.eyJ1Ijoicm9jaGlubmVyIiwiYSI6ImNpdjdraTF0bDAwMTEydG04d2x3cGxidGgifQ.mVnp9OqAHCylzC_RqOXg7A';

var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-v9',
      maxZoom: 17,
      minZoom: 12,
      zoom: 12,
      center: [-75.187330, 39.952511]
      //center: [-77.0318472, 38.912571]
    });;

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function addPopup() {
  var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([-75.187330, 39.952511])
    .setHTML('<h2>This is my home</h2>')
    .addTo(map);
}

function setupMap() {
    map = new mapboxgl.Map({
    container: 'map',
    maxZoom: 17,
    minZoom: 12,
    zoom: 16,
    center: [-75.187330, 39.952511]
    //center: [-77.0318472, 38.912571]
  });

}

addPopup();

function switchLayer(layer) {
  setupMap();
  addPopup();
  var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
    }

  for (var i = 0; i < inputs.length; i++) {
      inputs[i].onclick = switchLayer;
}
