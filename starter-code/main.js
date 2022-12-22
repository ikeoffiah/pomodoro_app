
const timer = {
    pomodoro: 25,
    shortbreak: 5,
    longbreak: 15,
    longbreakInterval: 4,
  };
  
  let shortbreak_time = 4;
  let longbreak_time = 14;
  let pomodoro_time = 24;
  var intervalId;
  let pomodoro_seconds = 59;
  let longbreak_seconds = 59;
  let shortbreak_seconds = 59;
  let count_min = pomodoro_time;
  let count_seconds = pomodoro_seconds;
  let current_time = (pomodoro_time + 1)*60

  // let pomodoro_current = pomodoro_time*60
  // let shortbreak_current = shortbreak_time*60
  // let longbreak_current = longbreak_time*60

  
  let stateOfApp = "pomodoro";




  if (stateOfApp == "pomodoro"){
    
    current_time = (pomodoro_time + 1)*60
}else if (stateOfApp == "shortbreak"){
    
    current_time = (shortbreak_time + 1)*60
}else if (stateOfApp == "longbreak"){
    
    current_time = (longbreak_time + 1)*60
}
 
  
  function change(e) {
    if (e.id == "shortbreak" || e.id == "longbreak" || e.id == "pomodoro") {
      const activeButton = document.querySelector(".active");
  
      activeButton.classList.add("button");
      activeButton.classList.remove("active");
  
      const currentActive = document.getElementById(e.id);
      stateOfApp = e.id;
      currentActive.classList.remove("button");
      currentActive.classList.add("active");

      if (stateOfApp == "pomodoro"){
    
        current_time = (pomodoro_time + 1)*60
    }else if (stateOfApp == "shortbreak"){
        
        current_time = (shortbreak_time + 1)*60
    }else if (stateOfApp == "longbreak"){
        
        current_time = (longbreak_time + 1)*60
    }
  
      changeTime(e.id);
      clearInterval(intervalId);


      var startbutton = document.getElementById("start");
      var pausebutton = document.getElementById("pause");
      var continuebutton = document.getElementById("continue");
      var restartbutton = document.getElementById("restart");
  
      startbutton.classList.remove('closed');
      pausebutton.classList.add('closed');
      continuebutton.classList.add('closed');
      restartbutton.classList.add('closed');
    }
  }
  
  function changeTime(e) {
    if (e == "shortbreak") {
      document.getElementById("min").innerHTML = shortbreak_time + 1;
      document.getElementById("sec").innerHTML = "00";
    } else if (e == "longbreak") {
      document.getElementById("min").innerHTML = longbreak_time +1;
      document.getElementById("sec").innerHTML = "00";
    } else if (e == "pomodoro") {
      document.getElementById("min").innerHTML = pomodoro_time + 1;
      document.getElementById("sec").innerHTML = "00";
    }
    console.log(stateOfApp);
  }
  
  function clickStart() {

    if (stateOfApp == "pomodoro"){
        count_min = pomodoro_time;
        count_seconds = pomodoro_seconds;
    }else if (stateOfApp == "shortbreak"){
        count_min = shortbreak_time;
        count_seconds = shortbreak_seconds;

    }else if (stateOfApp == "longbreak"){
        count_min = longbreak_time
        count_seconds = longbreak_seconds
    }
    console.log(stateOfApp == "shortbreak")
    if (count_min >= 0) {
      document.getElementById("min").innerHTML = count_min;
      document.getElementById("sec").innerHTML = count_seconds;
  
      intervalId = setInterval(countTime, 1000);
    }


    var startbutton = document.getElementById("start");
    var pausebutton = document.getElementById("pause");
    var continuebutton = document.getElementById("continue");

    startbutton.classList.add('closed');
    pausebutton.classList.remove('closed');
    continuebutton.classList.add('closed');
    
  }
 

  function clickContinue(){
    if (count_min >= 0) {
      document.getElementById("min").innerHTML = count_min;
      document.getElementById("sec").innerHTML = count_seconds;
  
      intervalId = setInterval(countTime, 1000);
    }


    var startbutton = document.getElementById("start");
    var pausebutton = document.getElementById("pause");
    var continuebutton = document.getElementById("continue");

    startbutton.classList.add('closed');
    pausebutton.classList.remove('closed');
    continuebutton.classList.add('closed');
  }

  function clickPause(){
    clearInterval(intervalId);

    var startbutton = document.getElementById("start");
    var pausebutton = document.getElementById("pause");
    var continuebutton = document.getElementById("continue");
    var restartbutton = document.getElementById("restart");

    startbutton.classList.add('closed');
    pausebutton.classList.add('closed');
    continuebutton.classList.remove('closed');
    restartbutton.classList.add('closed')
  }


  function clickReStart(){


   changeTime(stateOfApp);
   clearInterval(intervalId);


      var startbutton = document.getElementById("start");
      var pausebutton = document.getElementById("pause");
      var continuebutton = document.getElementById("continue");
      var restartbutton = document.getElementById("restart");
  
      startbutton.classList.remove('closed');
      pausebutton.classList.add('closed');
      continuebutton.classList.add('closed');
      restartbutton.classList.add('closed')
  }

function countTime() {
let total_time;
    if (stateOfApp == "pomodoro"){
        total_time = (pomodoro_time + 1)*60
       
    }else if (stateOfApp == "shortbreak"){
        total_time = (shortbreak_time + 1)*60
       
    }else if (stateOfApp == "longbreak"){
        total_time = (longbreak_time + 1)*60
       
    }

    let progressBar = document.querySelector(".inner-most");
    let progressValue = ((current_time/total_time)*100);
     
    console.log((current_time/total_time),"fgggg")
    progressBar.style.background = `conic-gradient(
        #F87070 ${progressValue * 3.6}deg,
        #161932 ${progressValue * 3.6}deg
    )`;
console.log(progressValue)
  if (count_seconds == 0) {
    if (count_min == 0) {
      clearInterval(intervalId);
      var startbutton = document.getElementById("start");
      var pausebutton = document.getElementById("pause");
      var continuebutton = document.getElementById("continue");
      var restartbutton = document.getElementById("restart");
  
      startbutton.classList.add('closed');
      pausebutton.classList.add('closed');
      continuebutton.classList.add('closed');
      restartbutton.classList.remove('closed')
    } else {
      count_min = count_min - 1;

      count_seconds = 60;
      console.log(`Minutes ${count_min}`);

      if (count_min < 10) {
        document.getElementById("min").innerHTML = `0${count_min}`;
      } else {
        document.getElementById("min").innerHTML = count_min;
      }
    }
  }

  if (count_seconds > 0) {
    count_seconds = count_seconds - 1;
    current_time = current_time - 1;
    console.log(`current_time ${current_time}`)
    console.log(`count_seconds ${count_seconds}`);

    if (count_seconds < 10) {
      document.getElementById("sec").innerHTML = `0${count_seconds}`;
    } else {
      document.getElementById("sec").innerHTML = count_seconds;
    }
  }
}


// let progressBar = document.querySelector(".inner-most");

// let progressValue = 0;
// let progressEndValue = (((count_min + 2))) ;
// let speed = 1000;

// let progress = setInterval(
//     () =>{
//         progressValue++
//         progressBar.style.background = `conic-gradient(
//             #F87070 ${progressValue * 3.6}deg,
//             #161932 ${progressValue * 3.6}deg
//         )`;
//         if (progressValue == progressEndValue){
//             clearInterval(progress)
//         }
//     },
//     1000
    
// );