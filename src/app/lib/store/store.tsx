import reducer from "@/app/features/reducer/Slice";
import { configureStore } from "@reduxjs/toolkit";


const Store = configureStore({
    reducer : {
        slice : reducer
    }
})
export default Store
export type AppDispatch = typeof Store.dispatch