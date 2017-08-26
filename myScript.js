var previousMode = "walk";

function hello() {
    console.log('test')
}

function removeStyle(){
    var previous = document.getElementById(previousMode);
    previous.classList.remove("highlightedIcon");
}

function addStyle(){
    var current = document.getElementById(previousMode);
    current.classList.add("highlightedIcon");
}

function onClickMode(mode){
    removeStyle();
    previousMode = mode;
    addStyle();
}

var map, infoWindow, pos;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -41.2865, lng: 174.7762},
        zoom: 6
    });
}

function findMyLocation(){
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
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("Input").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}
function Clear(id){
    document.getElementById(id).value = null;
}