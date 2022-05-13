import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from './store';

interface LocationValue {
  altitude: number;
  latitude: number;
  longitude: number;
  photoUri: string;
}

const initialState : LocationValue = {
  altitude: 0,
  latitude: 0,
  longitude: 0,
  photoUri: "",
} as LocationValue;

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<LocationValue>) => {
      state.altitude = action.payload.altitude;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.photoUri = action.payload.photoUri;
    }
}});

export const { setValue } = locationSlice.actions

export const selectData = (state: RootState) => state.location;

export default locationSlice.reducer;