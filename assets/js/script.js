// VARIABLES
//var

// FETCHING THE URL
var wUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=b6a498bf6c1a44cb20137595567af9c8"

var today = function() {
    // Fetching the URL
    fetch(wUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.list[0])
        })
        /*
        // this is where the weather information will go
        .then(function(response) {
            var todayContainerEl = document.querySelector("#now")
            var todayElement = document.createElement("div")
            todayElement.setAttribute('p', response.data.url);
            todayContainerEl.appendChild(todayElement);
        })
        */
}

today();