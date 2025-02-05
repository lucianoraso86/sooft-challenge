import { Box, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./phraseCard.module.scss";

interface PhaseCardProps {
  text: string;
  onDelete: () => void;
}

const PhraseCard = ({ text, onDelete }: PhaseCardProps) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className={styles.card}>
        <CardContent>
          <Typography variant="h6">{text}</Typography>
        </CardContent>

        <CardActions className={styles.cardActions}>
          <IconButton aria-label="delete" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PhraseCard;
