import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { ClientData, ParticipantsData, ParticipantsState } from "../../types/types";
import { BASE_URL, DATA_API_GET, GET } from '../../utils/constants';
import { requestFunc } from '../../utils/mainFunction';

const initialState: ParticipantsState = {
  participants: [],
  loading: false,
  user: {
    address: '',
    id: '',
    email: '',
    username: ''
  }
}

export const getPatricipants = createAsyncThunk(
  'participants/getPatricipants',
  async(params, thunkApi) => {
    const reqParams = {
      type: GET,
      url: `${BASE_URL}${DATA_API_GET}?page=0&perPage=50`
    };
    try{
      return await requestFunc(reqParams)
    }
    catch(error){
      return thunkApi.rejectWithValue(error);
    }
  }
)

export const ParticipantsSlice = createSlice({
  name: 'participants',
  initialState, 
  reducers: {
    changeAddressState: (state:ParticipantsState , action: PayloadAction<string>) => {
      state.user.address = action.payload
    },
    setUserInfo: (state:ParticipantsState, action:PayloadAction<ClientData>) => {
      state.user.address = action.payload.address
      state.user.id = action.payload.id // вообще бэк генерит id но в моем случае я делаю локальное добавление и просто постарюсь чет уникальное сделать
      state.user.email = action.payload.email
      state.user.username = action.payload.username
    },
    setParticipant: (state:ParticipantsState, action:PayloadAction<ClientData>) => {
      
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPatricipants.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getPatricipants.fulfilled, (state, action: PayloadAction<ParticipantsData>) => {
      state.participants = action.payload.data.items
      state.loading = false
    })
    builder.addCase(getPatricipants.rejected, (state) => {
      state.loading = false
    })
  }
})
export const {
  changeAddressState,
  setUserInfo,
  setParticipant
} = ParticipantsSlice.actions
export default ParticipantsSlice.reducer;
