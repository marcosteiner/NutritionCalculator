import { configureStore } from "@reduxjs/toolkit";
import foodStore from "./food.store";

export const store = configureStore({
    reducer: {
        foods: foodStore.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>