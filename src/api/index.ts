import axios from "axios";
import { City, ForecastEntry } from "../types";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getCurrentWeatherForCity = async (cityName: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );

    const data = response.data;

    const city: City = {
      id: data.id.toString(),
      name: data.name,
      weather: {
        id: data.weather[0].id,
        main: data.weather[0].main,
        description: data.weather[0].description,
      },
      main: {
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      },
      sys: {
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
      },
      wind: {
        speed: data.wind.speed,
        degree: data.wind.deg,
        gust: data.wind.gust,
      },
      timezone: data.timezone,
    };

    return city;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(`City "${cityName}" not found`);
      } else if (error.response?.status === 401) {
        throw new Error("Invalid API key");
      } else {
        throw new Error(
          `Error fetching weather data for ${cityName}: ${error.message}`
        );
      }
    } else {
      throw new Error(`Unexpected error: ${error}`);
    }
  }
};

export const getDaylyWeatherForCity = async (cityName: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast/?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    let data = response.data;

    console.log(response.data);

    const array = data.list.map((entry: any) =>
      mapApiResponseToForecastEntry(entry)
    );

    const newExtendedForecast = {
      city: data.city.name, // Representa `city.name`
      country: data.city.country, // Representa `city.country`
      timezone: data.city.timezone, // Representa `city.timezone`
      sunrise: data.city.sunrise, // Representa `city.sunrise`
      sunset: data.city.sunset, // Representa `city.sunset`
      forecast: array,
    };

    return newExtendedForecast;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(`City "${cityName}" not found`);
      } else if (error.response?.status === 401) {
        throw new Error("Invalid API key");
      } else {
        throw new Error(
          `Error fetching weather data for ${cityName}: ${error.message}`
        );
      }
    } else {
      throw new Error(`Unexpected error: ${error}`);
    }
  }
};

const mapApiResponseToForecastEntry = (data: any): ForecastEntry => {
  return {
    timestamp: data.dt,
    time: data.dt_txt,
    mainData: {
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
    },
    weather: {
      id: data.weather[0].id,
      main: data.weather[0].main,
      description: data.weather[0].description,
    },
    wind: {
      speed: data.wind.speed,
      degree: data.wind.deg,
      gust: data.wind.gust || 0, // Si no existe gust, establecemos 0 como predeterminado.
    },
    visibility: data.visibility,
    pop: data.pop,
  };
};
