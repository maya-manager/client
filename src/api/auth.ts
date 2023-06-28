import api from "./api";
import { IPostSignupSchema } from "./schemas/auth.schema";

export const postSignup = async (payload: IPostSignupSchema) => {
	const response = await api.post("/auth/signup", payload);
	return response.data;
};
