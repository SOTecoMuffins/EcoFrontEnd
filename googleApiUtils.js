 var map, infoWindow, pos, ride;
 var previousMode = "WALKING";
 var mode1 = 'walk'
 
 var posAdded = new Boolean(false);
      function initMap() {
		var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
		 
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -41.2865, lng: 174.7762},
          zoom: 6,
		   styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
		directionsDisplay.setMap(map);
		 var onChangeHandler = () => {
			console.log("worked");
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('LetsGo').addEventListener('click', onChangeHandler);
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
	  function findMyLonglat(addy){
		infoWindow = new google.maps.InfoWindow;
        if (navigator.geolocation) {
          var pos = navigator.geolocation.getCurrentPosition(addy);
		  var crd = pos.coords;
		  console.log('Your current position is:');
			console.log(`Latitude : ${crd.latitude}`);
			console.log(`Longitude: ${crd.longitude}`);
		console.log(`More or less ${crd.accuracy} meters.`);
		}
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

	  