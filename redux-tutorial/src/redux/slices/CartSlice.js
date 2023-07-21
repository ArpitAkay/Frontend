import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => {
                return item.id !== action.payload.id;
            })
        }
    }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;