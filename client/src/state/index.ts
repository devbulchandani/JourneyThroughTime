import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

export type RootState = {
    mode: PaletteMode
} 


const initialState : RootState = {
    mode: "dark",
}



export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    }
})

export const {setMode} = authSlice.actions;
export default authSlice.reducer;