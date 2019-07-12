
            // 1. Initialize Firebase
            var config = {
              apiKey: "AIzaSyCO7xVTKd_so2HMDHj-2tfQ0_lfWWeWU2k",
              authDomain: "projectone-f353e.firebaseapp.com",
              databaseURL: "https://projectone-f353e.firebaseio.com/",
              projectID: "projectone-f353e",
              storageBucket: "projectone-f353e.appspot.com"
              };
      
              firebase.initializeApp(config);
      
              var database = firebase.database();
      
              //When a visitor clicks any button, sends data of button clicked to firebase
      
              //Compares button that the visitor clicked to all other buttons visitor clicked,
              //and displays either how many or the percentage of visitors that selected that 
              //same button (emotion)
      
              //variables that record whatever the user clicked and records the value
              var optionA;
              var optionB;
              var optionC;
              var optionD;
              var optionE;
              var optionF;
              var clickCounter;
      
              var displayOne = (optionA / clickCounter) * 100;
              var displayTwo = (optionB / clickCounter) * 100;
              var displayThree = (optionC / clickCounter) * 100;
              var displayFour = (optionD / clickCounter) * 100;
              var displayFive = (optionE / clickCounter) * 100;
              var displaySix = (optionF / clickCounter) * 100;
              console.log(displayOne);
      
              //variable that compares whatever the user clicked on to all other clicks 
              //and makes it a percentage
      
              //need variables that hold each of the clicks on the individual buttons
      
              //then need variables for the percentage of time the button was clicked against the total
      
              //div that displays the total of visitors who selected that option vs the total
      
      // // 2. function for recording whatever button the user clicked 

      $("a").on("click", function() {
      //   event.preventDefault();
       
        database.ref().update({
          clickCount: clickCounter + 1
        });
    
      });
      
      $("a#optionOne").on("click", function(){
        console.log(optionA);
      
        database.ref().update({
          btn1: optionA + 1
        });
        var displayOne = (optionA / clickCounter) * 100;
        console.log(displayOne);
        console.log(optionA);
      //   console.log(displayOne);
      //   $("#show-results").show();
  
      
      });
      
      
      $("a#optionTwo").on("click", function(){
        console.log(optionB);
      
        database.ref().update({
          btn2: optionB + 1
        });
        var displayTwo = (optionB / clickCounter) * 100;
        console.log(optionB);
        console.log(displayTwo);
      //   $("#show-results").show();
      //   $("#show-results").append(displayTwo.toFixed(0) + " percent of users also feel sad :'(");
      
      });
      
      
      $("a#optionThree").on("click", function(){
        console.log(optionC);
      
        database.ref().update({
          btn3: optionC + 1
        });
        var displayThree = (optionC / clickCounter) * 100;
        console.log(optionC);
        console.log(displayThree);
      //   $("#show-results").show();
      //   $("#show-results").append(displayThree.toFixed(0) + " percent of users also feel LIIIIIT ");
      
      });
      
      
      $("a#optionFour").on("click", function(){
        console.log(optionD);
      
        database.ref().update({
          btn4: optionD + 1
        });
        var displayFour = (optionD / clickCounter) * 100;
        console.log(optionD);
        console.log(displayFour);
      //   $("#show-results").show();
      //   $("#show-results").append(displayFour.toFixed(0) + " percent of users also feel focused");
      
      });
      
      
      $("a#optionFive").on("click", function(){
        console.log(optionE);
      
        database.ref().update({
          btn5: optionE + 1
        });
        var displayFive = (optionE / clickCounter) * 100;
        console.log(optionE);
        console.log(displayFive);
      //   $("#show-results").show();
      //   $("#show-results").append(displayFive.toFixed(0) + " percent of users also feel angry >:O");
      
      });
      
      
      $("a#optionSix").on("click", function(){
        console.log(optionF);
      
        database.ref().update({
          btn6: optionF + 1
        });
        var displaySix = (optionF / clickCounter) * 100;
        console.log(optionF);
        console.log(displaySix);
      //   $("#show-results").show();
      //   $("#show-results").append(displaySix.toFixed(0) + " percent of users also feel relaxed");
      
      });

      $("#show-results-happy").append(displayOne.toFixed(0) + " percent of users also feel happy :)");
      $("#show-results-sad").append(displayTwo.toFixed(0) + " percent of users also feel sad :'(");
      $("#show-results-lit").append(displayThree.toFixed(0) + " percent of users also feel LIIIIIT ");
      $("#show-results-angry").append(displayFour.toFixed(0) + " percent of users also feel angry");
      $("#show-results-chill").append(displayFive.toFixed(0) + " percent of users also feel chill");
      $("#show-results-tired").append(displaySix.toFixed(0) + " percent of users also feel tired");
      
      
      database.ref().on(
          'value',
          function(snapshot) {
              console.log(snapshot.val());
  
              clickCounter = parseInt(snapshot.val().clickCount);
  
              optionA = parseInt(snapshot.val().btn1);
              optionB = parseInt(snapshot.val().btn2);
              optionC = parseInt(snapshot.val().btn3);
              optionD = parseInt(snapshot.val().btn4);
              optionE = parseInt(snapshot.val().btn5);
              optionF = parseInt(snapshot.val().btn6);
          },
          function(errorObject) {
              console.log('The read failed: ' + errorObject.code);
          },
      );
      