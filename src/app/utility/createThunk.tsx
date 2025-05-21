import { createAsyncThunk } from '@reduxjs/toolkit'

export const createThunk = <Returned, ThunkArg = void>(
    typePrefix: string,
    asyncFunc: (arg: ThunkArg) => Promise<Returned>
) => {
    return createAsyncThunk<Returned, ThunkArg>(
        typePrefix,
        async (arg, thunkAPI) => {
            try {
                return await asyncFunc(arg)
            } catch (error: any) {
                console.error(`Thunk ${typePrefix} failed:`, error.message)
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    )
}
