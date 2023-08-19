// Current date & time
let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let hours = now.getHours();

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
h2.innerHTML = `${day},${date} ${month} ${hours}:${minutes}`;

// Search Engine
function search(city) {
  let apiKey = "7748ce211231684d961afc06321ccff6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayPlaceWeather);
}
function displayPlaceWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description-weather").innerHTML =
    response.data.weather[0].main;
}

function cityForm(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

let citySearch = document.querySelector("#search-city");
citySearch.addEventListener("submit", cityForm);

search("Amsterdam");

// Celsius vs Fahrenheit
function tempCelcius(event) {
  event.preventDefault();
  let celciusDegrees = document.querySelector("#current-temp");
  celciusDegrees.innerHTML = `19°`;
}
let celcius = document.querySelector("#celsius-link");
celcius.addEventListener("click", tempCelcius);

function tempFahrenheit(event) {
  event.preventDefault();
  let fahrenheitDegrees = document.querySelector("#current-temp");
  fahrenheitDegrees.innerHTML = `66°`;
}
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", tempFahrenheit);
