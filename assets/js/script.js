// FETCHING THE URL
function today() {

    var city = document.querySelector('#city').value;
    // Fetching the URL
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=b6a498bf6c1a44cb20137595567af9c8&units=imperial')
        .then(function(response) {
            console.log(response);

            return response.json();
        })
        .then(function(response) {
            console.log(response);

            // create a variable the will select the div where the temp will be placed
            var tempContainer = document.querySelector("#now");
            // Empty out the div
            tempContainer.innerHTML = "";
            var degree = document.createElement('div');
            degree.textContent = response.main.temp;
            // degree.setAttribute('src', data.main.temp);
            tempContainer.appendChild(degree);

        })
}

function fiveDay() {
    var city = document.querySelector('#city').value;

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=b6a498bf6c1a44cb20137595567af9c8&units=imperial')
        .then(function(response) {
            console.log(response);
            return response.json;
        })
        .then(function(data) {
            console.log(data);
        });
}


// var weather = document.addEventListener("click", show)