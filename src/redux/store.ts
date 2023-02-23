import { configureStore } from "@reduxjs/toolkit";
import ParticipantsSlice from "./ParticipantsData/ParticipantsSlice";

const store = configureStore({
  reducer: {
    participiantsData: ParticipantsSlice
  },
  
}) 
export type RootState = ReturnType<typeof store.getState>

export default store;
