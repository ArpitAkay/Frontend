import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
    SUCCESS: "success",
    ERROR: "Error",
    LOADING: "Loading"
})


const ProductSlice = createSlice({
    name: "Product",
    initialState: {
        data: [],
        status: STATUS.SUCCESS,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});

export const {setProducts, setStatus} = ProductSlice.actions;
export default ProductSlice.reducer;

// middleware
export function fetchProducts() {
    return async function fetchProductsThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));

        try {
            let res = await fetch("https://fakestoreapi.com/products");
            let data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUS.SUCCESS));
        } catch(error) {
            console.log(error);
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}
