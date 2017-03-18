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
        $("#submit").on("click", function(event){
          event.preventDefault();

          //grab user input
          var train_Name = $("#train-name").val().trim();
          var train_Dest = $("#destination").val().trim();
          var train_Start = $("#start-time").val().trim();
          var train_Freq =  $("#frequency").val().trim();    

          database.ref().push({
            trainName: train_Name,
            trainDest: train_Dest,
            trainStart: train_Start,
            trainFreq: train_Freq
          });
        
          

        //send the got data into the chart

          });

  	database.ref().on("value", function(snapshot) {

            var newRow = $("<tr>")
            .append( $("<td>").html(snapshot.val().trainName))
            .append( $("<td>").html(snapshot.val().trainDest))
            .append( $("<td>").html(snapshot.val().trainFreq))
            .append( $("<td>"))
            .append( $("<td>"))
            .append( $("<td>"));


          $(".table").append(newRow);
//button for adding employees

  });

       