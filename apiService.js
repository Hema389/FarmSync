export const fetchWeatherUpdates = async () => {
    try {
      const response = await fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=LOCATION');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather updates:', error);
    }
  };
  