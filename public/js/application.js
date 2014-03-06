$(document).ready(function() {
  console.log("JS ready!");
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  $(".edit-button").click(function(event){
    event.preventDefault();
    console.log("edit clicked");
    $(this).closest("tr").css({backgroundColor: "darkgreen"}).delay(100).css({backgroundColor: "transparent"});
  });

  $(".associate-button").click(function(event){
  console.log("assoc clicked")

  var buttonElementId = $(this).attr('value');
    $.ajax({
      type: "POST",
      url: "/associate",
      data: {tea_id: buttonElementId},
    }).done(function() {
      $( event.target ).closest( "tr" ).fadeOut();
    });
  });

  $(".dissociate-button").click(function(event){
  var buttonElementId = $(this).attr('value');
    $.ajax({
      type: "POST",
      url: "/dissociate",
      data: {tea_id: buttonElementId},
    }).done(function() {
      $( event.target ).closest( "tr" ).fadeOut();
    });
  });


  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
