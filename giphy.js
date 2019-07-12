// Event listener for our cat-button
$(document).ready(function () {




//HAPPY GIF
//
//HAPPY GIF
            var queryURLhappy = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=happy";
        
            // Perfoming an AJAX GET request to our queryURL
            $.ajax({
                url: queryURLhappy,
                method: "GET"
            })
            // After the data from the AJAX request comes back
            .then(function (response) {
                    console.log(queryURLhappy);
                    console.log(response);

                    // Saving the image_original_url property
                    var imageUrl = response.data.fixed_height_small_url;
                    console.log(imageUrl);

                    // Creating and storing an image tag
                    var gifImage = $("<img>");  
                    // Setting the gifImage src attribute to imageUrl
                    gifImage.attr("src", imageUrl);
                    gifImage.attr("alt", "image");
                    console.log(gifImage);
            
                    // Prepending the gifImage to the images div
                    $("#gif-happy").prepend(gifImage);
                
            }); 





//SAD GIF
//
//SAD GIF
        var queryURLsad = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=sad";
        
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
            url: queryURLsad,
            method: "GET"
        })
        // After the data from the AJAX request comes back
        .then(function (response) {
                console.log(queryURLsad);
                console.log(response);

                // Saving the image_original_url property
                var imageUrl = response.data.fixed_height_small_url;
                console.log(imageUrl);

                // Creating and storing an image tag
                var gifImage = $("<img>");  
                // Setting the gifImage src attribute to imageUrl
                gifImage.attr("src", imageUrl);
                gifImage.attr("alt", "image");
                console.log(gifImage);
        
                // Prepending the gifImage to the images div
                $("#gif-sad").prepend(gifImage);
            
        });    
        
        


//LIT GIF
//
//LIT GIF
var queryURLlit = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=lit";
        
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
            url: queryURLlit,
            method: "GET"
        })
        // After the data from the AJAX request comes back
        .then(function (response) {
                console.log(queryURLlit);
                console.log(response);

                // Saving the image_original_url property
                var imageUrl = response.data.fixed_height_small_url;
                console.log(imageUrl);

                // Creating and storing an image tag
                var gifImage = $("<img>");  
                // Setting the gifImage src attribute to imageUrl
                gifImage.attr("src", imageUrl);
                gifImage.attr("alt", "image");
                console.log(gifImage);
        
                // Prepending the gifImage to the images div
                $("#gif-lit").prepend(gifImage);
            
        }); 
        
        


//RELAXED GIF
//
//RELAXED GIF
var queryURLrelaxed = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=relaxed";
        
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
            url: queryURLrelaxed,
            method: "GET"
        })
        // After the data from the AJAX request comes back
        .then(function (response) {
                console.log(queryURLrelaxed);
                console.log(response);

                // Saving the image_original_url property
                var imageUrl = response.data.fixed_height_small_url;
                console.log(imageUrl);

                // Creating and storing an image tag
                var gifImage = $("<img>");  
                // Setting the gifImage src attribute to imageUrl
                gifImage.attr("src", imageUrl);
                gifImage.attr("alt", "image");
                console.log(gifImage);
        
                // Prepending the gifImage to the images div
                $("#gif-relaxed").prepend(gifImage);
            
        });  
        
        

//ANGRY GIF
//
//ANGRY GIF
        var queryURLangry = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=lit";
        
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
            url: queryURLangry,
            method: "GET"
        })
        // After the data from the AJAX request comes back
        .then(function (response) {
                console.log(queryURLangry);
                console.log(response);

                // Saving the image_original_url property
                var imageUrl = response.data.fixed_height_small_url;
                console.log(imageUrl);

                // Creating and storing an image tag
                var gifImage = $("<img>");  
                // Setting the gifImage src attribute to imageUrl
                gifImage.attr("src", imageUrl);
                gifImage.attr("alt", "image");
                console.log(gifImage);
        
                // Prepending the gifImage to the images div
                $("#gif-angry").prepend(gifImage);
            
        });     

    }); 

    



//FOCUSED GIF
//
//FOCUSED GIF
        var queryURLfocused = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=focused";
        
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
            url: queryURLfocused,
            method: "GET"
        })
        // After the data from the AJAX request comes back
        .then(function (response) {
                console.log(queryURLfocused);
                console.log(response);

                // Saving the image_original_url property
                var imageUrl = response.data.fixed_height_small_url;
                console.log(imageUrl);

                // Creating and storing an image tag
                var gifImage = $("<img>");  
                // Setting the gifImage src attribute to imageUrl
                gifImage.attr("src", imageUrl);
                gifImage.attr("alt", "image");
                console.log(gifImage);
        
                // Prepending the gifImage to the images div
                $("#gif-focused").prepend(gifImage);
            
        });  

