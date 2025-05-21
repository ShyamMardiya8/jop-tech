import {apiRequest} from './apiService'

export const GET_HIRE_DETAILS = async () => {
    return await apiRequest({
        method: 'get',
        endpoint: '/api/company',
    })
}

export const CREATE_COMPANY = async (payload: any) => {
    return await apiRequest({
        method: 'post',
        endpoint: '/api/company',
        data: payload,
    })
}

export const UPDATE_COMPANY = async (id: string, payload: any) => {
    return await apiRequest({
        method: 'put',
        endpoint: `/company/${id}`,
        data: payload,
    })
}

export const DELETE_COMPANY = async (id: string) => {
    return await apiRequest({
        method: 'delete',
        endpoint: `/company/${id}`,
    })
}
