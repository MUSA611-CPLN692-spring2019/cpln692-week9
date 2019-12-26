mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbHlodSIsImEiOiJjanRraXBjYjAwMDZiNDRxbHg3cDlwbHA5In0.Z8oZamlBpJF4Sv58aC1c_A';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [23.7220485, 37.975264],
  minZoom: 9.5,
  maxZoom: 22,
  zoom: 16
});

var slider = document.getElementById('slider');
var sliderValue = document.getElementById('slider-value');

map.on('load', function() {

  map.addLayer({
    "id": "agora",
    "source": {
      "type": "raster",
      "url": "mapbox://emilyhu.7w3gxksb"
    },
    "type": "raster"
  });

  slider.addEventListener('input', function(e) {
    // Adjust the layers opacity. layer here is arbitrary - this could
    // be another layer name found in your style or a custom layer
    // added on the fly using `addSource`.
    map.setPaintProperty('agora', 'raster-opacity', parseInt(e.target.value, 10) / 100);

    // Value indicator
    sliderValue.textContent = e.target.value + '%';
  });
});
var popup = new mapboxgl.Popup({
    closeOnClick: false
  })
  .setLngLat([23.719, 37.9748834])
  .setHTML('<h3>Welcome to Agora!</h3><h4>Public place with civic and religious institutions <br> from Archaic Period to Roman Period</h4>')
  .addTo(map);
