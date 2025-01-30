import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface Phrase {
  id: string;
  text: string;
}

interface PhrasesState {
  data: Phrase[];
}

const initialState: PhrasesState = {
  data: [],
};

const phrasesSlice = createSlice({
  name: "phrases",
  initialState,
  reducers: {
    addPhrase: (state, action: PayloadAction<string>) => {
      state.data.push({
        id: uuidv4(),
        text: action.payload,
      });
    },
    deletePhrase: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addPhrase, deletePhrase } = phrasesSlice.actions;
export default phrasesSlice.reducer;
