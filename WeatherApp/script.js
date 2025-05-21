const apiKey='024dfe9a46afa58be6d0f5a295d4696b';
const searchBox= document.querySelector('.search input');
const searchBtn= document.querySelector('.search button');


async function checkWeather(city) {
    const apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response= await fetch(apiURL);
    if (response.status == 404) {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        const data= await response.json();
        console.log(data);
        document.querySelector('.city').innerHTML= data.name;
        document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+'ºc';
        document.querySelector('.humidity').innerHTML= `${data.main.humidity}%`;
        document.querySelector('.wind').innerHTML= `${data.wind.speed} km/h`;
        document.querySelector('.weather-icon').src=`./images/${data.weather[0].main}.png`
        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
    }
}
searchBtn.addEventListener('click', ()=>{   
    checkWeather(searchBox.value);
})
checkWeather('Delhi');
