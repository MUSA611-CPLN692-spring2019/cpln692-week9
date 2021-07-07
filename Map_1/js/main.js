//SETS UP MAP:
mapboxgl.accessToken = 'pk.eyJ1IjoiaWFuc2Nod2FyemVuYmVyZyIsImEiOiJjanRrZjRvdHkxYW00M3lwZjE5anBoZHpsIn0.1-8tMneyRvUnNTmajpzgEA'; //My Mapbox access token
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [-75.163623, 39.952297], //Changes center to Philadelphia
zoom: 12 //Zooms to Philadelphia area
});





//SETS UP COLOR CHOOSING (taken from https://docs.mapbox.com/mapbox-gl-js/example/color-switcher/):
var swatches = document.getElementById('swatches');
var layer = document.getElementById('layer');
var colors = [
'#fde0dd',
'#fa9fb5',
'#c51b8a',
'#e5f5e0',
'#a1d99b'
];

colors.forEach(function(color) {
var swatch = document.createElement('button');
swatch.style.backgroundColor = color;
swatch.addEventListener('click', function() {
map.setPaintProperty(layer.value, 'fill-color', color);
});
swatches.appendChild(swatch);
});



//CREATES HOSPITAL ICON WHERE PENN HOSPITAL IS (Found out how to do from https://docs.mapbox.com/mapbox-gl-js/example/geojson-polygon/):
map.on('load', function() { //This whole function first retrieves a red cross image, then places it on Penn Hospital to mark how that is a hospital. Found out how to do from https://docs.mapbox.com/mapbox-gl-js/example/geojson-polygon/
map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_the_Red_Cross.svg/1280px-Flag_of_the_Red_Cross.svg.png', function(error, image) {
if (error) throw error;
map.addImage('hospitalIcon', image);
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
"coordinates": [-75.193438,39.950126] //Coordinates of Penn Hospital
}
}]
}
},
"layout": {
"icon-image": "hospitalIcon",
"icon-size": 0.05
}
});
});
});




// ADDS POPUP TO HOSPITAL ICON (found out how to do from https://docs.mapbox.com/mapbox-gl-js/example/popup/):
var popup = new mapboxgl.Popup({closeOnClick: false}) //"closeOnClick: false" makes it so the popup can close
.setLngLat([-75.193438,39.950126]) //Sets it to the same coordinates as the icon
.setHTML('<h3>Penn Hospital</h3>') //h1 is biggest text and h4 is smallest text I think, so making it h3 controls the text size
.addTo(map); //Adds popup to map
