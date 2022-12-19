import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProfucts = createAsyncThunk("productsSlice/fetchProfucts",
    async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
    }
)


const productsSlice = createSlice({
    initialState: [],
    name: 'productsSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProfucts.fulfilled, (state, action)=> {
            return action.payload;
        })
    }
})


export const { } = productsSlice.actions ;

export default productsSlice.reducer;