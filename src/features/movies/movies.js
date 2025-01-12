import {request} from "../utils";


export const fetchMovies = async (setState) => {
    const response = await request("GET", `/movies/`)
    if (response.ok) {
        const data = await response.json()
        setState(data)
    }
}

export const fetchMovieById = async (id, setState) => {
    const response = await request("GET", `/movies/${id}`)
    if (response.ok) {
        const data = await response.json()
        setState(data)
    }
}