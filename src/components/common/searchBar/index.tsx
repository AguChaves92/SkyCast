import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { t } from "../../../location/location";
import { useState } from "react";


const ClickableSearchIcon = styled(SearchIcon)({
  cursor: "pointer",
  "&:hover": {
    color: "#1976d2",
  },
});

interface Props {
  onSearch: (name: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleKeyPress = (event: React.ChangeEvent) => {
    //@ts-ignore
    setSearchTerm(event?.target?.value as string);
  };

  return (
    <TextField
      id="input-with-icon-textfield"
      onChange={handleKeyPress}
      variant={"standard"}
      placeholder={t("searchCity")}
      slotProps={{
        input: {
          startAdornment: (
            <ClickableSearchIcon onClick={handleSearch}>
              <SearchIcon />
            </ClickableSearchIcon>
          ),
        },
      }}
    />
  );
};

export default SearchInput;
