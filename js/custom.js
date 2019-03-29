mapboxgl.accessToken = 'pk.eyJ1IjoiYXN0b3JpYSIsImEiOiJjanRrZndldnIwYXNyNDNrNjJ5MmEzM3ZlIn0.UVOPpK1t3_Qz7U1hOPxBUg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 5,
  center: [114.210108, 26.609287]
});

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
alert("Click button to change background.click markers to see the location of my home, highschool, and college.");
function switchLayer(layer) {
  var layerId = layer.target.id;
  map.setStyle('mapbox://styles/mapbox/' + layerId);
}

var popup1 = new mapboxgl.Popup({
    offset: 25
  })
  .setText('My Home: 101 Yitian Rd');

var popup2 = new mapboxgl.Popup({
    offset: 25
  })
  .setText('My Highschool: Shenzhen Foreign Languages School');

var popup3 = new mapboxgl.Popup({
    offset: 25
  })
  .setText('My College: Wuhan University');

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = switchLayer;
  new mapboxgl.Marker()
    .setLngLat([114.054536, 22.514175])
    .setPopup(popup1)
    .addTo(map);
  new mapboxgl.Marker()
    .setLngLat([114.247208, 22.580275])
    .setPopup(popup2)
    .addTo(map);
  new mapboxgl.Marker()
    .setLngLat([114.359570, 30.529376])
    .setPopup(popup3)
    .addTo(map);
}
