mapboxgl.accessToken = "pk.eyJ1Ijoiam9ub3l1YW4iLCJhIjoiY2p0a2Yza3B0MGFmYzQ0azZ6N3Fpa3lzZCJ9.psMUwWS3BJLfS_C0CwJTHQ";
var map1 = new mapboxgl.Map({
  container: "map1",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-75.1652, 39.9526],
  zoom: 12
});
var map2 = new mapboxgl.Map({
  container: "map2",
  style: "mapbox://styles/mapbox/satellite-v9",
  center: [-75.1652, 39.9526],
  zoom: 12
});


// sync both maps
var disable = false;
map1.on("move", function() {
  if (!disable) {
    var center = map1.getCenter();
    var zoom = map1.getZoom();
    var pitch = map1.getPitch();
    var bearing = map1.getBearing();

    disable = true;
    map2.setCenter(center);
    map2.setZoom(zoom);
    map2.setPitch(pitch);
    map2.setBearing(bearing);
    disable = false;
  }
})
map2.on("move", function() {
  if (!disable) {
    var center = map2.getCenter();
    var zoom = map2.getZoom();
    var pitch = map2.getPitch();
    var bearing = map2.getBearing();

    disable = true;
    map1.setCenter(center);
    map1.setZoom(zoom);
    map1.setPitch(pitch);
    map1.setBearing(bearing);
    disable = false;
  }
})

// add geocoder
map1.addControl(new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
}));
