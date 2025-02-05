import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect, useRef } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  setFocus?: boolean;
}

const SearchBar = ({ onSearch, setFocus = false }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length >= 3) {
      onSearch(query);
    } else {
      onSearch("");
    }
  }, [query, onSearch]);

  useEffect(() => {
    if (setFocus) inputRef.current?.focus();
  }, [setFocus]);

  return (
    <TextField
      inputRef={inputRef}
      id="search"
      label="Buscar frase"
      variant="outlined"
      onChange={(e) => setQuery(e.target.value)}
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
