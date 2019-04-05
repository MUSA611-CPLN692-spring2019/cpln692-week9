mapboxgl.accessToken = 'pk.eyJ1IjoieXlmNjAwIiwiYSI6ImNqdGtmM3J6MTBhaWEzeW9pZWFpb2lyOTAifQ.stgpd_VjLxOBjSAiash8yA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/yyf600/cjtkfn5or2eoy1fmv238mzayn',
  center: [-75.191960, 39.955161],
  zoom: 6.0
});



// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/light-v10',
//   center: [-96, 37.8],
//   zoom: 3
// });

map.on('load', function() {

  map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [ {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-75.191960, 39.955161]
          },
          "properties": {
            "title": "My home",
            "icon": "campsite"
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


//button function
  $("#btn1").click(function(){alert("Contact 267-665-xxxx")});
