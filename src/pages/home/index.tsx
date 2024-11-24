import { Box, Typography } from "@mui/material";
import { useContextProvider } from "../../hooks/useMyContexthooks";
import { getIcon } from "../../components/common/cityCards/controller";
import "./styles.css";
import {
  getFontColor,
  SortByDays,
  sortByTimestamp,
  updateFirstForecastEntryWithCityData,
} from "./controller";
import { useEffect, useState } from "react";
import DayCards from "../../components/common/dayCards";
import ModalComponent from "../../components/selectedDayDetailsModal";
import { roundToOneDecimal } from "../../utils";
import { t } from "../../location/location";
import SearchInput from "../../components/common/searchBar";

const HomePage = () => {
  const [daysArray, setDaysArray] = useState<SortByDays[]>([]);
  const [selectedDay, setSelectedDay] = useState<SortByDays>();
  const [originalDaysArray, setoriginalDaysArray] = useState<SortByDays[]>([]);
  const { extendedForecastInfo, selectedCity, onCitySearch } =
    useContextProvider();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (extendedForecastInfo) {
      const array = sortByTimestamp(extendedForecastInfo?.forecast);
      setoriginalDaysArray(array);

      if (selectedCity) {
        updateFirstForecastEntryWithCityData(array, selectedCity);
        setDaysArray(array);
      }
    }
  }, [selectedCity, extendedForecastInfo]);

  const handleClickOpen = (index: number) => {
    setSelectedDay(originalDaysArray[index]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDay(undefined);
  };

  console.log(selectedCity)

  return (
    <Box className="home-container">
      <SearchInput onSearch={onCitySearch} />

      <Box className="main-data-container">
        <Box>
          <Typography
            variant="h1"
            fontWeight="bold"
            color={selectedCity && getFontColor(selectedCity.weather.id)}
          >
            {selectedCity?.name}
          </Typography>
          <Typography
            variant="h3"
            color={selectedCity && getFontColor(selectedCity.weather.id)}
          >
            {`${t("temperature")}: ${roundToOneDecimal(
              selectedCity?.main.temperature || 0
            )} °C`}
          </Typography>
        </Box>
        <img
          className="home-icon"
          src={getIcon(selectedCity?.weather.id as number)}
          alt="icon-weather"
        />
      </Box>

      <Box className="day-card-list-container">
        {daysArray.map((day, index) => {
          return (
            <DayCards
              key={index}
              data={day}
              index={index}
              onOpenModal={handleClickOpen}
            />
          );
        })}
      </Box>
      {selectedDay && (
        <ModalComponent
          isOpen={open}
          handleClose={handleClose}
          cityName={selectedCity?.name || ""}
          day={selectedDay}
        />
      )}
    </Box>
  );
};

export default HomePage;
