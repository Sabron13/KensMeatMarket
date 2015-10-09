$(".small-4.columns").mouseenter(function(){
    var image= $(this).find('img'),
        description = $(this).find('div');

    description.width(image.width());
    description.height(image.height());
    description.fadeIn();
}).mouseleave(function(){
     var image= $(this).find('img'),
        description = $(this).find('div');
    
    description.width(image.width());
    description.height(image.height());
    description.fadeOut();
});

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
