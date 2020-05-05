import { createSlice } from "@reduxjs/toolkit";
import Food from "../Models/Food";

const sliceState: Food[] = [];

const foodStore = createSlice({
    name: 'foods',
    initialState: sliceState,
    reducers: {
        addFood(state, { payload }) {
            state.push(payload);
        },
   }
});

export default foodStore;
