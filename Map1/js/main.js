//Worked with Ian Schwarzenberg
mapboxgl.accessToken = 'pk.eyJ1Ijoic211bGxhcmt1cGVubiIsImEiOiJjanR0OTZsbXoxMTI2M3lwZTN4cGg1ZGYzIn0.Ma0o0JLjqkxcYq2Mr55G4Q';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [-74.1707307,40.73316],
zoom: 17.4
});

map.on('load', function() {
map.loadImage('https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/New_Jersey_Devils_logo.svg/1920px-New_Jersey_Devils_logo.svg.png', function(error, image) {
if (error) throw error;
map.addImage('NJ Devil', image);
map.addLayer({
"id": "points",
"type": "symbol",
"source": {
"type": "geojson",
"data": {
"type": "FeatureCollection",
"features": [{
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates": [-74.1707307,40.73316]
}
}]
}
},
"layout": {
"icon-image": "NJ Devil",
"icon-size": 0.25
}
});
});
});



var swatches = document.getElementById('swatches');
var layer = document.getElementById('layer');
var colors = [
'RED',
'ORANGE',
'YELLOW',
'GREEN',
'BLUE',
'PURPLE',
'BROWN',
'GRAY',
'BLACK',
'WHITE'
];

colors.forEach(function(color) {
var swatch = document.createElement('button');
swatch.style.backgroundColor = color;
swatch.addEventListener('click', function() {
map.setPaintProperty(layer.value, 'fill-color', color);
});
swatches.appendChild(swatch);
});
