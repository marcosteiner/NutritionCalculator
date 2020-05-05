import {createSlice} from "@reduxjs/toolkit";
import Food from "../Models/Food";

const sliceState: Food[] = [
    new Food("Nudeln", 13, 3, 365),
    new Food("Tofu", 15, 1, 175),
    new Food("Beetroot", 1.6, 2.8, 43),
    new Food("Tomate", 1, 2, 18),
    new Food("Brot", 12.5, 3, 359),
    new Food("Hummus", 7,5,307)
]

const foodStore = createSlice({
    name: "foods",
    initialState: sliceState,
    reducers: {
        foods(state, action){
            switch (action.type) {
                case "ADD_FOOD":
                    return [...state,
                        new Food(action.payload.name,
                            action.payload.protein,
                            action.payload.fiber,
                            action.payload.energy)]
                case "REMOVE_FOOD":
                    return [];
                default:
                    return state;
            }
        }
    }
});

export default foodStore;