import {request} from "../utils";


export const fetchShowTimes = async (setState) => {
    const response = await request("GET", `/show-times/`)
    if (response.ok) {
        const data = await response.json()
        setState(data)
    }
}