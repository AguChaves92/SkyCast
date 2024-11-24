import { Box, Typography } from "@mui/material";
import { ForecastEntry } from "../../../types";
import { getIcon } from "../cityCards/controller";
import './styles.css'
import { roundToOneDecimal } from "../../../utils";

interface Props {
  data: ForecastEntry;
}
const HourlyCards = ({ data }: Props) => {
  const { timestamp, mainData, weather } = data;

  // Convertir timestamp a hora local
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderRadius: "8px",
        padding: "12px",
        width: "100px",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Hora */}
      <Typography variant="subtitle2" color="textSecondary">
        {formatTime(timestamp)}
      </Typography>

      {/* Icono del clima */}
      <img
          className="icon"
          src={getIcon(weather.id as number)}
          alt="icon-weather"
        />

      {/* Temperatura */}
      <Typography variant="h6" fontWeight="bold" mt={1}>
        {roundToOneDecimal(mainData.temperature)}°C
      </Typography>
    </Box>
  );
};

export default HourlyCards;
