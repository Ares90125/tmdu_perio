import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface CounterState {
  admin: boolean,
  client:boolean
}

// Define the initial state using that type
const initialState: CounterState = {
  admin: false,
  client:false
}

export const authenticationSlide = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setadmin: (state,action: PayloadAction<boolean>) => {
      state.admin=action.payload;
    },
    setclient: (state,action: PayloadAction<boolean>) => {
        state.client=action.payload;
      },
  },
})

export const { setadmin, setclient} = authenticationSlide.actions

export default authenticationSlide.reducer
