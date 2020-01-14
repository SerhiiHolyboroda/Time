let d = new Date();
let mseconds = d.getMilliseconds();
let seconds = d.getSeconds();
let minutes = d.getMinutes();
let hours = d.getHours();
let days = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();

let fullDate = document.querySelector('.fullDate');
 
fullDate.innerHTML = `${days}.${month}.${year}`


let watch = document.querySelector('.watch');
let time1 = setInterval(function(){
    let d = new Date();
    let seconds = d.getSeconds();
let minutes = d.getMinutes();
let hours = d.getHours();
    if(seconds < 10 ) seconds =  '0' + seconds 
    if( minutes < 10 ) minutes =  '0'  + minutes
    if(hours < 10 ) hours =  '0'  + hours
    watch.innerText = `${hours}:${minutes}:${seconds}`
   
     
}, 100)


 


let loops = document.querySelector('.loops')
let start = document.querySelector('.start')
let loop = document.querySelector('.loop')
let stop = document.querySelector('.stop')
let reset = document.querySelector('.reset')
//function add() {
       
//         
 let second = 0 ;
 let minute = 0 ;
 let hour = 0 ;
//         
//         if(mmseconds > 0){
//        
//  
//       if(  seconds < 10) seconds = '0' + seconds 
//         seconds++ ;
//    if(seconds >= 60) {
//         if(  minutes < 10) minutes = '0' + minutes 
//         minutes++;
//        seconds = 0;
//         
//        if(minutes >= 60) {
//            hours++;
//            minutes = 0;
//              
//        }
//    }
//         }
 
function add() {
    let s = new Date();
  let mmseconds = s.getMilliseconds();
    if(mmseconds > 900){
        
    second++;
    if (second >= 60) {
        second = 0;
        minute++;
        if (minute >= 60) {
            minute = 0;
            hour++;
        }
    }
    }
      let stopwatch = document.querySelector('.stopwatch')
 stopwatch.innerText = `${hour}:${minute}:${second}:${mmseconds}`
      timer();
}
let stopwatch = document.querySelector('.stopwatch')
function timer() {
    t = setTimeout(add, 100);
}

//timer();


/* Start button */
start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);
}
loop.onclick  = function() {
   loops.innerText += stopwatch.innerText
    console.log(stopwatch.innerText)
}
reset.onclick  =  function() {
   loops.innerText = ''
     
}
















 

let min = 25 ;
let time = document.querySelector('.time')
time.innerText = min 
 
 let more = document.querySelector('.more')
  
  let less = document.querySelector('.less')
  let start1 = document.querySelector('.start1')
  let loop1 = document.querySelector('.loop1')
  let reset1 = document.querySelector('.reset1')
  
//more.onclick = min++ ,time.innerText = min  ;
//less.onclick = min-- ,time.innerText = min  ;

more.addEventListener('click', function(){
     min++ 
    time.innerText = min  ;
})
less.addEventListener('click', function(){
     min-- 
    time.innerText = min  ;
})
 



 
let   second1 = 60
 
function sayHi() {
   if (second1 < 10) second += '0'
   if (min < 10) min += '0'
      
    second1 = second1 - 1
    if(second1 <= 1){ 
       min =  min -1
            second1 = 60       
                    }
     let count = document.querySelector('.count')
   count.innerText = `${min} ${second1}`
   
    timers();
     }
 
function timers() {
    t1 = setTimeout(sayHi , 1000);
     
}
 
//setTimeout(sayHi, 1000);
//start1.onclick = countdown;
start1.onclick = timers(); 
 loop1.onclick = function(){
    clearTimeout(t1);
}  
  reset1.onclick = function() {
    let count = document.querySelector('.count')
   count.innerText = `00.00`
}   
 



 