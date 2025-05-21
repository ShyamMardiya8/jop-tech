import axios from "axios"
import { apiRequest } from "./apiService"


export const GET_EMPLOYEE_DETAILS = async () => {
    try{
        return await apiRequest({
            method : "get",
            endpoint : "/api/employee"
        })
    }
    catch(err : any){
        console.log(err.message)
    }
}


export const POST_EMPLOYEE_DETAILS = async (payload : any) => {
    try{
        return await apiRequest({
            method : "post",
            endpoint : "/api/employee",
            data :  payload
        })
    }
    catch(err : any){
        console.log(err.message)
    }
}


export const UPDATE_EMPLOYEE_DETAILS = async (id : any,payload : any) => {
    try{
        return await apiRequest({
            method : "put",
            endpoint : `/api/employee/${id}`,
            data :  payload
        })
    }
    catch(err : any){
        console.log(err.message)
    }
}

export const DELETE_EMPLOYEE_DETAILS = async (id : any) => {
    try{
        return await apiRequest({
            method : "delete",
            endpoint : `/api/employee/${id}`
        })
    }
    catch(err : any){
        console.log(err.message)
    }
}
