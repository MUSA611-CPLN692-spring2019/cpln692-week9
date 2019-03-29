mapboxgl.accessToken = 'pk.eyJ1IjoieXlmNjAwIiwiYSI6ImNqdGtmM3J6MTBhaWEzeW9pZWFpb2lyOTAifQ.stgpd_VjLxOBjSAiash8yA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 12,
    center: [-75.190674,39.958977]
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


//Reset center with jQuery by clicking button
//$("#changeCenter").click(function() {
//  map.setCenter(new mapboxgl.Map.LatLng(4.899, 52.372));
//});


//reset center
var changeCenterTo = function() {
  map.panTo([4.899, 52.372]);
};


// ======================
$(document).ready(function() {
      $('#changeCenter').click(function() {
        changeCenterTo();
      });
    }
  );
