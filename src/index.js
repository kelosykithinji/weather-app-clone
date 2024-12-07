
function displayTemp(response){
    console.log(response);
    let currentTemp = Math.round(response.data.temperature.current);
    let tempElement = document.querySelector("#temp");
    let humidityElement = document.querySelector("#humidity");
    let windSpeed = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let weekdayElement = document.querySelector("#week-day");
    let descriptionElement = document.querySelector("#description");

    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeed.innerHTML = `${response.data.wind.speed} km/h`;
    tempElement.innerHTML = `${currentTemp}`;
    descriptionElement.innerHTML= response.data.condition.description;
   // descriptionElement.innerHTML = 
    
}
function changeDateAndDay(date){
    let weekDays = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let now= newDate();
    let hour = now.gethours();
    let minute = now.getminutes();


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