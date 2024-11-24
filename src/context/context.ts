import { createContext } from "react";
import { AppContextProps, City, ExtendedForecast } from "../types";

export const MyContext = createContext<AppContextProps>({
  language: "EN",
  setLanguage: () => {
    return;
  },
  isLoggedIn: false,
  setLoggedIn: (loggedIn: boolean) => {
    return;
  },
  cities: [],
  onCitySearch: (cityName: string) => {
    return;
  },
  handleLogin: async () => {
    return;
  },
  isLoading: false,
  selectedCity: {} as City,
  handleSelectCity: (id: string) => {
    return;
  },
  extendedForecastInfo: {} as ExtendedForecast,
  handleLogout: () => {
    return;
  },
  setIsLoading: () => {
    return;
  },
});
