import { Box, Typography } from "@mui/material";
import SimpleCard from "@/components/atoms/simpleCard";

interface Phrase {
  id: string;
  text: string;
}

interface PhraseListProps {
  phrases: Phrase[];
  onDelete: (index: string) => void;
}

const PhraseList = ({ phrases, onDelete }: PhraseListProps) => {
  return (
    <Box display="flex" py={2} gap={2} flexWrap="wrap">
      {phrases.map((item, pos) => (
        <SimpleCard key={pos} text={item.text} onDelete={() => onDelete(item.id)} />
      ))}

      {phrases.length === 0 && <Typography p={2}>No se encontraron frases</Typography>}
    </Box>
  );
};

export default PhraseList;
