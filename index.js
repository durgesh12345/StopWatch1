var start=document.getElementById('start') 
var stopa=document.getElementById('Stop') 
var reset=document.getElementById('reset') 
var img=document.getElementById('img');
var timer=document.getElementById('statechange') 
var hr;
var min;
var sec;
var stoptime=true;
var display=document.getElementsByClassName("display");
console.dir(display);
//  variable to show StopWatch count
const time=localStorage.getItem("time")
 if (localStorage.getItem("time")) {
    [hr,
    min,
    sec]=time.split(":") 
    display[0].innerHTML=time;
}

else {
    hr=00;
    min=00;
    sec=00;
    display[0].innerHTML="00:00:00";
}

// Start button to start StopWatch
start.onclick=function FunctionStart() {
    if (stoptime==true) {
        stoptime=false;
        timerStart();
    }
}

// Stop button to start StopWatch
stopa.onclick=function FunctionStop() {
    if (stoptime==true) {
        stoptime=false;
    }
    this.hr=hr;
    this.min=min;
    this.sec=sec;
    stoptime=true;
}

// Reset button to start StopWatch
reset.onclick=function FunctionReset() {
    localStorage.removeItem("time");
    timer.innerHTML='00:00:00';
    hr=000;
    min=000;
    sec=000;
    stoptime=true;
}

// fuction to start StopWatch count 
function timerStart() {
    console.log("hh");
    if (stoptime==false) {
        hr=parseInt(hr);
        sec=parseInt(sec);
        min=parseInt(min);
        //  increase the value of minutes 
        sec=sec+1;
        if (sec==60) {
            min=min+1;
            sec=0;
        }
        //  increase the value of hour
        if (min==60) {
            hr=hr+1;
            min=0;
        }
        // changing the value of second 
        if (sec < 10) {
            sec="0"+sec;
        }
        // changing the value of min
        if (min < 10) {
            min="0"+min;
        }
        // changing the value of hour
        if (hr < 10) {
            hr="0"+hr;
        }
        // Showing the value of Stopwatch in display
        timer.innerHTML=this.hr+":"+this.min+":"+sec;
        // setTimeout("timerStart()", 1000);
        setTimeout(()=> {
            timerStart()
             localStorage.setItem("time", this.hr + ":" + this.min + ":" + this.sec)
        }
        , 1000)
    }
}
