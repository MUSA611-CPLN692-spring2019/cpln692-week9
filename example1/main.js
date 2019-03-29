mapboxgl.accessToken = 'pk.eyJ1IjoibGFxLWFucWkiLCJhIjoiY2pzNnBoM205MGVrMDQzbXZ2NmJ6NTFnYSJ9.CEYqhti041-OUUvXOSzAOA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/laq-anqi/cjtko6zdc2mlo1fmvka7j4tof',
    zoom: 12,
    center: [-122.447303, 37.753574]
});

map.on('load', function () {

    map.addLayer({
        'id': 'population',
        'type': 'circle',
        'source': {
            type: 'vector',
            url: 'mapbox://examples.8fgz4egr'
        },
        'source-layer': 'sf2010',
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 1.75,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'ethnicity'],
                'White', '#C9306B',
                'Black', '#C8CC95',
                'Hispanic', '#E09D28',
                'Asian', '#71785D',
                /* other */ '#ccc'
            ]
        }
    });
});
