import { ForecastEntry } from "../../../types";

export const getMinTemperatureForDay = (forecast: ForecastEntry[]): number => {
  return Math.min(...forecast.map((entry) => entry.mainData.tempMin));
};

export const getMaxTemperatureForDay = (forecast: ForecastEntry[]): number => {
  return Math.max(...forecast.map((entry) => entry.mainData.tempMax));
};

export const getMostFrequentWeatherId = (forecast: ForecastEntry[]): number => {
  const frequencyMap: Record<number, number> = {};

  forecast.forEach((entry) => {
    const id = entry.weather.id;
    frequencyMap[id] = (frequencyMap[id] || 0) + 1;
  });

  return Object.keys(frequencyMap).reduce((mostFrequentId, currentId) => {
    return frequencyMap[Number(currentId)] > frequencyMap[mostFrequentId]
      ? Number(currentId)
      : mostFrequentId;
  }, Number(Object.keys(frequencyMap)[0]));
};
