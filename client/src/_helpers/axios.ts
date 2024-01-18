import axios, { AxiosResponse, AxiosError } from 'axios';

interface ApiResponse<T> {
    data: T | null;
    error?: string;
}

const headers = {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
    // 'Access-Control-Allow-Origin': '*',
    // 'Content-Type': 'application/json',
   // 'Authorization': key,
    withCredentials: true,
    mode: 'no-cors',
};

const handleError = (error: AxiosError) => {
    if (error.response) {
        // The request was made, and the server responded with a status code
        // that falls out of the range of 2xx
        return {
            error: `Request failed with status code ${error.response.status}`,
        };
    } else if (error.request) {
        // The request was made but no response was received
        return {
            error: 'No response received from the server',
        };
    } else {
        // Something happened in setting up the request that triggered an Error
        return {
            error: error.message,
        };
    }
};

const handleSuccess = <T>(response: AxiosResponse<T>): ApiResponse<T> => {
    return {
        data: response.data,
    };
};

export const apiGet = async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
        const response = await axios.get<T>(url, { headers,  });
        return handleSuccess(response);
    } catch (error: any) {
        return {
            data: null,
            error: `Error occurred in GET request, ${handleError(error)?.error}`
        };
    }
};