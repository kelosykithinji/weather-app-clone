
function displayTemp(response){
    console.log(response);
    let currentTemp = Math.round(response.data.temperature.current);
    let tempElement = document.querySelector("#temp");
    let humidityElement = document.querySelector("#humidity");
    let windSpeed = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let descriptionElement = document.querySelector("#description");
    let date =new Date(response.data.time *1000);
    let iconElement = document.querySelector("#icon");
    console.log(response.data);

    humidityElement.innerHTML = `${response.data.temperature.humidity}% ,`;
    windSpeed.innerHTML = `${response.data.wind.speed} km/h`;
    tempElement.innerHTML = `${currentTemp}`;
    descriptionElement.innerHTML= response.data.condition.description;
    timeElement.innerHTML =`${ getWeekDay(date)} ,`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class= "icon"/>`;
   
    
}
function getWeekDay(date){
    
    let minutes  = date.getMinutes();
    let hours= date.getHours();
    let weekDays = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day =weekDays[date.getDay()];

    if (minutes < 10){
        minutes =`0 ${minutes}`;
    }
    return`${day} ${hours}:${minutes}`


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