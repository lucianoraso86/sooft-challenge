import { FC } from "react";
import PhraseCard from "@/components/pharseCard";
import { Box, Typography } from "@mui/material";


interface PhraseListProps {
  phrases: string[];
  onDelete: (index: number) => void;
}

const PhraseList: FC<PhraseListProps> = ({ phrases, onDelete }) => {
  return (
    <Box display="flex" py={2} gap={2} flexWrap="wrap">
      {phrases.map((phrase, index) => (
        <PhraseCard
          key={index}
          phrase={phrase}
          onDelete={() => onDelete(index)}
        />
      ))}

      {phrases.length === 0 && ( 
        <Typography p={2}>
          No se encontraron frases
        </Typography>
      )}
    </Box>
  );
};

export default PhraseList;