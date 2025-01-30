"use client";

import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "@/reduxConfig/store";

import SearchBar from "@/components/atoms/searchBar";
import PhraseList from "@/components/molecules/pharseList";
import AddModal from "@/components/organisms/addModal";

const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const phrases = useSelector((state: RootState) => state.phrases.data);
  const filteredPhrases = phrases.filter((item) => item.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <Typography py={4} variant="h4">
        Sooft Challenge - Frases
      </Typography>
      <Box>
        <Box display={"flex"} gap={3} pb={2}>
          <SearchBar onSearch={setSearch} setFocus={!openModal} />
          <Button variant="contained" style={{ minWidth: "150px" }} onClick={handleOpenModal}>
            Nueva Frase
          </Button>
        </Box>

        <AddModal open={openModal} onClose={handleCloseModal} />

        <PhraseList phrases={filteredPhrases} />
      </Box>
    </Container>
  );
};
export default Home;
