import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { sandwichSlice } from "./sandwichSlice";

export const storeRTK = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        sandwich: sandwichSlice.reducer
    }
});

export type RootState = ReturnType<typeof storeRTK.getState>;