import { request } from '../utils';

export const fetchMyUser = async (setState) => {
    const response = await request("GET", `/auth/users/me/`)
    if (response.ok) {
        const data = await response.json()
        setState(data)
    }
}

export const createUser = async (body, setState, setResponse) => {
    try {
        const response = await request("POST", `/auth/users/`, body)
        const data = await response.json()
        setState(data)
    } catch (error) {
        setResponse(error)
    }
}