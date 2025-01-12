import {refreshAccessToken} from "./auth/fetchAuth";

const methods = ['GET', 'POST', 'PATCH', 'DELETE'];
const apiBaseUrl = process.env.REACT_APP_BACKEND_API_URL;

export const request = async (
    method,
    endpoint,
    body = null,
    includeToken = true
) => {

    if (!methods.includes(method)) {
        throw new Error(`Method ${method} is not allowed`);
    }

    if (!apiBaseUrl) {
        throw new Error('REACT_APP_BACKEND_API_URL is not defined in environment variables');
    }

    const url = `${apiBaseUrl}${endpoint}`;

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (includeToken) {
        options.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
    }

    if (body && (method === 'POST' || method === 'PATCH')) {
        options.body = JSON.stringify(body);
    }

    try {
        let response = await fetch(url, options);
        if (response.status === 401) {
            response = await refreshAccessToken()
            if (response.ok){
                response = await request(method, endpoint, body)
            }
        }
        return response
    } catch (error) {
        console.error('Request failed:', error);
        throw error;
    }
};