mapboxgl.accessToken = 'pk.eyJ1Ijoiem1nZ216IiwiYSI6ImNqOTM1aXo4eDN1cHYzNG1ydzB5MnllNXgifQ.qpM-JL_cTuhKFYUZbh01PQ';
var map = new mapboxgl.Map({
container: 'map',
zoom: 9,
center: [-75.16, 40],
style: 'mapbox://styles/mapbox/satellite-v9'
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
map.getSource('drone').setData(url);
}, 2000);

map.addSource('drone', { type: 'geojson', data: url });
map.addLayer({
"id": "drone",
"type": "symbol",
"source": "drone",
"layout": {
"icon-image": "town-hall-15"
}
});
});
