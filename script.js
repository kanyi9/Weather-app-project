

// // Add event listener to the search button
// document.getElementById("searchButton").addEventListener("click", handleSearch);

// // Function to display weather data
// function displayWeather(data) {
//     const weatherDiv = document.getElementById("weather");
//     weatherDiv.innerHTML = `
//         <h2>${data.init}</h2>
//         <p>Temperature: ${data.dataseries[0].temp2m}°C</p>
//         <p>Description: ${data.dataseries[0].weather}</p>
//         <p>Humidity: ${data.dataseries[0].rh2m}%</p>
//     `;
// }

// // Call getWeather function when the page loads
// window.onload = function() {
//     getWeather();
// };


document.addEventListener("DOMContentLoaded", function() {
    function handleSearch() {
        const locationInput = document.getElementById("locationInput");
        const location = locationInput.value;

        if (location.trim() !== "") {
            // location is latitude and longitude together
            const [latitude, longitude] = location.split(",").map(coord => parseFloat(coord.trim()));
            getWeather(latitude, longitude);
        } else {
            alert("Please enter a location in the format 'latitude, longitude'.");
        }
    }

    // Function to get weather data based on long and lat of the location
    function getWeather(latitude, longitude) {
        const apiUrl = `http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=astro&output=json`;

        fetch(apiUrl)//fetch data from the 7timer upi
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {//if an error occurs when fetching data
                console.log('Error fetching weather data:', error);
            });
    }

    // Add event listener to the search button
    document.getElementById("searchButton").addEventListener("click", handleSearch);

    // Function to display weather data
    function displayWeather(data) {
        const weatherDiv = document.getElementById("weather");
        weatherDiv.innerHTML = `
            <h2>${data.init}</h2>
            <p>Temperature: ${data.dataseries[0].temp2m}°C</p>
            <p>Description: ${data.dataseries[0].weather}</p>
            <p>Humidity: ${data.dataseries[0].rh2m}%</p>
        `;
    }
});

