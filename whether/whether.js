    async function fetchWeather() {
      const city = document.getElementById('city').value;
      const resultDiv = document.getElementById('result');

      if (!city) {
        resultDiv.textContent = 'Please enter a city name.';
        return;
      }

      resultDiv.textContent = 'Fetching weather...';

      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=41309a70297c4ac84c415dbbaa64a57f&units=metric`);
        
        if (!response.ok) {
          throw new Error('City not found');
        }

        const data = await response.json();

        // Display weather details
        const temp = data.main.temp;
        const weather = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        resultDiv.innerHTML = `
          <p>Temperature: ${temp}°C</p>
          <p>Condition: ${weather}</p>
          <p>Humidity: ${humidity}%</p>
          <p>Wind Speed: ${windSpeed} m/s</p>
        `;
        resultDiv.style.color = 'green';
      } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
        resultDiv.style.color = 'red';
      }
    }