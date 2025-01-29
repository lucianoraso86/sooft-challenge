import { TextField } from "@mui/material";
import { FC } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <TextField
      id="search"
      label="Buscar frase"
      variant="outlined"
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Buscar frases"
      size="small"
      fullWidth
    />
  );
};

export default SearchBar;
