var weatherButton = document.getElementById("weatherbutton");
  

weatherButton.addEventListener('click', ()=>{
  var zip = document.getElementById("input").value;
  console.log(zip);
  

  var url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=19e005a1538e1e345999d12124968754`;

  console.log(url);

  fetch (url)
    .then(response => response.json())
    .then(data => displayWeather(data));

  document.getElementById("input").value = '';


});


// Helper functions

  function displayWeather(data) {
    console.log(data);
    weatherElement = document.getElementById("weather");
    
    var weatherDisplay = `<p>Test</p>`;
    weatherElement.innerHTML = `<strong>${data.name}</strong> </br> Current Weather: ${data.weather.description} </br> Temperature: ${data.main.temp} </br> Feels like: ${data.main.feels_like} </br> Humidity: ${data.main.humidity}% </br> Wind: ${data.wind.speed}mph </br> Sunrise: ${data.sys.sunrise} </br> Sunset: ${data.sys.sunset}`;
    console.log(endData);

  }

  