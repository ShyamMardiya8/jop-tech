import axios, { InternalAxiosRequestConfig } from "axios"
import { config } from "dotenv"

const API_URL = 'http://localhost:5000'

type Method = 'get' | 'post' | 'put' | 'delete'

interface ApiRequestParams {
    method : Method,
    endpoint : string,
    data?: any,
    params?: any
}

interface EmployeeApi {
  endpoint: string
  fileData: Record<string, any>
  additionalFields?: Record<string, any>
  headers?: Record<string, string>

}
export const apiRequest = async ({method, endpoint, data, params} : ApiRequestParams) => {
    try{
        const response = await axios({
            method,
            url : `${API_URL}${endpoint}`,
            data,
            params
        })
        return response.data
    }
    catch(err : any){
        console.log(err.message)
    }
}

const uploadApi = axios.create({
    baseURL : API_URL,
    timeout : 1000
})

uploadApi.interceptors.request.use(
    (config : InternalAxiosRequestConfig) : InternalAxiosRequestConfig => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => Promise.reject(err)
)

uploadApi.interceptors.response.use(
    (response) => response,
    (err) => {
        if (err.response) {
            const {status, data} = err.response
            console.error(`Upload API Error ${status}`, data.message || err.message)
            if (status === 401) {
                console.log("getting error 401")
            }
        }
        return Promise.reject(err)
    }
)

export const uploadRequest = async ({
    endpoint,
    fileData,
    additionalFields = {},
    headers = {}
}: EmployeeApi) => {
    try{
        const formData = new FormData()
        Object.entries(fileData).forEach(([key, value]) => {
        formData.append(key, value)
      })
  
      // Append other fields
      Object.entries(additionalFields).forEach(([key, value]) => {
        formData.append(key, value)
      })
      const response = await uploadApi.post(endpoint, formData, {
          headers:{
              'Content-Type' : 'multipart/form-data',
              ...headers
          }
      })
      return response.data
    }
    catch(err : any) {
        console.log(err.message)
    }
}