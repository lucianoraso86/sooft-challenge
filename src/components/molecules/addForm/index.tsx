import { FormEvent, useEffect, useRef, useState } from "react";
import { Box, Button, TextField } from "@mui/material";

interface AddFormProps {
  onAddPhrase: (phrase: string) => void;
  setFocus?: boolean;
}

const AddForm = ({ onAddPhrase, setFocus = false }: AddFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [phrase, setPhrase] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (phrase.trim()) {
      onAddPhrase(phrase);
      setPhrase("");
    }
  };

  useEffect(() => {
    if (setFocus) inputRef.current?.focus();
  }, [setFocus]);

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Box display="flex" flexDirection={"column"} alignItems="flex-end" gap={2} py={2}>
        <TextField
          inputRef={inputRef}
          id="phrase"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          label="Ingrese una frase"
          placeholder="Nueva frase"
          variant="outlined"
          fullWidth
        />

        <Button variant="contained" type="submit">
          Agregar
        </Button>
      </Box>
    </form>
  );
};

export default AddForm;
