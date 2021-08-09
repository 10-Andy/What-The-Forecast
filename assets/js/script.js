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
