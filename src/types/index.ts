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
  main: string; 
  description: string; 
  id: number; 
}

export interface MainData {
  temperature: number; 
  feelsLike: number;
  tempMin: number; 
  tempMax: number; 
  pressure: number; 
  humidity: number; 
}

export interface SysData {
  country: string;
  sunrise: number; 
  sunset: number;
}

export interface ExtendedForecast {
  city: string;
  country: string; 
  timezone: number;
  sunrise: number; 
  sunset: number;
  forecast: ForecastEntry[]; 
}

export interface WindData {
  speed: number; 
  degree: number; 
  gust?: number; 
}

export interface ForecastEntry {
  timestamp: number; 
  time: string;
  mainData: MainData;
  weather: WeatherData;
  wind: WindData;
  visibility: number;
  pop: number; 
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
