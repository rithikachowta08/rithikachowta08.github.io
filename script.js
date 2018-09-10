/* Module to make GET request to any API. Returns a method call taking options as parameter
options{
  url : URL endpoint to make the request to,
  callBackFn : reference to callback function to execute on ready state change
}
 */

var CALLAPI = (function() {
  function call(options) {
    var requestObj = new XMLHttpRequest(),
      URL = options.url,
      callBackFn = options.callBackFn;
    requestObj.onreadystatechange = callBackFn.bind(requestObj);
    requestObj.open("GET", URL);
    requestObj.send();
  }

  return {
    call: call
  };
})();

/* Module to find weather at any location using openweathermap API. 
Location can be found by navigator or taking user input
Returns a function find to find the weather at current location
 */

var WEATHERFINDER = (function() {
  function find() {
    var options,
      data,
      firstletter,
      urlParam,
      input = document.querySelector("#input"),
      homeContent = document.querySelector("#homeContent");
    // request user for location access
    navigator.geolocation.getCurrentPosition(success, error);

    // if successful make API call
    function success(position, url) {
      urlParam =
        url ||
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          position.coords.latitude +
          "&lon=" +
          position.coords.longitude +
          "&appid=ccb7a356a2bf2fa6d99bf8c4ac2b373a&units=metric";
      options = {
        url: urlParam,
        callBackFn: callback
      };
      CALLAPI.call(options);
    }

    // in case user denies access, ask for explicit input
    function error(err) {
      var locationInput = document.querySelector("#input input"),
        query;
      render([
        { element: input, style: "display:block;" },
        { element: homeContent, style: "display:none;" }
      ]);
      document
        .querySelector("#input button")
        .addEventListener("click", callWeather);

      //adding feature to retrieve results on enter key press
      locationInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") callWeather();
      });

      // calls success function with url containing explicit location
      function callWeather() {
        $("#input").hide();
        query =
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          locationInput.value +
          "&appid=ccb7a356a2bf2fa6d99bf8c4ac2b373a&units=metric";
        success(null, query);
      }
    }

    // render response data with animations
    function callback() {
      // updating status
      if (this.readyState == XMLHttpRequest.OPENED) {
        document.querySelector("#homeContent p").innerHTML =
          "Getting weather data...";
      }

      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        data = JSON.parse(this.responseText);
        firstletter = data.weather[0].description.charAt(0).toUpperCase();
        render([
          { element: homeContent, style: "display:none" },
          {
            element: document.querySelector("#results"),
            style: "display:block"
          }
        ]);
        var weatherCategory = data.weather[0].main;
        animator(weatherCategory);
        document.querySelector("#location").innerHTML = data.name;
        document.querySelector(
          "#weather"
        ).innerHTML = data.weather[0].description.replaceAt(0, firstletter);
        document.querySelector("#description").innerHTML =
          " <br> Temperature: " +
          data.main.temp +
          " °C<br> Humidity: " +
          data.main.humidity +
          "%<br> Wind speed: " +
          data.wind.speed +
          " m/sec";
      }
    }
  }

  // selects animation according to weather category
  function animator(weatherCategory) {
    switch (weatherCategory) {
      case "Thunderstorm":
      case "Drizzle":
      case "Rain":
        $("#rainy").show();
        break;
      case "Clear":
        $("#clear").show();
        break;
      case "Clouds":
      case "Mist":
      case "Haze":
        $("#cloudy").show();
        break;
      case "Snow":
        $("#snow").show();
        break;
    }
  }
  // utitlity function to convert string to sentence case
  String.prototype.replaceAt = function(index, replacement) {
    return (
      this.substr(0, index) +
      replacement +
      this.substr(index + replacement.length)
    );
  };

  // utility function to render elements
  function render(elements) {
    for (i = 0; i < elements.length; i++) {
      elements[i].element.style= elements[i].style;
    }
  }

  return {
    find: find
  };
})(CALLAPI);

// main application module
var MAINAPP = (function() {
  WEATHERFINDER.find();
})(WEATHERFINDER);
