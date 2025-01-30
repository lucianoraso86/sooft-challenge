import { useEffect, useRef, useState, FormEvent, ChangeEvent } from "react";
import { Box, Button, TextField } from "@mui/material";

interface AddFormProps {
  onAddPhrase: (phrase: string) => void;
  setFocus?: boolean;
}

const AddForm = ({ onAddPhrase, setFocus = false }: AddFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [phrase, setPhrase] = useState<string>("");
  const [onError, setOnError] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (phrase.trim()) {
      onAddPhrase(phrase);
      setPhrase("");
    } else {
      setOnError(true);
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onError) setOnError(false);
    setPhrase(e.target.value);
  };

  useEffect(() => {
    if (setFocus) inputRef.current?.focus();
  }, [setFocus]);

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Box display="flex" flexDirection={"column"} alignItems="flex-end" gap={3} pt={2}>
        <TextField
          inputRef={inputRef}
          id="phrase"
          value={phrase}
          onChange={handleOnChange}
          label="Ingrese una frase"
          placeholder="Nueva frase"
          variant="outlined"
          fullWidth
          error={onError}
          helperText={onError ? "La frase no puede estar vacía" : ""}
        />

        <Button variant="contained" type="submit">
          Agregar
        </Button>
      </Box>
    </form>
  );
};

export default AddForm;
