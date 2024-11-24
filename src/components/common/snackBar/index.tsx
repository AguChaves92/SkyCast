import { useEffect, useState } from "react";
import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SnackbarType } from "../../../types";
import { t } from "../../../location/location";

interface CustomSnackbarProps {
  type: SnackbarType;
  message: string;
  onClose: () => void;
}

const CustomSnackbar = ({ type, message, onClose }: CustomSnackbarProps) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert
        severity={type}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        {/* @ts-ignore */}
        {`${t(message)}`}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
