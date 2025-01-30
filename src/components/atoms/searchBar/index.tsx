import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  setFocus?: boolean;
}

const SearchBar = ({ onSearch, setFocus = false }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (setFocus) inputRef.current?.focus();
  }, [setFocus]);

  return (
    <TextField
      inputRef={inputRef}
      id="search"
      label="Buscar frase"
      variant="outlined"
      onChange={(e) => onSearch(e.target.value)}
      placeholder="buscar"
      autoComplete="off"
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchBar;
