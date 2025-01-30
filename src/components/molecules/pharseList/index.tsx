import { Box, Typography } from "@mui/material";
import SimpleCard from "@/components/atoms/simpleCard";
import { useDispatch } from "react-redux";
import { deletePhrase } from "@/reduxConfig/slices/phrasesSlice";

interface Phrase {
  id: string;
  text: string;
}

interface PhraseListProps {
  phrases: Phrase[];
}

const PhraseList = ({ phrases }: PhraseListProps) => {
  const dispatch = useDispatch();
  const handleDelete = (id: string) => dispatch(deletePhrase(id));

  return (
    <Box display="flex" py={2} gap={2} flexWrap="wrap">
      {phrases.map((item, pos) => (
        <SimpleCard key={pos} text={item.text} onDelete={() => handleDelete(item.id)} />
      ))}

      {phrases.length === 0 && <Typography p={2}>No se encontraron frases</Typography>}
    </Box>
  );
};

export default PhraseList;
