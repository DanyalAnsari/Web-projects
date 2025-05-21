const hour=document.getElementById('hour');
const min=document.getElementById('min');
const sec=document.getElementById('sec');

function displayTime(){
    let date= new Date();
    // get date information form Date class

    const hh=date.getHours();
    const mh=date.getMinutes();
    const sh=date.getSeconds();
     
    // calculation to move clock hands acc to deg from date value

    const sRotation=6*sh;
    const mRotation=6*mh;
    const hRotation=30*hh + mh/2;
 
    // take backticks to use js variable of ${} otherwise won't work

    hour.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotation}deg)`;
    sec.style.transform=`rotate(${sRotation}deg)`;
      
}
//initial call so that no delay may occur in displaying clock
displayTime();
setInterval(displayTime,1000);