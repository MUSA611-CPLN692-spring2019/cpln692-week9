mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleDBlYXN5IiwiYSI6ImNqdGtmM3p0aDBjMjk0NHVvZHlwa29mdnYifQ.7V5_Hbxoh4KWZElnFQFrxA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/alex0easy/cjttfwoir036x1fphomtbjcs9',
  center: [-77.769482, 41.316696],
  zoom: 7.0
});

var randomcolor = function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

$(document).ready(function() {
  var changecolor = function(color) {
    map.setPaintProperty('pennsy', 'fill-color', color);
  };

  $('#red').click(function() {
    changecolor('red');
  });

  $('#blue').click(function() {
    changecolor('blue');
  });

  $('#random').click(function() {
    var rc = randomcolor();
    changecolor(rc);
  });

});
