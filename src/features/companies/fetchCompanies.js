import {request} from "../utils";

export const fetchCompanies = async (setState) => {
    const body = null
    const response = await request("GET", "/companies/", body)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}

export const fetchCompanyById = async (id, setState) => {
    const response = await request("GET", `/companies/${id}/`)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}

export const getCompanyByCIF = async (CIF, setState) => {
    const response = await request("GET", `/companies/?CIF=${CIF}`)
    if(response.ok){
        const data = await response.json()
        setState(data[0])
    }
}

export const createCompany = async (body, setState) => {
    const response = await request("POST", `/companies/`, body)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}

export const updateCompany = async (id, body, setState) => {
    const response = await request("PATCH", `/companies/${id}`, body)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}

export const deleteCompany = async (id, setState) => {
    const response = await request("DELETE", `/companies/${id}`)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}