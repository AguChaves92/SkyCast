import { City, ForecastEntry } from "../../types";

export const getFontColor = (id: number) => {
  return id >= 600 && id < 750 ? "black" : "white";
};

export interface SortByDays {
  title: string;
  timestamp: number;
  list: ForecastEntry[];
}

function getTimestampsWithDayOfTheWeek() {
  const today = new Date();
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const timestampsWithDayOfWeek = [];
  for (let i = 0; i <= 5; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    date.setHours(0, 0, 0, 0);

    const timestamp = date.getTime();
    const dayOfWeek = daysOfWeek[date.getDay()];

    timestampsWithDayOfWeek.push({
      timestamp,
      title: i === 0 ? "today" : i === 1 ? "tomorrow" : dayOfWeek,
      list: [] as ForecastEntry[],
    });
  }

  return timestampsWithDayOfWeek;
}

export const sortByTimestamp = (list: ForecastEntry[]) => {
  const days = getTimestampsWithDayOfTheWeek();

  days.forEach((day, index) => {
    const startTimestamp = day.timestamp;
    const endTimestamp =
      index < days.length - 1
        ? days[index + 1].timestamp
        : Number.POSITIVE_INFINITY;

    day.list = list.filter(
      (entry) =>
        entry.timestamp * 1000 >= startTimestamp &&
        entry.timestamp * 1000 < endTimestamp
    );
  });

  return days as SortByDays[];
};

export const updateFirstForecastEntryWithCityData = (
  daysArray: SortByDays[],
  selectedCity: City
) => {
  if (daysArray.length > 0 && daysArray[0].list.length > 0) {
    const firstDay = daysArray[0];
    const firstEntry = firstDay.list[0];

    firstEntry.mainData.tempMin = selectedCity.main.tempMin;
    firstEntry.mainData.tempMax = selectedCity.main.tempMax;
  }
};
