// Pseudo-coding to begin

//2 function,
// 1 for resort
// 1 for weather conditions

//variables to create from API
//resorts
//Report Date
// Percentage open
// Date of Last Significant snowfall
// Amount of last significant snowfall
// Consolidated snow depth on lower slopes
// Consolidated snow depth on upper slopes
// Surface condition description
// possibly!!! contact for resorts, address etc
//weather
// cloud
// precipitation (rain, hail, snow, sleet)
// humidity
// visibility
// weather code, icon and description
// fresh snow
// temperature
// feels like temperature
// wind direction
// wind speed
// wind gust

$(document).ready(function () {
  var currWeatherPila =
    "https://api.weatherunlocked.com/api/resortforecast/666020?app_id=8ef92fdb&app_key=f1a993da508ddcdd9c8459ab494bbc83";
  $.ajax({
    url: currWeatherPila,
    method: "GET",
  }).then(function (response) {
    
    // BASE SNOW STATS

    var baseSnow = response.forecast[0].base.freshsnow_in;
    var baseWind = response.forecast[0].base.windspd_mph;
    var baseTemp = response.forecast[0].base.temp_f;
    var baseFeel = response.forecast[0].base.feelslike_f;
    var baseVis = response.forecast[0].base.wx_desc;

    $("#snow").append(baseSnow + " inches");
    $("#wind").append(baseWind + " MPH");
    $("#temp").append(baseTemp + " Fahrenheit");
    $("#feels-like").append(baseFeel + " Fahrenheit");
    $("#visibility").append(baseVis);

    // PEAK SNOW STATS

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

 
  // CURRENCY PASS CALCULATOR //

  $("#submit").on("click", function () {

    var baseCurrency = $("#currency").val()

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://currency26.p.rapidapi.com/convert/EUR/" + baseCurrency + "/1",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "currency26.p.rapidapi.com",
        "x-rapidapi-key": "1b2a3f6796msha49d17ac4e0e047p1b93a7jsnad5f9a5fe19a"
      }
    }

    // TAKING INFO FROM THE USER INPUTS AND CONVERTING IT TO NUMBERS //

    $.ajax(settings).done(function (responseCurr) {
      var totDays = $(".days").val();
      var passtype = $("#passes").val();
      var totInt = parseInt(totDays);
      console.log(passtype);
      var vl = responseCurr.vl;

      // RUNNING THE CALCULATIONS BASED OFF USER INPUT //

      if (passtype === "Adult") {
        price = _.multiply(totInt, 46);
        console.log(price);
      } else if (passtype === "Junior/Senior") {
        price = _.multiply(totInt, 41);
        console.log(price);
      } else if (passtype === "University") {
        price = _.multiply(totInt, 43);//This is lodash
        console.log(price);
      }
      var final = _.multiply(vl, price)//More lodash
      console.log(final)
      var finalFixed = final.toFixed(2)

      $("#output").text(finalFixed + " " + baseCurrency);
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

