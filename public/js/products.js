$('#category').click(function(event) {
  event.preventDefault();
  var $target = $(event.target);
  $.ajax({
    url: $target.attr("href"),
    type: 'GET'
  }).done(function(response){
    $("#product-wrapper").html(response);
  });
});

$('#description').click(function(event) {
  event.preventDefault();
  var $target = $(event.target);
  $.ajax({
    url: $target.attr("href"),
    type: 'GET'
  }).done(function(response){
    $("#product-wrapper").html(response);
  });
});

$('#product').click(function(event){
  event.preventDefault();
  var $target = $(event.target);
  $.ajax({
    url: $target.attr("href"),
    type: "GET"
  }).done(function(response){
    $("#product-wrapper").html(response);
  });
});
