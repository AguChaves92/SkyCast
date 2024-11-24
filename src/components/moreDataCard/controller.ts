export const getWindDirection = (degrees: number): string => {
  if (degrees >= 0 && degrees <= 22.5) return "N";
  if (degrees > 22.5 && degrees <= 67.5) return "NE";
  if (degrees > 67.5 && degrees <= 112.5) return "E";
  if (degrees > 112.5 && degrees <= 157.5) return "SE";
  if (degrees > 157.5 && degrees <= 202.5) return "S";
  if (degrees > 202.5 && degrees <= 247.5) return "SW";
  if (degrees > 247.5 && degrees <= 292.5) return "W";
  if (degrees > 292.5 && degrees <= 337.5) return "NW";
  if (degrees > 337.5 && degrees <= 360) return "N";
  return "Invalid"; // Si el valor está fuera de rango
};

export const getHourFromTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp * 1000); // Convertimos a milisegundos
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getGustIcon = (windSpeed: number) => {
  if (windSpeed < 0.3) return "icons/wind-beaufort-0.svg";
  if (windSpeed < 1.6) return "icons/wind-beaufort-1.svg";
  if (windSpeed < 3.4) return "icons/wind-beaufort-2.svg";
  if (windSpeed < 5.5) return "icons/wind-beaufort-3.svg";
  if (windSpeed < 8.0) return "icons/wind-beaufort-4.svg";
  if (windSpeed < 10.8) return "icons/wind-beaufort-5.svg";
  if (windSpeed < 13.9) return "icons/wind-beaufort-6.svg";
  if (windSpeed < 17.2) return "icons/wind-beaufort-7.svg";
  if (windSpeed < 20.8) return "icons/wind-beaufort-8.svg";
  if (windSpeed < 24.5) return "icons/wind-beaufort-9.svg";
  if (windSpeed < 28.5) return "icons/wind-beaufort-10.svg";
  if (windSpeed < 32.7) return "icons/wind-beaufort-11.svg";
  return "icons/wind-beaufort-12.svg";
};
