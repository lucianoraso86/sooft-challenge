import { FC } from "react";
import { Box, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from './styled.module.css';

interface PhraseCardProps {
  phrase: string;
  onDelete: () => void;
}

const SimpleCard: FC<PhraseCardProps> = ({ phrase, onDelete }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className={styles.card}>
        <CardContent>
          <Typography variant="h6">{phrase}</Typography>
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

export default SimpleCard;
