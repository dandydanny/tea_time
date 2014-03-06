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

    $("#create-form").submit(function(event){

    console.log("create clicked");
    event.preventDefault();

    var teaName = $("#newtea-name").val();
    var teaOpinion = $("#create-newtea-thoughts").val();

    console.log(teaName);
    console.log(teaOpinion);
    $.ajax({
      type: "POST",
      url: "/add",
      dataType: 'json',
      data: {tea_name: teaName, opinion: teaOpinion},
    }).done(function(msg) {
      // $( "#tea-associations" ).append(
      //   "<tr><td><a href=\"tea\\"+msg.tea_id+"\"><div class=\"table-cell-link\">"+msg.tea_name+"</div></a></td>" +
      //   "<td>" + msg.opinion + "</td>" +
      //   "<td><button class=\"edit-button\" id=\"edit-button-"+msg.tea_id+"\" value=\""+msg.tea_id+"\">Edit</button>" +
      //   "<button class=\"dissociate-button\" id=\"dissociate-button-"+msg.tea_id+"\" value=\""+msg.tea_id+"\">Dissociate</button></td>"
      // );
    });
  });

  $("#associate-form").submit(function(event){

    console.log("assoc clicked");
    event.preventDefault();

    var teaName = $("#tea-selection").val();
    var teaOpinion = $("#associate-newtea-thoughts").val();

    console.log(teaName);
    console.log(teaOpinion);
    $.ajax({
      type: "POST",
      url: "/associate",
      dataType: 'json',
      data: {tea_name: teaName, opinion: teaOpinion},
    }).done(function(msg) {
      $( "#tea-associations" ).append(
        "<tr><td><a href=\"tea\\"+msg.tea_id+"\"><div class=\"table-cell-link\">"+msg.tea_name+"</div></a></td>" +
        "<td>" + msg.opinion + "</td>" +
        "<td><button class=\"edit-button\" id=\"edit-button-"+msg.tea_id+"\" value=\""+msg.tea_id+"\">Edit</button>" +
        "<button class=\"dissociate-button\" id=\"dissociate-button-"+msg.tea_id+"\" value=\""+msg.tea_id+"\">Dissociate</button></td>"
      );
    });
  });

  $(".dissociate-button").click(function(event){
  var prefId = $(this).attr("value");
    $.ajax({
      type: "POST",
      url: "/dissociate",
      data: {pref_id: prefId},
    }).done(function() {
      $( event.target ).closest( "tr" ).fadeOut();
    });
  });


  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
