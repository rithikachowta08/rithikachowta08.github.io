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
      clearAnimation: "#clear",
      snowyAnimation: "#snow"
    },

    url: "https://api.openweathermap.org/data/2.5/weather?",
    appID: "ccb7a356a2bf2fa6d99bf8c4ac2b373a"
  };
  var idLookup = private_elements.ids;
  var render = function(elements) {
    console.log(elements);
    for (i = 0; i < elements.length; i++) {
      elements[i].element.style = elements[i].style;
    }
  };
  var animate = function(weatherCategory) {
    switch (weatherCategory) {
      case "Thunderstorm":
      case "Drizzle":
      case "Rain":
        render([
          {
            element: $(idLookup.rainyAnimation),
            style: "display:block"
          }
        ]);
        break;
      case "Clear":
        render([
          {
            element: $(idLookup.clearAnimation),
            style: "display:block"
          }
        ]);
        break;
      case "Clouds":
      case "Mist":
      case "Haze":
        render([
          {
            element: $(idLookup.cloudyAnimation),
            style: "display:block"
          }
        ]);
        break;
      case "Snow":
        render([
          {
            element: $(idLookup.snowyAnimation),
            style: "display:block"
          }
        ]);
        break;
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
  checkWeather.prototype.error = function() {
    var locationInput = $(idLookup.locationInput);
    var self = this;
    render([
      {
        element: $(idLookup.inputContainer),
        style: "display:block;"
      },
      { element: $(idLookup.homeContainer), style: "display:none;" }
    ]);
    $(idLookup.inputBtn).addEventListener("click", callWeather.bind(self));

    // retrieve results on enter key press
    locationInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") callWeather.call(self);
    });

    // clearing placeholder on click
    locationInput.addEventListener("click", function() {
      locationInput.placeholder = "";
    });

    // calls success function with url containing explicit location
    function callWeather() {
      render([
        {
          element: $(idLookup.inputContainer),
          style: "display:none"
        }
      ]);
      this.success(locationInput.value);
    }
  };

  // return url for api call
  checkWeather.prototype.getUrl = function(value) {
    if (value.coords) {
      return (
        private_elements.url +
        "lat=" +
        value.coords.latitude +
        "&lon=" +
        value.coords.longitude +
        "&appid=" +
        private_elements.appID +
        "&units=metric"
      );
    } else {
      return (
        private_elements.url +
        "q=" +
        value +
        "&appid=" +
        private_elements.appID +
        "&units=metric"
      );
    }
  };

  // render response data with animations
  checkWeather.prototype.callback = function() {
    // updating status
    if (this.readyState == XMLHttpRequest.OPENED) {
      $(idLookup.status).innerHTML = "Getting weather data...";
    }

    if(this.readyState === XMLHttpRequest.DONE && this.status === 404 || this.status === 400){
      $(idLookup.status).innerHTML = "Sorry! Location not found";
      render([
        {
          element: $(idLookup.status),
          style: "display:block"
        },
        {
          element: $(idLookup.homeContainer),
          style: "display:block"
        }
      ]);
      
    }

    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      var data = JSON.parse(this.responseText),
        firstletter = data.weather[0].description.charAt(0).toUpperCase(),
        weatherCategory = data.weather[0].main;
      render([
        {
          element: $(idLookup.homeContainer),
          style: "display:none"
        },
        {
          element: $(idLookup.results),
          style: "display:block"
        }
      ]);
      animate(weatherCategory);
      $(idLookup.city).innerHTML = data.name;
      $(idLookup.weather).innerHTML = data.weather[0].description.replaceAt(
        0,
        firstletter
      );
      $(idLookup.description).innerHTML =
        " <br> Temperature: " +
        data.main.temp +
        " °C<br> Humidity: " +
        data.main.humidity +
        "%<br> Wind speed: " +
        data.wind.speed +
        " m/sec";
    }
  };

  return new checkWeather();
})(CALLAPI);

WeatherFinder.init.call(WeatherFinder);
