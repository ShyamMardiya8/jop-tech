'use client'

import { Provider } from "react-redux"
import Store from "../lib/store/store"


export function ReduxProvider ({ children } : any) {
    return <Provider store={Store}>{children}</Provider>
}