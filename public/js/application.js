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

    marker.setMap(map);
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '661197394013848',
      xfbml      : true,
      version    : 'v2.3'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
});
