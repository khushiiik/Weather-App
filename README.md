# 🌤 Weather App

A simple weather app that displays the current weather for a searched city, including temperature, humidity, wind speed, and dynamically changes the background video and icon based on the weather condition.

## 🔗 Live Demo
[Insert live link here, if deployed]

---

## 📜 Features

- Search for any city to get the current weather data.
- Displays temperature, humidity, and wind speed.
- Dynamically changes the weather icon and video background according to the weather conditions (Clouds, Clear, Rain, Drizzle, Mist).
- Responsive design.

---

## 🚀 Technologies Used

- **HTML5**: For structuring the webpage.
- **CSS3**: For styling and layout.
- **JavaScript**: To fetch and display weather data dynamically.
- **OpenWeather API**: For getting real-time weather data.

---

## 📂 Project Structure

```bash
weather-app/
│
├── images/              # Icons for different weather conditions and search button
│   ├── clouds.png
│   ├── clear.png
│   ├── rain.png
│   ├── drizzle.png
│   └── mist.png
│
├── videos/              # Video backgrounds for weather conditions
│   ├── clouds.mp4
│   ├── clear.mp4
│   ├── rain.mp4
│   ├── drizzle.mp4
│   └── mist.mp4
│
├── style.css            # CSS file for styling
├── script.js            # JavaScript file for handling functionality
├── index.html           # Main HTML file
└── README.md            # Project readme file (this file)
```

---

## 🌐 How to Use
- Enter the city name in the search bar.
- Click the search button or press enter.
- The app will display the weather data including temperature, humidity, and wind speed.
- The background video and weather icon will change based on the current weather condition in that city.

---

## 🔑 API Key
-This project uses the OpenWeather API. You will need your own API key for it to work. Follow these steps:

-Sign up at OpenWeather to get your free API key.
-Replace the apiKey value in the script.js file with your own API key:
```bash
const apiKey = "your_api_key_here";

```
