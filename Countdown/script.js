const day = document.getElementById('day');
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const targetDate = new Date("2024-08-22T00:00:00");



const updateCountdown = () => {
    const now = new Date();
    let timeDiff = targetDate - now;

    if (timeDiff == 0) {
        //handling countdown over case
        day.textContent = '00';
        hour.textContent = '00';
        min.textContent = '00';
        sec.textContent = '00';
        return;
    }

    //calculating second into different times

    const calSec = Math.floor(timeDiff / 1000) % 60;
    const calMin = Math.floor(timeDiff / 1000 / 60) % 60;
    const calHour = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
    const calDay = Math.floor(timeDiff / 1000 / 60 / 60 / 24);


    day.textContent = calDay.toString().padStart(2,'0')
    hour.textContent = calHour.toString().padStart(2,'0')
    min.textContent = calMin.toString().padStart(2,'0')
    sec.textContent = calSec.toString().padStart(2,'0')
    
}

    setInterval(updateCountdown, 1000)
    updateCountdown();