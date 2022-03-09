// function makeAlert(){ 
//     alert("Countdown time!");
// };

// setInterval(makeAlert, 10);

// setInterval(function(){ alert("Countdown time!"); }, 10);

var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  console.log('downloadtimer').value = 10 - timeleft;
  timeleft -= 1;
}, 10);
