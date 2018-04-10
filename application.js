 $( function() {
    $( "button" ).click( function() {
      $( "#data" ).load( "/employeelist.html",function() {
        $( "#status" ).html( "<h1 style='color:pink'>Successfully Loaded!</h1>" );
      });     
    });
  });