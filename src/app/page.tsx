"use client";

import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import AddPhraseForm from "@/components/addPhraseForm";
import SearchBar from "@/components/searchBar";
import PhraseList from "@/components/pharseList";

const Home = () => {
  const [phrases, setPhrases] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");

  const handleAddPhrase = (newItem: string) => {
    const exists = phrases.find((item) => item.toLowerCase().includes(newItem.toLowerCase()));
    if (!exists) setPhrases([...phrases, newItem]);
  };

  const handleDeletePhrase = (index: number) => {
    setPhrases(phrases.filter((item, pos) => pos !== index));
  };

  const filteredPhrases = phrases.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <Typography py={2} variant="h4">
        Sooft Challenge - Frases
      </Typography>
      <Box>
        <AddPhraseForm onAddPhrase={handleAddPhrase} />
        <SearchBar onSearch={setSearch} />
        <PhraseList phrases={filteredPhrases} onDelete={handleDeletePhrase} />
      </Box>
    </Container>
  );
};

export default Home;
