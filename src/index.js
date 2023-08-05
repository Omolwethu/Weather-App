let now = new Date();
console.log(now);

let today = document.querySelector("h2");
console.log(today);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "Jan",
  "Feb",
  "March",
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
let weekDay = days[now.getDay()];
let day = now.getDate();
let hour = now.getHours();
if (hour < 12) {
  hour = `${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 12) {
  minutes = `0${minutes}`;
}

today.innerHTML = `${weekDay} ${month} ${day}, ${hour}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  console.log(city.value);
  let searchCity = document.querySelector("#city-input");
  cityElement.innerHTML = searchCity.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function convertFahTemp(event) {
  event.preventDefault();
  let formatFah = document.querySelector("#temp");
  let fahrenheitTemp = Math.round((32 * 9) / 5 + 32);
  formatFah.innerHTML = `${fahrenheitTemp}`;
}
let fahTemp = document.querySelector("#fahrenheit");
fahTemp.addEventListener("click", convertFahTemp);

function convertCelTemp(event) {
  event.preventDefault();
  let formatCel = document.querySelector("#temp");
  formatCel.innerHTML = 19;
}
let celTemp = document.querySelector("#celsius");
celTemp.addEventListener("click", convertCelTemp);

//week 5
function showWeatherTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(city) {
  let apiKey = "311f1f45fee82242ab4086372ab360f5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeatherTemp);
}

function onClick(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");
  searchCity(input.value);
}

let buttonClick = document.querySelector("#search-form");
buttonClick.addEventListener("submit", onClick);

function searchLocation(position) {
  let apiKey = "311f1f45fee82242ab4086372ab360f5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.data.coord.lat}&lon=${position.data.coord.lon}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showWeatherTemp);
}

function showCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition.showCurrentLocation(searchLocation);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", showCurrentLocation);

searchCity("Tokyo");
