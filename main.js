
$(document).ready(function () {
  var currWeatherPila =
    "https://api.weatherunlocked.com/api/resortforecast/666020?app_id=8ef92fdb&app_key=f1a993da508ddcdd9c8459ab494bbc83";
  $.ajax({
    url: currWeatherPila,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // BASE SNOW STATS

    var baseSnow = response.forecast[0].base.freshsnow_in;
    var baseWind = response.forecast[0].base.windspd_mph;
    var baseTemp = response.forecast[0].base.temp_f;
    var baseFeel = response.forecast[0].base.feelslike_f;
    var baseVis = response.forecast[0].base.wx_desc;

    console.log(response.forecast[0].base.freshsnow_in);
    console.log(response.forecast[0].base.windspd_mph);
    console.log(response.forecast[0].base.temp_f);
    console.log(response.forecast[0].base.feelslike_f);
    console.log(response.forecast[0].base.wx_desc);

    $("#snow").append(baseSnow + " inches");
    $("#wind").append(baseWind + " MPH");
    $("#temp").append(baseTemp + " Fahrenheit");
    $("#feels-like").append(baseFeel + " Fahrenheit");
    $("#visibility").append(baseVis);

    // PEAK SNOW STATS

    console.log(response.forecast[0].upper.freshsnow_in);
    console.log(response.forecast[0].upper.windspd_mph);
    console.log(response.forecast[0].upper.temp_f);
    console.log(response.forecast[0].upper.feelslike_f);
    console.log(response.forecast[0].upper.wx_desc);

    var peakSnow = response.forecast[0].upper.freshsnow_in;
    var peakWind = response.forecast[0].upper.windspd_mph;
    var peakTemp = response.forecast[0].upper.temp_f;
    var peakFeel = response.forecast[0].upper.feelslike_f;
    var peakVis = response.forecast[0].upper.wx_desc;

    $("#snow-peak").append(peakSnow + " inches");
    $("#wind-peak").append(peakWind + " MPH");
    $("#temp-peak").append(peakTemp + " Fahrenheit");
    $("#feels-like-peak").append(peakFeel + " Fahrenheit");
    $("#visibility-peak").append(peakVis);
  });

 
  $("#submit").on("click", function () {

    var baseCurrency = $("#currency").val()

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://currency26.p.rapidapi.com/convert/EUR/" + baseCurrency + "/1",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "currency26.p.rapidapi.com",
        "x-rapidapi-key": "a32a78eeadmsh2e228973a5b48fbp189947jsn7abd11e355ff"
      }
    }
    $.ajax(settings).done(function (responseCurr) {
      console.log(responseCurr);
      var totDays = $(".days").val()
      var passtype = $("#passes").val();
      var totInt = parseInt(totDays)
      console.log(passtype);
      var vl = responseCurr.vl;

      if (passtype === "Adult") {
        price = totInt * 46;
        console.log(price);
      } else if (passtype === "Junior/Senior") {
        price = totInt * 41;
        console.log(price);
      } else if (passtype === "University") {
        price = totInt * 43;
        console.log(price);
      }
      var final = vl * price
      var finalFixed = final.toFixed(2)
      console.log(finalFixed);

      $("#output").append(finalFixed);

    });
  })
});

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

