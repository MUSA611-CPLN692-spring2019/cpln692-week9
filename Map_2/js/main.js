//SETS UP MAP:
mapboxgl.accessToken = 'pk.eyJ1IjoiaWFuc2Nod2FyemVuYmVyZyIsImEiOiJjanRrZjRvdHkxYW00M3lwZjE5anBoZHpsIn0.1-8tMneyRvUnNTmajpzgEA'; //My Mapbox access token
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v8', //Makes markers appear normally
center: [-75.163623, 39.952297], //Centered on Philly
zoom: 12
});





//ADDS POINTS TO MAP (found out how to do from https://docs.mapbox.com/mapbox-gl-js/example/geojson-markers/):
map.on('load', function () {

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
"coordinates": [-75.193675, 39.951799]
},
"properties": {
"title": "Penn",
"icon": "marker"
}
}, {
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates": [-75.155820, 39.981337]
},
"properties": {
"title": "Temple",
"icon": "marker"
}
}, {
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates": [-75.156009, 39.947895]
},
"properties": {
"title": "TJU",
"icon": "marker"
}
}]
}
},
"layout": {
"icon-image": "{icon}-15",
"text-field": "{title}",
"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
"text-offset": [0, 0.6],
"text-anchor": "top"
}
});
});


//MAKES IT SO DISTANCES CAN BE MEASURED (essentially taken from https://docs.mapbox.com/mapbox-gl-js/example/measure/):
var distanceContainer = document.getElementById('distance');

// GeoJSON object to hold our measurement features
var geojson = {
"type": "FeatureCollection",
"features": []
};

// Used to draw a line between points
var linestring = {
"type": "Feature",
"geometry": {
"type": "LineString",
"coordinates": []
}
};

map.on('load', function() {
map.addSource('geojson', {
"type": "geojson",
"data": geojson
});

// Add styles to the map
map.addLayer({
id: 'measure-points',
type: 'circle',
source: 'geojson',
paint: {
'circle-radius': 6,
'circle-color': '#FC350D'
},
filter: ['in', '$type', 'Point']
});

map.addLayer({
id: 'measure-lines',
type: 'line',
source: 'geojson',
layout: {
'line-cap': 'round',
'line-join': 'round'
},
paint: {
'line-color': '#FC350D',
'line-width': 1.5
},
filter: ['in', '$type', 'LineString']
});

map.on('click', function(e) {
var features = map.queryRenderedFeatures(e.point, { layers: ['measure-points'] });

// Remove the linestring from the group
// So we can redraw it based on the points collection
if (geojson.features.length > 1) geojson.features.pop();

// Clear the Distance container to populate it with a new value
distanceContainer.innerHTML = '';

// If a feature was clicked, remove it from the map
if (features.length) {
var id = features[0].properties.id;
geojson.features = geojson.features.filter(function(point) {
return point.properties.id !== id;
});
} else {
var point = {
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates": [
e.lngLat.lng,
e.lngLat.lat
]
},
"properties": {
"id": String(new Date().getTime())
}
};

geojson.features.push(point);
}

if (geojson.features.length > 1) {
linestring.geometry.coordinates = geojson.features.map(function(point) {
return point.geometry.coordinates;
});

geojson.features.push(linestring);

// Populate the distanceContainer with total distance
var value = document.createElement('pre');
value.textContent = 'Total distance: ' + turf.lineDistance(linestring, 'miles').toLocaleString() + 'mi'; //Makes it so distance appears in miles (in original template, this distance was in km)
distanceContainer.appendChild(value);
}

map.getSource('geojson').setData(geojson);
});
});

/* map.on('mousemove', function (e) {
var features = map.queryRenderedFeatures(e.point, { layers: ['measure-points'] });
// UI indicator for clicking/hovering a point on the map
map.getCanvas().style.cursor = (features.length) ? 'pointer' : 'crosshair';
}); */ //This block of code from the original template was messing things up, so I commented it out
