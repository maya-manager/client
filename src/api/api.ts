import axios, { AxiosError, AxiosResponse } from "axios";
import constants from "../common/constants";

export interface IAPIResponseError {
	message: string;
	statusCode: number;
	error: string;
}

const api = axios.create({
	baseURL: constants.environment.API_URL,
	timeout: 10000,
});

api.interceptors.response.use(
	(res: AxiosResponse) => {
		return Promise.resolve(res);
	},
	(err: AxiosError<IAPIResponseError>) => {
		return Promise.reject(err.response.data);
	},
);

export default api;
