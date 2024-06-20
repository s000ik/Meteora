# Meteora

## Overview

Meteora is a user-centric weather forecasting web application developed to provide clean and insightful weather updates for up to 7 days. By integrating the OpenWeather API, Meteora delivers real-time weather data over five key metrics, including temperature, humidity, and wind speed.

## Technologies and Tools

- **Infra:** Next.js, React, Tailwind CSS, TypeScript
- **API:** OpenWeather API

## Features

1. **Weather Forecasting:**
   - Provides weather updates for up to 7 days.
   - Displays real-time data for temperature, humidity, wind speed, and other key metrics.

2. **User-Centric Design:**
   - Developed with a focus on user experience.
   - Clean and intuitive interface designed with Tailwind CSS.

3. **Real-Time Data Integration:**
   - Utilizes the OpenWeather API to fetch real-time weather data.
   - Updates weather metrics dynamically.

## Getting Started

### Prerequisites

- Node.js
- Git
- A suitable IDE (e.g., VSCode)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/s000ik/Meteora.git
   cd Meteora
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up API Key:**
   - Obtain an API key from [OpenWeather](https://openweathermap.org/api).
   - Create a `.env.local` file in the project root and add your API key:
     ```env
     NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
     ```

4. **Run the Application:**
   ```bash
   npm run dev
   ```

5. **Access the Application:**
   - Navigate to `http://localhost:3000` to view the webapp.

## Usage

- **Weather Dashboard:**
  - View the weather forecast for the next 7 days.
  - Check real-time data for temperature, humidity, wind speed, and other metrics.

- **Custom Locations:**
  - Search for and select different locations to view their weather forecasts.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The developers of Next.js, React, Tailwind CSS, and TypeScript for their robust frameworks and libraries.
- OpenWeather for providing accessible and comprehensive weather data through their API.
