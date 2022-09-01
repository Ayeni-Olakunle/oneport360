import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0;
const customerSlicer = createSlice({
    name: "customer",
    initialState: {
        value: initialStateValue,
    },
    reducers: {
        positionState: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { positionState } = customerSlicer.actions;
export default customerSlicer.reducer;
