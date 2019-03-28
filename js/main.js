
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zc2Jlcm5ldCIsImEiOiJRLTh3WEVNIn0.7S-AEC6jsZUhih6bsJ39nA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 13,
    center: [4.899, 52.372]
});

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}
