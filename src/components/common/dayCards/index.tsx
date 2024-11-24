import { Box, Button, Typography } from "@mui/material";
import { getIcon } from "../cityCards/controller";
import "./styles.css";
import { SortByDays } from "../../../pages/home/controller";

import { roundToOneDecimal } from "../../../utils";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  getMaxTemperatureForDay,
  getMinTemperatureForDay,
  getMostFrequentWeatherId,
} from "./controller";
import { t } from "../../../location/location";

interface Props {
  data: SortByDays;
  index: number;
  onOpenModal: (index: number) => void;
}
const DayCards = ({ data, index, onOpenModal }: Props) => {
  const { title, list } = data;

  return (
    <Box className="day-card-container">
      <Typography variant="subtitle2" color="textSecondary">
        {/* @ts-ignore */}
        {t(`${title}`)}
      </Typography>
      <img
        className="icon"
        src={getIcon(getMostFrequentWeatherId(list))}
        alt="icon-weather"
      />

      <Box className="temperature-range-container">
        <Box>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" mt={1}>
              Min
            </Typography>
          </Box>
          <Typography variant="subtitle1" fontWeight="bold" mt={1}>
            {roundToOneDecimal(getMinTemperatureForDay(list))}°C
          </Typography>
        </Box>

        <Box>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" mt={1}>
              Max
            </Typography>
          </Box>
          <Typography variant="subtitle1" fontWeight="bold" mt={1}>
            {roundToOneDecimal(getMaxTemperatureForDay(list))}°C
          </Typography>
        </Box>
      </Box>
      <Button
        className="more-details-button"
        onClick={() => onOpenModal(index)}
      >
        {t("moreDetails")}
        <ArrowForwardIcon sx={{ marginLeft: "0.3rem" }} fontSize="small" />
      </Button>
    </Box>
  );
};

export default DayCards;
