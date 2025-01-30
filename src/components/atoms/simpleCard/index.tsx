import { Box, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./styled.module.scss";

interface SimpleCardProps {
  text: string;
  onDelete: () => void;
}

const SimpleCard = ({ text, onDelete }: SimpleCardProps) => {
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

export default SimpleCard;
