
mapboxgl.accessToken = 'pk.eyJ1IjoicmVwYXJvIiwiYSI6ImNqdGtlaW5ubzAyNzk0M3BoaWtjNTRkcG0ifQ.zIoid_0qjvLcr2fTtyxhxQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-0.103777, 51.509356],
    zoom: 12
});

var swatches = document.getElementById('swatches');
var layer = document.getElementById('layer');
var colors = [
    '#c8c8a9',
    '#a1dab4',
    '#41b6c4',
    '#2c7fb8',
    '#253494',
    '#fed976',
    '#feb24c',
    '#fd8d3c',
    '#f03b20',
    '#bd0026'
];

colors.forEach(function(color) {
    var swatch = document.createElement('button');
    swatch.style.backgroundColor = color;
    swatch.addEventListener('click', function() {
        map.setPaintProperty(layer.value, 'fill-color', color);
    });
    swatches.appendChild(swatch);
});

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-0.124437, 51.501531]
    },
    properties: {
      title: 'Mapbox',
      description: 'Big Ben'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-0.098341, 51.514431]
    },
    properties: {
      title: 'Mapbox',
      description: 'St. Paul Catheral'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-0.075305, 51.506209]
    },
    properties: {
      title: 'Mapbox',
      description: 'Tower Bridge'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-0.126684, 51.520404]
    },
    properties: {
      title: 'Mapbox',
      description: 'British Museum'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-0.141725, 51.504367]
    },
    properties: {
      title: 'Mapbox',
      description: 'Buckingham Palace '
    }
  }]
};

// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    .addTo(map);
});
