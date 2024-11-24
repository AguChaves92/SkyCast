import { useContextProvider } from "../../../hooks/useMyContexthooks";
import { Language } from "../../../types";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const LanguageSelect = () => {
  const { language, setLanguage } = useContextProvider();

  const handleChangeLanguage = (event: SelectChangeEvent<"EN" | "ES">) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <Select
      sx={{
     
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
       
      }}
      className="language-selector"
      value={language}
      label="Age"
      onChange={handleChangeLanguage}
    >
      <MenuItem value="ES">Español</MenuItem>
      <MenuItem value="EN">English</MenuItem>
    </Select>
  );
};

export default LanguageSelect;
