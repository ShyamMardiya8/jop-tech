import {
    CREATE_COMPANY,
    DELETE_COMPANY,
    GET_HIRE_DETAILS,
    UPDATE_COMPANY
} from '@/app/service/api'
import {
    DELETE_EMPLOYEE_DETAILS,
    GET_EMPLOYEE_DETAILS,
    POST_EMPLOYEE_DETAILS,
    UPDATE_EMPLOYEE_DETAILS
} from '@/app/service/employee'
import { createThunk } from '@/app/utility/createThunk'
import { createSlice } from '@reduxjs/toolkit'

// ✅ company API thunks
export const COMPANY_HIRE_DETAILS = createThunk("fetch_company", GET_HIRE_DETAILS)
export const CREATE_COMPANY_HIRE_DETAILS = createThunk("create_company", CREATE_COMPANY)
export const UPDATE_COMPANY_HIRE_DETAILS = createThunk("update_company", async ({ id, payload }: { id: string, payload: any }) => {
    return await UPDATE_COMPANY(id, payload)
})
export const DELETE_COMPANY_HIRE_DETAILS = createThunk("delete_company", DELETE_COMPANY)

// ✅ employee API thunks
export const EMPLOYEE_DETAILS = createThunk("fetch_employee", GET_EMPLOYEE_DETAILS)
export const CREATE_EMPLOYEE = createThunk("create_employee", POST_EMPLOYEE_DETAILS)
export const UPDATE_EMPLOYEE = createThunk("update_employee", async ({ id, payload }: { id: string, payload: any }) => {
    return await UPDATE_EMPLOYEE_DETAILS(id, payload)
})
export const DELETE_EMPLOYEE = createThunk("delete_employee", DELETE_EMPLOYEE_DETAILS)

// ✅ state init
const init: {
    data: any[],
    error: boolean,
    loading: boolean
} = {
    data: [],
    error: false,
    loading: false
}

const Slice = createSlice({
    name: "data",
    initialState: init,
    reducers: {},
    extraReducers: (builder) => {
        // --------- COMPANY ---------
        builder.addCase(COMPANY_HIRE_DETAILS.pending, (state) => {
            state.loading = true
            state.error = false
        })
        builder.addCase(COMPANY_HIRE_DETAILS.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(COMPANY_HIRE_DETAILS.rejected, (state) => {
            state.loading = false
            state.error = true
        })

        builder.addCase(CREATE_COMPANY_HIRE_DETAILS.pending, (state) => {
            state.loading = true
        })
        builder.addCase(CREATE_COMPANY_HIRE_DETAILS.fulfilled, (state, action) => {
            state.loading = false
            state.data.push(action.payload)
        })
        builder.addCase(CREATE_COMPANY_HIRE_DETAILS.rejected, (state) => {
            state.loading = false
            state.error = true
        })

        builder.addCase(UPDATE_COMPANY_HIRE_DETAILS.pending, (state) => {
            state.loading = true
        })
        builder.addCase(UPDATE_COMPANY_HIRE_DETAILS.fulfilled, (state, action) => {
            state.loading = false
            state.data = state.data.map(item =>
                item._id === action.payload._id ? action.payload : item
            )
        })
        builder.addCase(UPDATE_COMPANY_HIRE_DETAILS.rejected, (state) => {
            state.loading = false
            state.error = true
        })

        builder.addCase(DELETE_COMPANY_HIRE_DETAILS.pending, (state) => {
            state.loading = true
        })
        builder.addCase(DELETE_COMPANY_HIRE_DETAILS.fulfilled, (state, action) => {
            state.loading = false
            state.data = state.data.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(DELETE_COMPANY_HIRE_DETAILS.rejected, (state) => {
            state.loading = false
            state.error = true
        })

        // --------- EMPLOYEE ---------
        builder.addCase(EMPLOYEE_DETAILS.pending, (state) => {
            state.loading = true
        })
        builder.addCase(EMPLOYEE_DETAILS.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(EMPLOYEE_DETAILS.rejected, (state) => {
            state.loading = false
            state.error = true
        })

        builder.addCase(CREATE_EMPLOYEE.pending, (state) => {
            state.loading = true
        })
        builder.addCase(CREATE_EMPLOYEE.fulfilled, (state, action) => {
            state.loading = false
            state.data.push(action.payload)
        })
        builder.addCase(CREATE_EMPLOYEE.rejected, (state) => {
            state.loading = false
            state.error = true
        })

        builder.addCase(UPDATE_EMPLOYEE.pending, (state) => {
            state.loading = true
        })
        builder.addCase(UPDATE_EMPLOYEE.fulfilled, (state, action) => {
            state.loading = false
            state.data = state.data.map(item =>
                item._id === action.payload._id ? action.payload : item
            )
        })
        builder.addCase(UPDATE_EMPLOYEE.rejected, (state) => {
            state.loading = false
            state.error = true
        })

        builder.addCase(DELETE_EMPLOYEE.pending, (state) => {
            state.loading = true
        })
        builder.addCase(DELETE_EMPLOYEE.fulfilled, (state, action) => {
            state.loading = false
            state.data = state.data.filter(item => item._id !== action.payload._id)
        })
        builder.addCase(DELETE_EMPLOYEE.rejected, (state) => {
            state.loading = false
            state.error = true
        })
    }
})

export default Slice.reducer
