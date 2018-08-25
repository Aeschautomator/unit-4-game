$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    // allows a random number to be selected, by taking a random decimal between 0 & 1, multiplying it by 101, and adding 19.
    // this results in a number 20-120
    $('#randomNumber').text(Random);
    // writing the random number to the random number ID in the html doc
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
// these are our gem variables
var userTotal = 0;
var wins = 0;
var losses =0;
// declaring variables (i forgot this first try and it was broken!)

// adds wins to userTotal
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#finalTotal').text(userTotal);
    } 




function Victory(){
alert('you win!');
wins++;
$('#numberWins').text(wins);
reset();
}
// adds losses to userTotal
function Loss(){
    alert('You lose!');
    losses--;
    $('#numberLosses').text(losses);
    reset();
}
// configures click for gems
 $('#one').on ('click', function(){
    userTotal = userTotal +num1;
    console.log('New userTotal='+ userTotal);
    $('#finalTotal').text(userTotal);
    // setting win/loss conditions
    if (userTotal == Random){
        Victory();
    }
    else if (userTotal > Random){
        Loss();
    }
})
    $('#two').on ('click',function(){
        userTotal = userTotal +num2;
        console.log('New userTotal='+ userTotal);
        $('#finalTotal').text(userTotal);
        // setting win/loss conditions
        if (userTotal == Random){
            Victory();
        }
        else if (userTotal > Random){
            Loss();
        }
    })
        $('#three').on ('click',function(){
            userTotal = userTotal +num3;
            console.log('New userTotal='+ userTotal);
            $('#finalTotal').text(userTotal);
            // setting win/loss conditions
            if (userTotal == Random){
                Victory();
            }
            else if (userTotal > Random){
                Loss();
            }
        })
            $('#four').on ('click',function(){
                userTotal = userTotal +num4;
                console.log('New userTotal='+ userTotal);
                $('#finalTotal').text(userTotal);
                // setting win/loss conditions
                if (userTotal == Random){
                    Victory();
                }
                else if (userTotal > Random){
                    Loss();
                }
            });   
          }); 