 // Api key and url from weather api 
 const api = {
   key: "37abfe43d33b5016e5852898f11e9a2e",
   base: "https://api.openweathermap.org/data/2.5/"
 }

 //set up event listener on enter key for the search bar 
 const searchbar = document.querySelector('.search-bar');
 searchbar.addEventListener('keypress', searchQuery);

 function searchQuery(evt) {
   if (evt.keyCode == 13) {
     getData(searchbar.value);
   }
 }

 // Run a fetch requst on api to return the data from searchbox in metric units converting it into json
 function getData(query) {
   fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
     .then(weather => {
       return weather.json();
     }).then(displayData);
 }

 //Funtion for getting the data for the city searched

 function displayData(weather) {

   //returns the city and country searched by the user

   let city = document.querySelector('#location #city');
   city.innerText = `${weather.name}, ${weather.sys.country}`;

    //Getting the date for city searched

    let today = new Date();
    let date = document.querySelector('#location #day');
    date.innerText = dateArray(today);

     //Function to select the full day, date, month and year

 function dateArray(d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
 }