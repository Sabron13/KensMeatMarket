$(document).ready(function() {
  
  //google map api
  function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    console.log(mapCanvas);
    var mapOptions = {
      center: new google.maps.LatLng(41.070046, -85.017082),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker=new google.maps.Marker({
      position:mapOptions.center,
    });

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
