import { City, ExtendedForecast, SnackbarType } from "../types";
import { MyContext } from "./context";
import { ReactNode, useEffect, useState } from "react";
import { getCurrentWeatherForCity, getDaylyWeatherForCity } from "../api";

import { t } from "../location/location";
import CustomSnackbar from "../components/common/snackBar";

interface IProvider {
  children: ReactNode;
}

const SnackbarTypes = {
  success: "success" as SnackbarType,
  error: "error" as SnackbarType,
  warning: "warning" as SnackbarType,
  info: "info" as SnackbarType,
};

export const MyContextProvider = ({ children }: IProvider) => {
  const [language, setLanguage] = useState<"EN" | "ES">("EN");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState<City[] | []>([]);
  const [selectedCity, setSelectedCity] = useState<City | undefined>();
  const [snackbar, setSnackbar] = useState({
    open: false,
    type: SnackbarTypes.info,
    message: "",
  });

  const [extendedForecastInfo, setExtendedForecastInfo] = useState<
    ExtendedForecast | undefined
  >();

  useEffect(() => {
    getExpandedBroadcast();
  }, [selectedCity]);

  const closeSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const getExpandedBroadcast = async () => {
    setIsLoading(true);
    if (selectedCity) {
      try {
        const expandedInfo = await getDaylyWeatherForCity(selectedCity?.name);
        setExtendedForecastInfo(expandedInfo);
        setSnackbar({
          open: true,
          type: SnackbarTypes.success,
          message: "dataRetrieved",
        });
      } catch (err) {
        setSnackbar({
          open: true,
          type: SnackbarTypes.error,
          message: err instanceof Error ? err.message : "unexpectedError",
        });
      }
    }
    setIsLoading(false);
  };

  const handleLogin = async () => {
    setIsLoading(true);

    const defaultCities = ["Madrid", "London", "Toronto"];
    try {
      const cityPromises = defaultCities.map((cityName) =>
        getCurrentWeatherForCity(cityName)
      );
      const citiesData = await Promise.all(cityPromises);

      setCities(citiesData);
      setSelectedCity(citiesData[0]);
    } catch (err) {
      setSnackbar({
        open: true,
        type: SnackbarTypes.error,
        message: err instanceof Error ? err.message : "unexpectedError",
      });
    } finally {
      setSnackbar({
        open: true,
        type: SnackbarTypes.success,
        message: "loginSuccesful",
      });
      setIsLoading(false);
      setLoggedIn(true);
    }
  };

  const handleSelectCity = (id: string) => {
    setSelectedCity(cities.find((city) => city.id === id));
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setSelectedCity(undefined);
    setExtendedForecastInfo(undefined);
  };

  const onCitySearch = async (cityName: string) => {
    setIsLoading(true);

    try {
      const newCity = await getCurrentWeatherForCity(cityName);
      setCities((prevCities) => [newCity, ...prevCities]);
      setSelectedCity(newCity);
      setSnackbar({
        open: true,
        type: SnackbarTypes.success,
        message: "dataRetrieved",
      });
    } catch (err) {
      setSnackbar({
        open: true,
        type: SnackbarTypes.error,
        message: err instanceof Error ? err.message : "unexpectedError",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MyContext.Provider
      value={{
        language,
        setLanguage,
        isLoggedIn,
        setLoggedIn,
        cities,
        isLoading,
        handleLogin,
        selectedCity,
        handleSelectCity,
        extendedForecastInfo,
        handleLogout,
        onCitySearch,
        setIsLoading,
      }}
    >
      {children}
      {snackbar.open && (
        <CustomSnackbar
          type={snackbar.type}
          message={snackbar.message}
          onClose={closeSnackbar}
        />
      )}
    </MyContext.Provider>
  );
};
