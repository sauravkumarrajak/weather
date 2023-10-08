// const cityName = document.getElementById("cityName");

const apiKey = "aa3ba4ab3adb30c53a51d9a8b4f708f6";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

async function checkWeather(cityName) {
  const response = await fetch(
    apiUrl + cityName + `&appid=${apiKey}&units=metric`
  );
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    document.querySelector(".error").style.display = "none";

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.floor(
      data.main.temp
    )}°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = `${data.wind.speed}Km/h`;

    if (data.weather[0].main === "Clear") {
      weatherIcon.src = `/images/clear.png`;
    } else if (data.weather[0].main === "Clouds") {
      weatherIcon.src = `images/clouds.png`;
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = `images/rain.png`;
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = `images/mist.png`;
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = `images/drizzle.png`;
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = `images/snow.png`;
    }

    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  console.log(searchBox.value);
});

//https://api.openweathermap.org/data/2.5/weather?q=patna&appid=aa3ba4ab3adb30c53a51d9a8b4f708f6&units=metric
