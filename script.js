function handleSearch() {
    const locationInput = document.getElementById("locationInput");
    const location = locationInput.value;

    if (location.trim() !== "") {
        getWeather(location);
    } else {
        alert("Please enter a location.");
    }
}

// Function to get weather data based on location
function getWeather(location) {
    const apiUrl = `http://www.7timer.info/bin/api.pl?lon=${location}&lat=${location}&product=astro&output=json`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
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

// Call getWeather function when the page loads
window.onload = function() {
    getWeather();
};
