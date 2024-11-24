import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { ForecastEntry } from "../../types";
import { t } from "../../location/location";
import { getGustIcon, getWindDirection } from "./controller";
import { convertMetersToKilometers, roundToOneDecimal } from "../../utils";

interface Props {
  data: ForecastEntry;
}
const MoreDataCard = ({ data }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <List sx={{ width: "100%", maxWidth: 360 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              sx={{
                bgcolor: "transparent",
                height: "56px",
                width: "56px",
              }}
            >
              <img src={"icons/thermometer-celsius.svg"} alt="no-img" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${t("feelsLike")} ${roundToOneDecimal(
              data.mainData.feelsLike
            )}°C`}
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar
              sx={{
                bgcolor: "transparent",
                height: "56px",
                width: "56px",
              }}
            >
              <img src={"icons/humidity.svg"} alt="no-img" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${t("humidity")} ${data.mainData.humidity}%`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              sx={{
                bgcolor: "transparent",
                height: "56px",
                width: "56px",
              }}
            >
              <img src={"icons/barometer.svg"} alt="no-img" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${t("pressure")} ${data.mainData.pressure} hPa`}
          />
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              sx={{
                bgcolor: "transparent",
                height: "56px",
                width: "56px",
              }}
            >
              <img src={"icons/sunrise.svg"} alt="no-img" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${t("visibility")} ${convertMetersToKilometers(
              data.visibility
            )}`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              sx={{
                bgcolor: "transparent",
                height: "56px",
                width: "56px",
              }}
            >
              <img src={"icons/windsock.svg"} alt="no-img" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${t("windDirection")} ${getWindDirection(
              data.wind.degree
            )}`}
            secondary={`${data.wind.speed} m/s`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              sx={{
                bgcolor: "transparent",
                height: "56px",
                width: "56px",
              }}
            >
              <img src={getGustIcon(data.wind.gust || 0)} alt="no-img" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${t("gust")} ${roundToOneDecimal(data.wind.gust || 0)}`}
          />
        </ListItem>
      </List>
    </Box>
  );
};

/* barometer 
celcius
humidity
sunset,
sunrise,
windsock
wind-beaufort-.svg
*/

export default MoreDataCard;
