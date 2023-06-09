# Weather App

A simple Node.js application that provides weather information for a given city. This application uses the OpenWeatherMap API to retrieve current weather data.

## Prerequisites

Before running this application, you will need to obtain an API key from [OpenWeatherMap](https://openweathermap.org/) by creating an account and generating a new API key. The API key is required to make requests to the OpenWeatherMap API.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vaibhavisloor/Weather-Explorer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Weather-Explorer
   ```

3. Install the dependencies:

   ```bash
   npm install express body-parser dotenv
   ```

4. Create a `.env` file in the project's root directory and add your OpenWeatherMap API key:

   ```bash
   API_KEY=your-api-key
   ```

5. Start the application:

   ```bash
   npm start
   ```

## Usage

After starting the application, open your preferred web browser and navigate to `http://localhost:3000`. You will be presented with a simple interface to enter the name of a city.

1. Enter the name of the city for which you want to retrieve weather information.

2. Click the "Go" button.

3. The application will fetch the weather data from the OpenWeatherMap API and display it on the screen.

## Screenshots

![Screenshot 1](screenshot1.png)
![Screenshot 2](screenshot2.png)


## License

This project is licensed under the MIT License.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [Node.js](https://nodejs.org/) for the server-side JavaScript runtime.
- [Express](https://expressjs.com/) for the web application framework.
- [dotenv](https://github.com/motdotla/dotenv) for managing environment variables.

 
