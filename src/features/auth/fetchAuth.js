import {request} from "../utils";

export const refreshAccessToken = async (setState) => {
    const body = {
        'refresh': localStorage.getItem('refreshToken')
    }
    const response = await request("POST", "/auth/jwt/refresh/", body)
    if(response.ok){
        const data = await response.json()
        localStorage.setItem('accessToken', data.access);
    }
    setState(response)
    return response
}

export const loginCreateAccessToken = async (setState) => {
    const response = await request("POST", `/auth/jwt/create/`)
    if(response.ok){
        const data = await response.json()
        localStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);
    }
    setState(response)
    return response
}