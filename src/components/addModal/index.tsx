import { Box, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useDispatch, useSelector } from "react-redux";
import { addPhrase } from "@/reduxConfig/slices/phrasesSlice";
import { RootState } from "@/reduxConfig/store";

import AddForm from "@/components/addForm";
import useAlert from "@/hooks/alertProvider/useAlert";

import styled from "./addModal.module.scss";

interface AddModalProps {
  open: boolean;
  onClose: () => void;
}

const AddModal = ({ open, onClose }: AddModalProps) => {
  const dispatch = useDispatch();
  const { setAlert } = useAlert();

  const phrases = useSelector((state: RootState) => state.phrases.data);

  const handleAddPhrase = (newItem: string) => {
    const exists = phrases.find((item) => item.text.toLowerCase() === newItem.toLowerCase());

    if (!exists) {
      dispatch(addPhrase(newItem));
      setAlert("La frase se agregó correctamente", "success");
      onClose();
    } else {
      setAlert("La frase ya existe", "error");
    }
  };

  return (
    <Modal open={open} className={styled.modalContainer}>
      <Box className={styled.modal}>
        <Typography variant="h5" py={2}>
          Agregar frase
        </Typography>

        <Box className={styled.close}>
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <AddForm onAddPhrase={handleAddPhrase} setFocus={open} />
      </Box>
    </Modal>
  );
};
export default AddModal;
