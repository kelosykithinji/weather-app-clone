
function displayTemp(response){
    console.log(response);
    let currentTemp = Math.round(response.data.temperature.current);
    let tempElement = document.querySelector("#temp");
    tempElement.innerHTML = `${currentTemp}`;
}
function displayCity(city){
    event.preventDefault();

    let enterCityInput = document.querySelector("#city-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = enterCityInput.value;
    
    let cityName = enterCityInput.value;

   let apiKey = "10cf3413810a7bc0175f0o294a8aatbf";
   let apiUrl =
     `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemp);
      
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", displayCity);