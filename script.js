// custom shorthand function to get elements
var $ = document.querySelector.bind(document);

// utitlity function to convert string to sentence case
String.prototype.replaceAt = function(index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};

/* Module to find weather at any location using openweathermap API. 
Location can be found by navigator or taking user input
Returns a function find to find the weather at current location
 */

var WeatherFinder = (function() {
  var private_elements = {
    ids: {
      inputContainer: "#inputContainer",
      homeContainer: "#homeContainer",
      locationInput: "#inputContainer input",
      inputBtn: "#inputContainer button",
      status: "#homeContainer p",
      city: "#location",
      description: "#description",
      weather: "#weather",
      results: "#results",
      rainyAnimation: "#rainy",
      cloudyAnimation: "#cloudy",
      clearanimation: "#clear",
      snowyAnimation: "#snow"
    }
  };

  // function constructor
  var checkWeather = function() {};

  // request user for location access
  checkWeather.prototype.init = function() {
    navigator.geolocation.getCurrentPosition(
      this.success.bind(this),
      this.error.bind(this)
    );
  };

  // if successful make API call
  checkWeather.prototype.success = function(position) {
  
    var options = {
      url: this.getUrl(position),
      callBackFn: this.callback
    };
    CALLAPI.call(options);
  };

  // in case user denies access, ask for explicit input
  checkWeather.prototype.error = function(err) {
    var locationInput = $(private_elements.ids.locationInput);
    this.render([
      {
        element: $(private_elements.ids.inputContainer),
        style: "display:block;"
      },
      { element: $(private_elements.ids.homeContainer), style: "display:none;" }
    ]);
    $(private_elements.ids.inputBtn).addEventListener("click", callWeather);

    // adding feature to retrieve results on enter key press
    locationInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") callWeather.call(this);
    });

    // clearing placeholder on click
    locationInput.addEventListener("click", function() {
      locationInput.placeholder = "";
    });

    // calls success function with url containing explicit location
    function callWeather() {
      this.render([
        {
          element: $(private_elements.ids.inputContainer),
          style: "display:none"
        }
      ]);
      this.success(locationInput.value);
    }
  };

  checkWeather.prototype.getUrl = function(value) {
    if (value.coords) {
      return (
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        value.coords.latitude +
        "&lon=" +
        value.coords.longitude +
        "&appid=ccb7a356a2bf2fa6d99bf8c4ac2b373a&units=metric"
      );
    } else {
      return (
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        value +
        "&appid=ccb7a356a2bf2fa6d99bf8c4ac2b373a&units=metric"
      );
    }
  };

  // render response data with animations
  checkWeather.prototype.callback = function() {
    // updating status
    if (this.readyState == XMLHttpRequest.OPENED) {
      $(private_elements.ids.status).innerHTML = "Getting weather data...";
    }

    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
       var data = JSON.parse(this.responseText),
        firstletter = data.weather[0].description.charAt(0).toUpperCase(),
        weatherCategory = data.weather[0].main;
        console.log(data);
      this.render([
        {
          element: $(private_elements.ids.homeContainer),
          style: "display:none"
        },
        {
          element: $(private_elements.ids.results),
          style: "display:block"
        }
      ]);
      this.animate.call(this, weatherCategory);
      $(private_elements.ids.city).innerHTML = data.name;
      $(weather).innerHTML = data.weather[0].description.replaceAt(
        0,
        firstletter
      );
      $(private_elements.ids.description).innerHTML =
        " <br> Temperature: " +
        data.main.temp +
        " °C<br> Humidity: " +
        data.main.humidity +
        "%<br> Wind speed: " +
        data.wind.speed +
        " m/sec";
    }
    }

  // selects animation according to weather category
  checkWeather.prototype.animate = function(weatherCategory) {
    switch (weatherCategory) {
      case "Thunderstorm":
      case "Drizzle":
      case "Rain":
        this.render([
          {
            element: $(private_elements.ids.rainyAnimation),
            style: "display:block"
          }
        ]);
        break;
      case "Clear":
        this.render([
          {
            element: $(private_elements.ids.clearAnimation),
            style: "display:block"
          }
        ]);
        break;
      case "Clouds":
      case "Mist":
      case "Haze":
        this.render([
          {
            element: $(private_elements.ids.cloudyAnimation),
            style: "display:block"
          }
        ]);
        break;
      case "Snow":
        this.render([
          {
            element: $(private_elements.ids.snowyAnimation),
            style: "display:block"
          }
        ]);
        break;
    }
  };
  // utility function to render elements
  checkWeather.prototype.render = function(elements) {
    console.log(elements);
    for (i = 0; i < elements.length; i++) {
      elements[i].element.style = elements[i].style;
    }
  };

  return new checkWeather();
})(CALLAPI);

WeatherFinder.init.call(WeatherFinder);
