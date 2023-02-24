import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { PersonalData,  PersonalDataState } from "../../types/types";
import { BASE_URL, DATA_API_GET_BY_ADRESS, GET } from '../../utils/constants';
import { requestFunc } from '../../utils/mainFunction';

const initialState: PersonalDataState = {
  address: '',
  id: '',
  email: '',
  username: '',
  loading: false
}

export const getPersonalData = createAsyncThunk(
  'personalData/getPersonalData',
  async(params:string, thunkApi) => {
    const reqParams = {
      type: GET,
      url: `${BASE_URL}${DATA_API_GET_BY_ADRESS}${params}`
    };
    try{
      const data = await requestFunc(reqParams)
      return data
    }
    catch(error){
      return thunkApi.rejectWithValue(error);
    }
  }
)

export const PersonalDataClice = createSlice({
  name: 'personalData',
  initialState, 
  reducers: {
    putAddress: (state:PersonalDataState, action: PayloadAction<string>) => {
      state.address = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPersonalData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getPersonalData.fulfilled, (state, action: PayloadAction<PersonalData>) => {
      state.address = action.payload.data.address
      state.username = action.payload.data.username
      state.email = action.payload.data.email
      state.id = action.payload.data.id
      state.loading = false
    })
    builder.addCase(getPersonalData.rejected, (state) => {
      state.loading = false
    })
  }
})
export const {
  putAddress
} = PersonalDataClice.actions
export default PersonalDataClice.reducer;
