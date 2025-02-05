import { useEffect, useRef, useState, FormEvent, ChangeEvent } from "react";
import { Box, Button, TextField } from "@mui/material";

interface AddFormProps {
  onAddPhrase: (phrase: string) => void;
  setFocus?: boolean;
}

interface ErrorState {
  status: boolean;
  text: string;
}

const MAX_PHRASE_LENGTH = 500;

const AddForm = ({ onAddPhrase, setFocus = false }: AddFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [phrase, setPhrase] = useState<string>("");
  const [onError, setOnError] = useState<ErrorState>({ status: false, text: "" });

  const validatePhrase = (phrase: string) => {
    if (phrase.trim() === "") {
      setOnError({ status: true, text: "La frase no puede estar vacía" });
      return false;
    }
    if (phrase.length > MAX_PHRASE_LENGTH) {
      setOnError({ status: true, text: `La frase no puede tener más de ${MAX_PHRASE_LENGTH} caracteres` });
      return false;
    }
    setOnError({ status: false, text: "" });
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validatePhrase(phrase)) {
      onAddPhrase(phrase);
      setPhrase("");
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onError) setOnError({ status: false, text: "" });
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
          error={onError.status}
          helperText={onError.text}
        />

        <Button variant="contained" type="submit">
          Agregar
        </Button>
      </Box>
    </form>
  );
};

export default AddForm;
