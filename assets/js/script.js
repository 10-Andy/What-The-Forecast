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
  // Run a fetch requst on api to return the data in metric units converting it into json
  function getData (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayData);
  }
  
  function displayData (weather) {
    console.log(weather);
}