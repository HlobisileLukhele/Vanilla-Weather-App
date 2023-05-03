//creating function to calculate the current date
function formatDate(timestamp) {
    let date = new Date(timestamp);
  
    let hour = date.getHours();
    if (hour <= 10) {
      hour = `0${hour}`;
    }
  
    let minutes = date.getMinutes();
    if (minutes <= 10) {
      minutes = `0${minutes}`;
    }
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return `${day} ${hour}:${minutes}`;
  }
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    return days[day];
  }
  
// creating a function to display weather forecast

function displayForecast(response) {
    let forecast = response.data.daily;
  
    let forecastElement = document.querySelector("#forecast");
  
    let forecastHTML = `<div class="row">`;
    forecast.forEach(function (forecastDay, index) {
      if (index < 4) {
        forecastHTML =
          forecastHTML +
          `<div class="col-3">
      <div class="forecast-date"> ${formatDay(forecastDay.dt)} </div>
      <img src="http://openweathermap.org/img/wn/${
        forecastDay.weather[0].icon
      }@2x.png" width="50px"></img>
    <div class="forecast-temperature">
      <span class="forecast-max-temp">${Math.round(
        forecastDay.temp.max
      )} / </span>
      <span class="forecast-min-temp">${Math.round(forecastDay.temp.min)}°C</span>
    </div>
    </div>
    `;
      }
    });
    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
  }
  // getting forecast using coordinated 
  function getForecast(coordinates) {
    console.log(coordinates);
    let apiKey = "34ae1065362d42545661451bda2b8a1f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayForecast);
  }
  