import { Box, Button, TextField } from "@mui/material";
import { FC, FormEvent, useState } from "react";

interface AddPhraseFormProps {
  onAddPhrase: (phrase: string) => void;
}

const AddPhraseForm: FC<AddPhraseFormProps> = ({ onAddPhrase }) => {
  const [phrase, setPhrase] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (phrase.trim()) {
      onAddPhrase(phrase);
      setPhrase("");
    }
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Box display="flex" alignItems="center" gap={2} py={2}>
        <TextField
          id="phrase"
          label="Agregar frase"
          variant="outlined"
          onChange={(e) => setPhrase(e.target.value)}
          value={phrase}
          placeholder="Nueva frase"
          size="small"
          fullWidth 
        />

        <Button variant="contained" type="submit">
          Agregar
        </Button>
      </Box>
    </form>
  );
};

export default AddPhraseForm;
