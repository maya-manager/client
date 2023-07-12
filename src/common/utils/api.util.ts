import axios, { AxiosError, AxiosResponse } from "axios";
import constants from "../constants";

/**
 * Interface for API response error
 */
export interface APIResponseError {
	message: string;
	statusCode: number;
	error: string;
}

/**
 * Interface for API response success
 */
export interface APIResponseSuccess<Data = undefined> {
	message: string;
	statusCode: number;
	data?: Data;
}

const api = axios.create({
	baseURL: constants.environment.API_URL,
	timeout: 10000,
});

api.interceptors.response.use(
	(res: AxiosResponse) => {
		return Promise.resolve(res);
	},
	(err: AxiosError<APIResponseError>) => {
		return Promise.reject(err.response.data);
	},
);

export default api;
