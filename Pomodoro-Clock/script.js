const timer=document.querySelector('.timer');
const title =document.querySelector('.title');
const reset=document.querySelector('.resetbtn');
const start=document.querySelector('.startbtn');
const stop=document.querySelector('.stopbtn');
const resume =document.querySelector('.resumebtn');
const WORK=1*60

const countdown=(time)=>{
   time=time-1
   console.log(time)
}
const startTimer=()=>{
    let time=WORK
    setInterval(countdown(time),1000)
   
}
startTimer();

// start.addEventListener('click',startTimeer());
