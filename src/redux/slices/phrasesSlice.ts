import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PhrasesState {
  data: string[];
}

const initialState: PhrasesState = {
  data: [],
};

const phrasesSlice = createSlice({
  name: "phrases",
  initialState,
  reducers: {
    addPhrase: (state, action: PayloadAction<string>) => {
      state.data.push(action.payload);
    },
    deletePhrase: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((item, pos) => pos !== action.payload)
      //state.phrases.splice(action.payload, 1);
    },
  },
});

export const { addPhrase, deletePhrase } = phrasesSlice.actions;
export default phrasesSlice.reducer;
