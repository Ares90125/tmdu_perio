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
  created_at:string,
  updated_at:string
}
interface UsersState{
    value:Array<UserState>
}
interface Program{
    index:number;
    value:number;
}
// Define the initial state using that type
const initialState: UsersState = {
  value:new Array<UserState>()
}
export const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeprogram:(state, action: PayloadAction<Program>)=>{
        state.value[action.payload.index].type=action.payload.value;
    },
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
                "created_at":action.payload[i]["created_at"],
                "updated_at":action.payload[i]["updated_at"],
                "date":getStringValue(action.payload[i]["created_at"]).split("T")[0]
            });
        }
    }
  },
})
function getStringValue(value: any): string {
    return value.toString();
}
export const { changeusers, changeprogram} = userslice.actions

export default userslice.reducer
