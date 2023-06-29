/* global moment */

// When the page loads, grab and display all of our chirps
$.get("/api/all", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {

        // var row = $("<div>")
        // row.attr("class", "chirp")

        // pAuthor=$("<p>")
        // pAuthor.text(data[i].author + " chirped")
        // row.append(pAuthor)

        // deleteButton=$("<button>")
        // deleteButton.text("X")
        // deleteButton.attr("class:delete")
        // row.append(deleteButton)

        // $("#chirp-area").prepend(row)


        var row = $("<div>");
        row.addClass("chirp");
  
        row.append("<p>" + data[i].author + " chirped.. </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
        row.append("<button class='delete-btn' data=" + data[i].id + ">X</button>")
        $("#chirp-area").prepend(row);
  
      }
  
    }

    

  
  });
  
  // When user chirps (clicks addBtn)
  $("#chirp-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newChirp object
    var newChirp = {
      author: $("#author").val().trim(),
      body: $("#chirp-box").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    console.log(newChirp);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newChirp)
      // On success, run the following code
      .then(function() {
  
        // var row = $("<div>");
        // row.addClass("chirp");
        // row.append("<p>" + newChirp.author + " chirped: </p>");
        // row.append("<p>" + newChirp.body + "</p>");
        // row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
        // row.append("<button class='delete-btn'>X</button>")
        // $("#chirp-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#chirp-box").val("");
  });
  
  $("#chirp-area").on("click", ".delete-btn", function(event){
    event.preventDefault();
    console.log('clicked')

    var chirpId=$(this).attr("data")
    console.log(chirpId)

    // var noteID = $(this).attr("data")
    // console.log(noteID)
  })
