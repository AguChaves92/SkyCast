import React, { useEffect, useState } from "react";
import { Box, Tooltip, IconButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import "./styles.css";
import { useContextProvider } from "../../../hooks/useMyContexthooks";
import { getClassname } from "./controller.ts";
import LanguageSelect from "../languageSelect";
import CityCard from "../cityCards";
import Loader from "../loader/index.tsx";
import { t } from "../../../location/location.ts";
import ContactFormModal from "../../contactModal/index.tsx";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { getFontColor } from "../../../pages/home/controller.ts";

type LayoutProps = {
  children: React.ReactNode;
};

interface StyleType {
  background?: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isLoggedIn, cities, isLoading, selectedCity, handleLogout } =
    useContextProvider();
  const [className, setClassName] = useState<string>();
  const [style, setStyle] = useState<StyleType>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const { className, style } = getClassname({ isLoggedIn, selectedCity });
    setClassName(className);
    setStyle(style);
  }, [selectedCity, isLoggedIn]);

  return (
    <Box className={className} sx={style}>
      {isLoading && <Loader />}
      <Box className="navbar">
        <Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={4}
          >
            <img
              src={"icons/partly-cloudy-day.svg"}
              className="app-icon"
              alt="mssing svg"
            />
            <Typography
              variant="h4"
              color={selectedCity && getFontColor(selectedCity.weather.id)}
            >
              SkyCast
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={4}
        >
          <LanguageSelect />

          {isLoggedIn && (
            <Box sx={{ paddingTop: "4px" }}>
              <Tooltip title="Cerrar sesión">
                <IconButton
                  sx={{
                    padding: "8px, 8px, 8px, 0",
                  }}
                  color="inherit"
                  onClick={handleLogout}
                  className="nav-button"
                >
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Box>
      </Box>
      <Box className="main-content">
        {isLoggedIn && (
          <Box className="drawer">
            <Box className="card-container">
              {cities &&
                cities.map((city, index) => {
                  return <CityCard key={index} city={city} />;
                })}
            </Box>
            <Box className="contact-box" onClick={() => setIsModalOpen(true)}>
              <Typography>{t("gotDoubts")}</Typography>
              <Box display={"flex"} alignItems={"center"} gap={2}>
                <Typography>{t("contactUs")}</Typography>
                <MailOutlineIcon fontSize="small" />
              </Box>
            </Box>
          </Box>
        )}
        <Box className="content">{children}</Box>
        <ContactFormModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </Box>
    </Box>
  );
};

export default Layout;
