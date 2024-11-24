import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { SortByDays } from "../../pages/home/controller";
import { t } from "../../location/location";
import MoreDataCard from "../moreDataCard";
import { useEffect, useState } from "react";
import { getBackground } from "../common/layout/controller";
import { getDayAndMonth } from "../../utils";
import "./styles.css";
import HourlyCards from "../common/hourlyCards";

interface Props {
  cityName: string;
  isOpen: boolean;
  handleClose: () => void;
  day: SortByDays;
}

const ModalComponent = ({ isOpen, handleClose, day, cityName }: Props) => {
  const [selectedTime, setSelectedTime] = useState(day.list[0]);
  const onHandleSelectTime = (index: number) => {
    setSelectedTime(day.list[index]);
  };
  let background;

  useEffect(() => {
    background = getBackground(selectedTime.weather.id);
  }, [selectedTime]);

  return (
    <Dialog
      fullWidth={true}
      open={isOpen}
      onClose={handleClose}
      maxWidth={"lg"}
      PaperProps={{
        style: {
          backgroundColor: background,
        },
      }}
    >
      <DialogTitle>
        {/* @ts-ignore */}
        {`${t("weatherIn")} ${cityName},  ${t(day.title)} ${getDayAndMonth(
          day.timestamp
        )}`}
      </DialogTitle>

      <DialogContent>
        <MoreDataCard data={selectedTime} />
        <Box
          className="time-list-container"
          sx={{
            gap: day.list.length > 6 ? "25px" : "3rem",
          }}
        >
          {day.list.map((time, index) => {
            return (
              <Box key={index} onClick={() => onHandleSelectTime(index)}>
                <HourlyCards data={time} />
              </Box>
            );
          })}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
