const apiKey = "b4b6dce33aef5285bb497b5f3e61b78a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchIcon = document.querySelector(".search span");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display = "none";
    }else {
        let data = await response.json();
    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = 'assets/clouds.png';
    } 
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = 'assets/clear.png';
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = 'assets/rain.png';
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = 'assets/drizzle.png';
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = 'assets/misty.png';
    }

    document.querySelector('.weather').style.display = "block";
    document.querySelector(".error").style.display = "none";


    }
    
}

searchIcon.addEventListener('click', ()=>{
    checkWeather(searchInput.value);
})

 