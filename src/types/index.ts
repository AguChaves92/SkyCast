import { Dispatch, SetStateAction } from "react";

export type Language = "EN" | "ES";

export interface City {
  id: string;
  name: string;
  weather: WeatherData;
  main: MainData;
  sys: SysData;
  wind: WindData;
  timezone: number;
}

export interface WeatherData {
  main: string; // Resumen del clima ("Rain", "Clouds", etc.)
  description: string; // Descripción más detallada
  id: number; // Icono del clima
}

export interface MainData {
  temperature: number; // Temperatura actual
  feelsLike: number; // Sensación térmica
  tempMin: number; // Temperatura mínima
  tempMax: number; // Temperatura máxima
  pressure: number; // Presión atmosférica
  humidity: number; // Humedad
}

export interface SysData {
  country: string; // País
  sunrise: number; // Hora del amanecer (timestamp)
  sunset: number; // Hora del atardecer (timestamp)
}

export interface ExtendedForecast {
  city: string; // Representa `city.name`
  country: string; // Representa `city.country`
  timezone: number; // Representa `city.timezone`
  sunrise: number; // Representa `city.sunrise`
  sunset: number; // Representa `city.sunset`
  forecast: ForecastEntry[]; // Array de entradas de pronóstico
}

export interface WindData {
  speed: number; // `list.wind.speed`
  degree: number; // `list.wind.deg`
  gust?: number; // `list.wind.gust`
}

export interface ForecastEntry {
  timestamp: number; // Representa `list.dt`
  time: string;
  mainData: MainData;
  weather: WeatherData;
  wind: WindData;
  visibility: number; // `list.visibility`
  pop: number; // `list.pop`
}

export type ThemeMode = "light" | "dark";

export type SnackbarType = 'success' | 'error' | 'warning' | 'info';

export interface AppContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  isLoggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  cities: City[] | [];
  handleLogin: () => void;
  isLoading: boolean;
  selectedCity: City | undefined;
  handleSelectCity: (id: string) => void;
  extendedForecastInfo?: ExtendedForecast;
  handleLogout: () => void;
  onCitySearch: (cityName: string) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
