import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import foodStore from "./food.store";

export const store = configureStore({
    reducer: {
        foods: foodStore.reducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>
