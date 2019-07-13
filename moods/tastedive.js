//event listener to start search for similar artist
$("#yes").on("click", function()  {

    var search = $(this).attr("data-search");
    console.log(search);
//API
    var queryURL = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + search +"&type=music&k=340009-MelsDaug-2VN6UKUW&info=1&limit=3"
    
// Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
        })
    
    .then(function(response) {
        console.log(response);

// storing the data from the AJAX request in the results variable
        var results = response.Similar.Results;
        console.log(results);

// Looping through length =3
        for (var i = 0; i < results.length; i++) {
    
// Creating and storing a div tag...for artist results
            var artistDiv = $("<div>");
    
// Creating a p tag for the Name of the artist
             var p = $("<p>").text("Artist Name: " + results[i].Name);
       
// Creating and assigning attributes to iframe...for video
           
            var video = $('<iframe>')
            video.attr('src', results[i].yUrl)
            video.attr('width', 360)
            video.attr('height', 300)
            video.attr('allow', '"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"')
    
// Appending both video and artist name to the artistDiv
            artistDiv.append(p);
            artistDiv.append(video);
    
// Prependng the artistDiv to the HTML
            $("#similarArtists").prepend(artistDiv);
        }
    });
})