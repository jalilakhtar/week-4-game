$( document ).ready(function(){
  var Random = Math.floor(Math.random()*101+19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 to 120
  //
  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc
  var num1 = Math.floor(Math.random()*11+1)
  var num2 = Math.floor(Math.random()*11+1)
  var num3 = Math.floor(Math.random()*11+1)
  var num4 = Math.floor(Math.random()*11+1)
  // Setting random numbers for each crystal, Random number is between 1 to 12
  var userTotal = 0; 
  var wins = 0;
  var losses = 0;
  //  Decaring variables for tallies
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1 = Math.floor(Math.random()*11+1);
      num2 = Math.floor(Math.random()*11+1);
      num3 = Math.floor(Math.random()*11+1);
      num4 = Math.floor(Math.random()*11+1);
      userTotal = 0;
      $('#finalTotal').text(userTotal);
      } 
//adds wins to the userTotal
function yay(){
alert("Wow, You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
//addes the losses to the userTotal
function loser(){
alert ("Sorry, You lost!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}
//click for jewels
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //win/lose conditions
        if (userTotal === Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal === Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//win/lose conditions
          if (userTotal === Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal === Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 