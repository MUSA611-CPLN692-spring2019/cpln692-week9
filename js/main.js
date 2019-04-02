var phillyCrimeDataUrl = "https://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/json/philadelphia-crime-snippet.json";
var crimedata;

// async ajax call
var getCrimeData = function() {
  $.ajax(phillyCrimeDataUrl).done(function(ajaxResponseValue) {
      crimedata = JSON.parse(ajaxResponseValue);
      console.log(crimedata);
      _.forEach(crimedata, function(x){
          L.marker([x.Lat, x.Lng]).addTo(map);
        });
      });
  };


// run the ajax function
getCrimeData();
