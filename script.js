const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('get-weather').addEventListener('click', fetchWeather);

function fetchWeather() {
    const city = document.getElementById('city-input').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const url = `${weatherApiUrl}?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found');
            }
        })
        .catch(error => console.log('Error:', error));
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = Math.round(data.main.temp);
    const weatherDescription = data.weather[0].description;

    document.getElementById('city-name').textContent = `Weather in ${cityName}`;
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('weather-description').textContent = weatherDescription;
}
