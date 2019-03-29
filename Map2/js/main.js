mapboxgl.accessToken = 'pk.eyJ1Ijoiem1nZ216IiwiYSI6ImNqOTM1aXo4eDN1cHYzNG1ydzB5MnllNXgifQ.qpM-JL_cTuhKFYUZbh01PQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 11,
center: [-75.16, 40]
});

map.on('load', function() {
  var dataset = "https://gist.githubusercontent.com/LiZhuang214/998cf018440823bc04e34feb22304b4b/raw/f11ffd4666b8087b6f4728c2101a48a1cdb333d2/landmarkMuseumHist.geojson";
  var parsedData;
  $.ajax(dataset).done(function(data){
    parsedData = JSON.parse(data);
  });
  map.addSource('source_id', { type: 'geojson', data: parsedData});
});

var url = 'https://gist.githubusercontent.com/LiZhuang214/998cf018440823bc04e34feb22304b4b/raw/f11ffd4666b8087b6f4728c2101a48a1cdb333d2/landmarkMuseumHist.geojson';
map.on('load', function () {
window.setInterval(function() {
map.getSource('museum').setData(url);
}, 2000);

map.addSource('museum', { type: 'geojson', data: url });
map.addLayer({
"id": "museum",
"type": "symbol",
"source": "museum",
"layout": {
"icon-image": "town-hall-15"
}
});

map.addSource('contours', {
type: 'vector',
url: 'mapbox://mapbox.mapbox-terrain-v2'
});
map.addLayer({
'id': 'contours',
'type': 'line',
'source': 'contours',
'source-layer': 'contour',
'layout': {
'visibility': 'visible',
'line-join': 'round',
'line-cap': 'round'
},
'paint': {
'line-color': '#877b59',
'line-width': 1
}
});
});

var toggleableLayerIds = [ 'contours', 'museum' ];

for (var i = 0; i < toggleableLayerIds.length; i++) {
var id = toggleableLayerIds[i];

var link = document.createElement('a');
link.href = '#';
link.className = 'active';
link.textContent = id;

link.onclick = function (e) {
var clickedLayer = this.textContent;
e.preventDefault();
e.stopPropagation();

var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

if (visibility === 'visible') {
map.setLayoutProperty(clickedLayer, 'visibility', 'none');
this.className = '';
} else {
this.className = 'active';
map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
}
};

var layers = document.getElementById('menu');
layers.appendChild(link);
}
