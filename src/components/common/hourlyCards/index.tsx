import { Box, Typography } from "@mui/material";
import { ForecastEntry } from "../../../types";
import { getIcon } from "../cityCards/controller";
import './styles.css'
import { formatTime, roundToOneDecimal } from "../../../utils";

interface Props {
  data: ForecastEntry;
}
const HourlyCards = ({ data }: Props) => {
  const { timestamp, mainData, weather } = data;
  
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
      <Typography variant="subtitle2" color="textSecondary">
        {formatTime(timestamp)}
      </Typography>
      <img
          className="icon"
          src={getIcon(weather.id as number)}
          alt="icon-weather"
        />
      <Typography variant="h6" fontWeight="bold" mt={1}>
        {roundToOneDecimal(mainData.temperature)}°C
      </Typography>
    </Box>
  );
};

export default HourlyCards;
