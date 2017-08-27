 var map, infoWindow, pos, ride;
 var previousMode = "WALKING";
 var mode1 = 'walk'
 var geocoder;
 var distance;
  
 var posAdded = new Boolean(false);
      function initMap() {
		var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer({
			polylineOptions: {
			strokeColor: "green"
			}
		
		});
		 geocoder = new google.maps.Geocoder();
			map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -36.8485, lng: 174.7633},
          zoom: 10,
		  polylineOptions: {
		  strokeColor: "#79A854"
          },
		   styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": -25
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": -25
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -25
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -25
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
]
        });
		directionsDisplay.setMap(map);
		 var onChangeHandler = () => {
			console.log("worked");
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('gogo').addEventListener('click', onChangeHandler);
      }
	  function findMyLocation(){
		 posAdded = true;
		infoWindow = new google.maps.InfoWindow;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }  
	  }
	var rad = function(x) {
	  return x * Math.PI / 180;
	};

	 var calLat = function(addresss, callback) {
		 var latt
			geocoder.geocode( { 'address': addresss}, function(results, status) {
			  if (status == 'OK') {
				latt = results[0].geometry.location.lat();
				
				console.log(latt);
				callback(latt);
			  } else {
				latt = 'Geocode was not successful for the following reason: ' + status;
			  }
			});
  }
	  var calLng = function(addresss, callback) {
		 var lang;
			geocoder.geocode( { 'address': addresss}, function(results, status) {
			  if (status == 'OK') {
				
				lang = results[0].geometry.location.lng();
				console.log(lang);
				callback(lang);
			  } else {
				lang = 'Geocode was not successful for the following reason: ' + status;
			  }
			});		
  }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

	   function calculateAndDisplayRoute(directionsService, directionsDisplay) {
		if(posAdded == true){
			var _start = pos
		}else{
			var _start = document.getElementById('StartLocation').value + ", nz";	
		}
		var _end = document.getElementById('endLocation').value + ", nz";
		var lngOne;
		var lngTwo;
		var latOne;
		var latTwo;
		var calDistance = function(langStart,latStart,longEnd,latEnd){
			if(lngOne && lngTwo && latOne && latTwo){
			distance = getDistanceFromLatLonInKm(langStart, latStart,longEnd, latEnd);
			}
		}
		calLat(_start, function(value){
			
			lngOne = value
			calDistance(lngOne,lngTwo,latOne,latTwo);
		});
		calLng(_start, function(value){
			lngTwo = value
			calDistance(lngOne,lngTwo,latOne,latTwo);
		});
		calLat(_end, function(value){
			latOne = value
			calDistance(lngOne,lngTwo,latOne,latTwo);
		});
		calLng(_end, function(value){
			latTwo = value
			calDistance(lngOne,lngTwo,latOne,latTwo);
		});
		
        directionsService.route({
          origin: _start,
          destination: _end,
          travelMode: previousMode
        }, function(response, status) {
          if (status === 'OK') {

            directionsDisplay.setDirections(response);
          } else {
            window.alert('please enter a valid location');
          }
        });
      }
	function onClickMode(mode, x){
	removeStyle();
    previousMode = mode;
	mode1 = x;
    addStyle();
	}
	function removeStyle(){
    var previous = document.getElementById(mode1);
    previous.classList.remove("highlightedIcon");
	}

	function addStyle(){
    var current = document.getElementById(mode1);
    current.classList.add("highlightedIcon");
	}
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
	console.log(getDistanceFromLatLonInKm);

	function request(){
        var transportType;

        switch(mode1) {
            case bus:
                transportType=0;
                break
            case train:
                transportType=1;
                break
            case bike:
                transportType=2;
                break
            case walk:
                transportType=3;
                break
            case car:
                transportType=4;
                break
            default:
                transportType=4;
        }

        var obj = "?TransportType="+transportType+"&Distance="+distance;
        var xhr = new XMLHttpRequest();
        var url = "http://ecomuffins.azurewebsites.net/Carbon/Calculate"+obj;
        xhr.open("POST", url, true);
        xhr.onload = function() {
            var jsondata = $.parseJSON(xhr.responseText);

            
            $("#eco .data").text(jsondata.ecoRating);
            $("#carbon .data").text(jsondata.carbonKg);

        };
        xhr.send(null);
    }

    function HideParent(){
	    document.getElementById('greybar').style.display = 'block';
	    document.getElementsByClassName('parentContainer')[0].style.display ="none";
    }

	  