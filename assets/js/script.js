// FETCHING THE TODAY URL
function today() {
    var city = document.querySelector('#city').value;
    // Fetching the URL
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=b6a498bf6c1a44cb20137595567af9c8&units=imperial')
        .then(function(response) {
            console.log(response);

            if (response.ok) {
                return response.json();
            } else {
                alert("Please enter valid city")
            }

        })
        .then(function(response) {
            console.log(response);

            // create a variable the will select the div where the temp will be placed
            var tempContainer = document.querySelector("#now");
            // Empty out the div
            tempContainer.innerHTML = "";

            var degree = document.createElement('h2');
            var humidity = document.createElement("h3");
            var wind = document.createElement("h3");

            degree.textContent = "Tempurature real time: " +
                response.main.temp;
            humidity.textContent = "Humidity is: " +
                response.main.humidity + " Percent"
            wind.textContent = "Wind Speed is: " + response.wind.speed + " mph"

            tempContainer.appendChild(degree);
            tempContainer.appendChild(humidity);
            tempContainer.appendChild(wind);

        })
        .then(function(response) {
            var infoContainer = document.querySelector('#info');
            // empty out the div
            infoContainer.innerHTML = "";
            var tempInfo = document.createElement('p');
            //console.log(tempInfo.textContent = response.main);
            infoContainer.appendChild(tempInfo);
        })

};

var dayContainerEl = document.querySelector('#day-container');
var comingDaysEl = document.querySelector('#comingDays')
var tempContainerEl = document.querySelector('#temp-container');

function fiveDay() {
    var city = document.querySelector('#city').value;

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=b6a498bf6c1a44cb20137595567af9c8&units=imperial')
        .then(function(response) {
            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                alert("Please enter valid city")
            }
        })
        .then(function(response) {
            console.log(response.list);
            for (var i = 0; i < response.list.length; i += 8) {
                // Format the Elements
                var dayName = response.list[i].dt_txt;
                var dayTemp = response.list[i].main.temp;
                var dayHumid = response.list[i].main.humidity;
                var windSpeed = response.list[i].wind.speed;
                // this is the temp data

                // create container for each day
                var dayDiv = document.createElement('div');
                dayDiv.classList = "col-md-6 card flex-row justify-space-between align-center";

                var titleEl = document.createElement("h3");
                titleEl.textContent = dayName;

                // append to container
                dayDiv.appendChild(titleEl);

                // append container to the DOM
                dayContainerEl.appendChild(dayDiv);

                // DAY TEMP
                var tempEl = document.createElement('P');
                tempEl.textContent = " - Average Temp Is: " + dayTemp;
                dayDiv.appendChild(tempEl)

                // HUMIDITY
                var humidEl = document.createElement('p');
                humidEl.textContent = " - Humidity Is: " + dayHumid + " Percent";
                dayDiv.appendChild(humidEl)

                // WIND SPEED
                var windEl = document.createElement('p');
                windEl.textContent = " - Wind Speed Is: " + windSpeed + " mph";
                dayDiv.appendChild(windEl);

                // UV Index

                // WEATHER
                console.log(response.list[i].weather[0].description);
            }
        })
};


// var weather = document.addEventListener("click", show