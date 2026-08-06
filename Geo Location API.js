navigator.geolocation.getCurrentPosition(function(position){
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
    console.log("Accuracy: " + position.coords.accuracy + " meters.");
});