$(document).ready(function() {


  var gList = [];

  var eddie = "check this";

  $("#addListItem").click(function() {
        gList.push($("#itemInput").val());
        console.log(gList.length);
  });

  $("form#groceryList").submit(function(event) {

    event.preventDefault();

    gList.sort();

    gList.forEach(function(g) {

      if(g){
        g = g.toUpperCase();
        $("ol").append("<li>" + g + "</li>");
      }

    });

    //$("#groceryList").addClass("hidden");
    $("#output").removeClass("hidden");


  });






  //
  //
  //
  //

});
