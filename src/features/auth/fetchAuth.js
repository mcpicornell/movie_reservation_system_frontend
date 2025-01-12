import {request} from "../utils";

export const refreshAccessToken = async (setState) => {
    const body = {
        'refresh': localStorage.getItem('refreshToken')
    }
    const response = await request("POST", "/auth/jwt/refresh/", body)
    if (response.ok) {
        const data = await response.json()
        localStorage.setItem('accessToken', data.access);
    }
    setState(response)
    return response
}

export const loginCreateAccessToken = async (body, setState) => {
    const response = await request(
        "POST",
        `/auth/jwt/create/`,
        body,
        false
    )
    if (response.ok) {
        const data = await response.json()
        localStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);
    }
    setState(response)
}