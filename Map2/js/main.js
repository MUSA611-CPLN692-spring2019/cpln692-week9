mapboxgl.accessToken = 'pk.eyJ1Ijoic211bGxhcmt1cGVubiIsImEiOiJjanR0OTZsbXoxMTI2M3lwZTN4cGg1ZGYzIn0.Ma0o0JLjqkxcYq2Mr55G4Q';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-73.9001047,40.561454],
zoom: 12
});

map.on('load', function () {

map.addLayer({
'id': 'BreezyPoint',
'type': 'fill',
'source': {
'type': 'geojson',
'data': {
'type': 'Feature',
'geometry': {
'type': 'Polygon',
'coordinates':
[[[-73.94117634981626, 40.54270587057088],[-73.88555806368345, 40.55972732818516],
  [-73.88272565096372, 40.568855829046],[-73.89311116426938, 40.569247022689765],[-73.92641347139829, 40.562466009165725],
  [-73.94263547152036, 40.55451048301903],[-73.94117634981626, 40.54270587057088]]]

}
}
},
'layout': {},
'paint': {
'fill-color': 'green',
'fill-opacity': 0.8
}
});
});
