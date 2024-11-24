export const getIcon = (id: number) => {
  let icon="icons/not-available.svg";
  if (id >= 200 && id < 300) {
    icon = "icons/thunderstorms-rain.svg";
  }
  if (id >= 300 && id < 400) {
    icon = "icons/drizzle.svg";
  }
  if (id >= 500 && id < 600) {
    icon = "icons/rain.svg";
  }
  if (id > 600 && id < 700) {
    icon = "icons/snowy.svg";
  }
  if (id === 701) icon = "icons/mist.svg";
  if (id === 721) icon = "icons/haze.svg";
  if (id === 731) icon = "icons/dust.svg";
  if (id === 741) icon = "icons/fog.svg";
  if (id === 761) icon = "icons/dust.svg";
  if (id === 781) icon = "icons/tornado.svg";
  if (id === 800) icon = "icons/clear-day.svg";
  if (id === 801 || id === 802) icon = "icons/partly-cloudy-day.svg";
  if (id === 803 || id === 804) icon = "icons/cloudy.svg";

  return icon;
  
};
