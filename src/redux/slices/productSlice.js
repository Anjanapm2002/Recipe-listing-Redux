import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk("products/fetchProducts", async ()=>{
    const result = await axios.get("https://dummyjson.com/recipes")
    // console.log(result.data.recipes);
    sessionStorage.setItem("allProducts",JSON.stringify(result.data.recipes))
    return result.data.recipes
})  

const productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dummyAllProucts:[],
        loading:false,
        errorMsg:""
    },
    reducers:{
        searchProducts:(state,actionByHeader)=>{
            state.allProducts = state.dummyAllProucts.filter(item=>item.cuisine.toLowerCase().includes(actionByHeader.payload))
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts = apiResult.payload
            state.dummyAllProucts = apiResult.payload
            state.loading = false
            state.errorMsg = ""
        })
        builder.addCase(fetchProducts.pending,(state)=>{
            state.allProducts = []
            state.dummyAllProucts = []
            state.loading = true
            state.errorMsg = ""
        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.allProducts = []
            state.dummyAllProucts = []
            state.loading = false
            state.errorMsg = "API Call Failed"
        })
    }
})
export const {searchProducts}= productSlice.actions
export default productSlice.reducer
