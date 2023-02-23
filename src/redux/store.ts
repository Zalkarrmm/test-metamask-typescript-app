import { configureStore } from "@reduxjs/toolkit";
import ParticipantsSlice from "./ParticipantsData/ParticipantsSlice";
import PersonalDataClice from "./PersonalData/PersonalDataClice";

const store = configureStore({
  reducer: {
    participiantsData: ParticipantsSlice,
    personalPage: PersonalDataClice
  },

}) 
export type RootState = ReturnType<typeof store.getState>

export default store;
