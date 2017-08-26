 var map, infoWindow, pos, ride;
 var previousMode = "WALKING";
 var posAdded = new Boolean(false);
      function initMap() {
		var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
		 
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -41.2865, lng: 174.7762},
          zoom: 6
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
	function onClickMode(mode){
	removeStyle();
	if(mode == "TRANSIT1"){
		previousMode = "TRANSIT";
		mode1 = mode;
	}else{
    previousMode = mode;
	}
    addStyle();
}
function removeStyle(){
    var previous = document.getElementById(previousMode);
    previous.classList.remove("highlightedIcon");
}

function addStyle(){
    var current = document.getElementById(previousMode);
    current.classList.add("highlightedIcon");
}

	  