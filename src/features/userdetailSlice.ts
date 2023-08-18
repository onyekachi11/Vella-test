import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState ={
    username: string
    email:string
    address: string
}

const initialState: InitialState ={
    username: '',
    email: '',
    address: '',
}


const userDetailSlice = createSlice({
    name: 'userdetails',
    initialState,
    reducers:{
        setUserDetails: (state,action:PayloadAction<InitialState>) =>{[
            state.username = action.payload.username,
            state.email = action.payload.email,
            state.address = action.payload.address
        ]}
    }
})

export const {setUserDetails} = userDetailSlice.actions
export default userDetailSlice.reducer