import { City } from "../../../types";

export const getBackground = (weatherCode: number): string => {
  // Determinar el grupo de clima basado en el código
  if (weatherCode >= 200 && weatherCode < 300) {
    return "linear-gradient(to bottom, #1a1a1a, #4a4a4a, #1a1a1a)"; // Tormenta
  } else if (weatherCode >= 300 && weatherCode < 400) {
    return "linear-gradient(to bottom, #9eb3c2, #b4c5d4, #9eb3c2)"; // Llovizna
  } else if (weatherCode >= 500 && weatherCode < 600) {
    return "linear-gradient(to bottom, #4b6cb7, #182848, #4b6cb7)"; // Lluvia
  } else if (weatherCode >= 600 && weatherCode < 700) {
    return " linear-gradient(to bottom, #e6e6e6, #ffffff, #e6e6e6)"; // Nieve
  } else if (
    weatherCode === 701 ||
    weatherCode === 721 ||
    weatherCode === 741
  ) {
    return " linear-gradient(to bottom, #b8c6db, #f5f7fa, #b8c6db)"; // Nieve
  } else if (weatherCode === 761) {
    return " linear-gradient(to bottom, #d3a15f, #ffcb8c, #d3a15f)"; // Nieve
  } else if (weatherCode === 781) {
    return " linear-gradient(to bottom, #2c3e50, #4ca1af, #2c3e50)"; // Nieve
  } else if (weatherCode === 800) {
    return "linear-gradient(to bottom, #56ccf2, #2f80ed, #56ccf2)"; // Despejado
  } else if (weatherCode === 801 || weatherCode === 802) {
    return "linear-gradient(to bottom, #7abcff, #ffffff, #7abcff)"; // Nublado
  } else {
    return "linear-gradient(to bottom, #bdc3c7, #2c3e50, #bdc3c7)"; // Por defecto
  }
};

interface Props {
  isLoggedIn: boolean;
  selectedCity?: City;
}

export const getClassname = ({ isLoggedIn, selectedCity }: Props) => {
  let className = "layout-container";
  let style = {};

  if (!isLoggedIn) {
    className += " animatedBackground";
  } else if (selectedCity) {
    style = { background: getBackground(selectedCity.weather.id) };
  }

  return { className, style };
};
