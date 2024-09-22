const apiKey = "6d87bf7573c5a7944a5fcaeffc4f9034";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherVideo = document.getElementById('weather-video');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        weatherVideo.style.display = "none"; 
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./images/clouds.png";
            weatherVideo.src = "./videos/clouds.mp4";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png";
            weatherVideo.src = "./videos/clear.mp4";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./images/rain.png";
            weatherVideo.src = "./videos/rain.mp4";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/drizzle.png";
            weatherVideo.src = "./videos/drizzle.mp4";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./images/mist.png";
            weatherVideo.src = "./videos/mist.mp4";
        }

       
        weatherVideo.onloadeddata = () => {
            weatherVideo.style.display = "block"; 
            weatherVideo.play(); 
        };

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
