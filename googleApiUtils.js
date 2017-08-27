 var map, infoWindow, pos, ride;
 var previousMode = "WALKING";
 var mode1 = 'walk'
 
 var posAdded = new Boolean(false);
      function initMap() {
		var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer({
			polylineOptions: {
			strokeColor: "green"
			}
		
		});
		 
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
	  function displayDis(response){
		  console.log(response);
		  google.maps.geometry.spherical.computeDistanceBetween ();
		
	  }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
	   function calculateAndDisplayRoute(directionsService, directionsDisplay) {
		var radios = document.getElementsByName('ridess');
	
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
			ride = radios[i].value;
			break;
		}
		}
		
		if(posAdded == true){
		var _start = pos
		}else{
		var _start = document.getElementById('StartLocation').value + ", nz";	
		}
		var _end = document.getElementById('endLocation').value + ", nz";
        directionsService.route({
          origin: _start,
          destination: _end,
          travelMode: previousMode
        }, function(response, status) {
          if (status === 'OK') {
			displayDis(response.routes);
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

        var travelDistance = 999;
        var obj = "?TransportType="+transportType+"&Distance="+travelDistance;
        var xhr = new XMLHttpRequest();
        var url = "http://ecomuffins.azurewebsites.net/Carbon/Calculate"+obj;
        xhr.open("POST", url, true);
        xhr.onload = function() {
            alert(xhr.responseText);
            var eco = $("#eco .data");
            eco.text("10");
            $("#carbon .data").text("0");

        };
        xhr.send(null);
    }

    function HideParent(){
	    document.getElementById('greybar').style.display = 'block';
	    document.getElementsByClassName('parentContainer')[0].style.display ="none";
    }

	  