import axios from "axios";
import constants from "../common/constants";

const api = axios.create({
	baseURL: constants.environment.API_URL,
	timeout: 10000,
});

export default api;
