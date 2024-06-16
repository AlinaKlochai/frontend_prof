import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        minus(state, action:PayloadAction<number>) {  //прописываем типизацию для полезной нагрузки, чтобы ограничить передачу других типов данных
            state.value = state.value - action.payload;
        },
        plus(state, action: PayloadAction<number>) {
            state.value = state.value + action.payload;
        }
    }
})

export const { minus, plus } = counterSlice.actions;
export default counterSlice.reducer;
