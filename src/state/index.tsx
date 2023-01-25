import { createSlice } from "@reduxjs/toolkit";

//Data I want to keep track of everywhere
const initialState = {
    mode: "dark"
};

//Add Data and ways to change it
export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    }
})

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;