🌤 Weather Application
A simple weather application that fetches and displays real-time weather data for any city using the OpenWeather API. This project is built with HTML, CSS, and JavaScript, providing an interactive and user-friendly interface for weather updates.

🌟 Features
Fetch and display real-time weather information for any city.
Displays data including:
Current temperature
Minimum and maximum temperature
Weather condition (e.g., sunny, cloudy, rainy)
Feels like temperature, humidity, wind speed, and atmospheric pressure.
Dynamic icons for weather conditions.
Fully responsive design with a dark-themed UI.

🛠️ Technologies Used
HTML: Markup structure of the app.
CSS: Custom styling for an elegant and responsive design.
JavaScript: Handles API calls and dynamic content updates.
OpenWeather API: Provides the weather data.

🚀 Installation Guide
Follow these steps to run the project locally:

Prerequisites
A modern browser like Chrome, Firefox, or Edge.
A code editor like VS Code.
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/jeetjoshi28/SkyLens.git
Navigate to the project folder:

bash
Copy code
cd weather-application
Open the project folder in your code editor.

Obtain an API key from OpenWeatherMap.

Open the script.js file and replace the placeholder API key with your own:

javascript
Copy code
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`;
Run the project:

Open the index.html file in your browser.
Alternatively, use a local web server like VS Code's Live Server extension for better performance.


🎯 Future Enhancements
Add a five-day weather forecast feature.
Allow users to save their favorite cities for quick access.
Use geolocation to fetch weather data for the user's current location.

🤝 Contributions
Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.

