"use client";

import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import SearchBar from "@/components/atoms/searchBar";
import AddForm from "@/components/molecules/addForm";
import PhraseList from "@/components/molecules/pharseList";
import useAlert from "@/hooks/alertProvider/useAlert";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addPhrase, deletePhrase } from "@/redux/slices/phrasesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { setAlert } = useAlert();
  //const [phrases, setPhrases] = useState<string[]>([]);
  const phrases = useSelector((state: RootState) => state.phrases.data);
  const [search, setSearch] = useState<string>("");

  const handleAddPhrase = (newItem: string) => {
    const exists = phrases.find((item) => item.toLowerCase().includes(newItem.toLowerCase()));
    if (!exists) {
     // setPhrases([...phrases, newItem])
      dispatch(addPhrase(newItem));
    } else {
      console.log("La frase ya existe");
      setAlert("La frase ya existe", "error");
    }

  };

  const handleDeletePhrase = (index: number) => {
    dispatch(deletePhrase(index));
    //setPhrases(phrases.filter((item, pos) => pos !== index));
  };

  const filteredPhrases = phrases.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <Typography py={2} variant="h4">
        Sooft Challenge - Frases
      </Typography>
      <Box>
        <AddForm onAddPhrase={handleAddPhrase} />
        <SearchBar onSearch={setSearch} />
        <PhraseList phrases={filteredPhrases} onDelete={handleDeletePhrase} />
      </Box>
    </Container>
  );
}
export default Home