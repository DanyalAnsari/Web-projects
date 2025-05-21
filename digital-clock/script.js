const time=document.getElementById('time');
const format=document.getElementById('timeformat');


document.addEventListener('DOMContentLoaded',()=>{
    setInterval(showTime,1000);
}
);

const showTime=()=>{
    let date=new Date();

    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let fmt
//    writing if else takes too long so ternery operator
    hour=hour<10 ? `0${hour}`: hour;
    min=min<10 ? `0${min}`: min;
    sec=sec<10 ? `0${sec}`: sec;

    fmt= hour>12? fmt='PM':'AM'

    time.innerHTML=`${hour}:${min}:${sec}`
    format.innerHTML=`${fmt}`

};