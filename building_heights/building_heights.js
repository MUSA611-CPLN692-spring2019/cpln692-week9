mapboxgl.accessToken = 'pk.eyJ1IjoiYW5nZWxpY2FraW0yOCIsImEiOiJjajg0dW95ZzYwZXU0MnFzNXlrdXRjdTg1In0.weV0JEvwfGOD-05H2x8EAw';
var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-122.3969, 37.7899],
    zoom: 15.5,
    pitch: 45,
    bearing: -17.6,
    container: 'map'
});

// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': 0.6
        }
    }, labelLayerId);
});
