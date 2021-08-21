 // Api key and url from weather api 
 const api = {
  key: "37abfe43d33b5016e5852898f11e9a2e",
  base: "https://api.openweathermap.org/data/2.5/"
};
const cityRef = document.querySelector('#location #city');
const dateRef = document.querySelector('#location #day');
const temperatureRef = document.querySelector('#weather #temperature');
const forcastRef = document.querySelector('#weather #forcast');
const rangeRef = document.querySelector('#temp-range');


//set up event listener on enter key for the search bar 
const searchbar = document.querySelector('.search-bar');
searchbar.addEventListener('keypress', searchQuery);

function searchQuery(evt) {
 if (evt.keyCode === 13 && searchbar.value.length > 0) {
   getData(searchbar.value);
 }
}

function getData(query) {
 alert("Called the getData() function.");
}
// Run a fetch requst on api to return the data from searchbox in metric units converting it into json

function getData(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => weather.json()).then(displayData).catch(error => {
      alert("Ooops Maybe Check Your Spelling?");
    });
}
//Funtion for getting the data for the city searched

function displayData(weather) {

  cityRef.innerText = `${weather.name}, ${weather.sys.country}`;

  let today = new Date();

  dateRef.innerText = todaysDate(today);

  temperatureRef.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  forcastRef.innerText = weather.weather[0].main;

  rangeRef.innerText = `${Math.round(weather.main.temp_min)}°c Min / ${Math.round(weather.main.temp_max)}°c Max`;


  let weatherIconId = `${weather.weather[0].id}`;
  let weatherIcon = document.getElementById("temp-icon-img");

  if (weatherIconId < 250) {
    weatherIcon.src = 'assets/images/weather-images/thunder.png';
  } else if (weatherIconId < 550) {
    weatherIcon.src = 'assets/images/weather-images/rain.png';
  } else if (weatherIconId < 650) {
    weatherIcon.src = 'assets/images/weather-images/snow.png';
  } else if (weatherIconId < 800) {
    weatherIcon.src = 'assets/images/weather-images/clear.png';
  } else if (weatherIconId === 800) {
    weatherIcon.src = 'assets/images/weather-images/sun.png';
  } else if (weatherIconId > 800) {
    weatherIcon.src = 'assets/images/weather-images/cloudy.png';
  }
}

//Function to select the full day, date, month and year

function todaysDate(todaysFullDate) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[todaysFullDate.getDay()];
  let date = todaysFullDate.getDate();
  let month = months[todaysFullDate.getMonth()];
  let year = todaysFullDate.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}