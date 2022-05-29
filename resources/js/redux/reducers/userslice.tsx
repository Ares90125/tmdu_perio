import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import store from '../store'

// Define a type for the slice state
interface UserState {
  id:number
  ticketid: string,
  name: string,
  midpass:string,
  info:string|null,
  date:string,
  type:number|null,
  userid:string,
}
interface UsersState{
    value:Array<UserState>
}
// Define the initial state using that type
const initialState: UsersState = {
  value:new Array<UserState>()
}
export const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeusers: (state, action: PayloadAction<[]>) => {
        let array=new Array<UserState>();
        state.value.splice(0);
        for(let i =0;i<action.payload.length;i++){
            state.value.push({
                "id":action.payload[i]["id"],
                "ticketid":action.payload[i]["ticketid"],
                "type":action.payload[i]["type"],
                "name":action.payload[i]["name"],
                "midpass":action.payload[i]["midpassword"],
                "info":action.payload[i]["info"],
                "userid":action.payload[i]["userid"],
                "date":getStringValue(action.payload[i]["created_at"]).split("T")[0]
            });
        }
    }
  },
})
function getStringValue(value: any): string {
    return value.toString();
}
export const { changeusers} = userslice.actions

export default userslice.reducer
