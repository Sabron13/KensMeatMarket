$(document).ready(function() {
  
  //google map api
  function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
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

  $('#category').click(function(event) {
    event.preventDefault();
    var $target = $(event.target);
    $.ajax({
      url: $target.attr("href"),
      type: 'GET'
    }).done(function(response){
      console.log(response)
      $("#product-wrapper").html(response);
    });
  });
  
});
