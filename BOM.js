//lenguaje del browser
const lang = navigator.language
console.log(lang)

//user of the web
var user = navigator.userAgent
console.log(user)

var myCacheStorage = self.caches;
console.log(myCacheStorage)

//pixel bit depth of the screen
let depth = window.screen.pixelDepth
console.log(depth)

let screenW = window.screen.width
var screenH = window.screen.height
console.log(screenW, screenH)

//geolocalizacion
var x = document.getElementById("demo");

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitud: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
getLocation()