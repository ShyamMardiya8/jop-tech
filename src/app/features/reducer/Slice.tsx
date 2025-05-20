import { GET_HIRE_DETAILS } from '@/app/service/api'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const COMPANY_HIRE_DETAILS = createAsyncThunk("fetch_company", async () => {
    try{
        const response = await GET_HIRE_DETAILS()
        return response
    }
    catch(err : any){
        console.log(err.message)
    }
})


const init = {
    data : [],
    error : false,
    loading : false
}

const Slice = createSlice({
    name : "slice",
    initialState : init,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(COMPANY_HIRE_DETAILS.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(COMPANY_HIRE_DETAILS.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(COMPANY_HIRE_DETAILS.rejected, (state, action) => {
            state.error = true
        })
    }
})

export default Slice.reducer