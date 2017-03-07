 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC1WafIVBOXw0mCMAuDKfIpfkVUL0MuAIo",
    authDomain: "choochee-59974.firebaseapp.com",
    databaseURL: "https://choochee-59974.firebaseio.com",
    storageBucket: "choochee-59974.appspot.com",
    messagingSenderId: "965358546078"
  };
  	 firebase.initializeApp(config);

  // Create a variable to reference the database
 var database = firebase.database();
 	// At the initial load, get a snapshot of the current data.
  	database.ref().on("value", function(snapshot) {

        //button for adding employees
        $("#submit").on("click", function(event){
          event.preventDefault();

          //grab user input
          var trainName = $("#train-name").val().trim();
          var trainDest = $("#destination").val().trim();
          var trainStart = $("#start-time").val().trim();
          var trainFreq =  $("#frequency").val().trim();    

          console.log(trainName);
          console.log(trainStart)

        //send the got data into the chart
        var newRow = $("<tr>")
            .append( $("<td>").html(trainName))
            .append( $("<td>").html(trainDest))
            .append( $("<td>").html(trainFreq))
            .append( $("<td>"))
            .append( $("<td>"))
            .append( $("<td>"));


          $(".table").append(newRow);

          });
  });

       