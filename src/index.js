
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
  
    humidityElement.innerHTML = `${response.data.temperature.humidity}% ,`;
    windSpeed.innerHTML = `${response.data.wind.speed} km/h`;
    tempElement.innerHTML = `${currentTemp}`;
    descriptionElement.innerHTML= response.data.condition.description;
    timeElement.innerHTML =`${ getWeekDay(date)} ,`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class= "icon"/>`;

    getForecast(response.data.city);
   
    
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
    city.preventDefault();

    let enterCityInput = document.querySelector("#city-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = enterCityInput.value;
    
    let cityName = enterCityInput.value;

   let apiKey = "10cf3413810a7bc0175f0o294a8aatbf";
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemp);

    
      
}

function getForecast(city){
     let apiKey = "10cf3413810a7bc0175f0o294a8aatbf";
     let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
     axios.get(apiUrl).then(displayForecast);

   
      
}

function formatDay(timestamp){
    let date = new Date(timestamp *1000);
    let days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    return days[date.getDay()];
}
function displayForecast(response){
   console.log(response.data);
    

    let days = ["SUN","MON","TUE","WED","THUR","FRI","SAT"];
    let forecastHtml= "";

    response.data.daily.forEach(function(day, index){
        if(index < 6){
        forecastHtml = forecastHtml += `
            <div class="weather-forecast-container">
                <div class="weather-forecast-day">${formatDay(day.time)}</div>
                <div>
                <img src="${day.condition.icon_url}" class="weather-forecast-icon"></div>
                <div class="weather-forecast-temperatures">
                    <div class="weather-forecast-temp-1">${Math.round(
                      day.temperature.maximum
                    )}°</div>
                    <div class="weather-forecast-temp-2"> ${Math.round(
                      day.temperature.minimum
                    )}°</div>
                </div>
            </div>
         `;
                }
}); 

let forecastElement = document.querySelector("#forecast");
 forecastElement.innerHTML =forecastHtml;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", displayCity);




