import api, { APIResponseSuccess } from "../../common/utils/api.util";
import * as Yup from "yup";
import { authActions } from "../slices/auth.slice";
import { Dispatch } from "@reduxjs/toolkit";

export const postSignupSchema = Yup.object().shape({
	name: Yup.string().required("This is required"),
	email: Yup.string().email("Invalid email").required("This is required"),
	username: Yup.string().required("This is required"),
	password: Yup.string().required("This required"),
	cpassword: Yup.string()
		.required("This is required")
		.oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export type PostSignupSchema = Yup.InferType<typeof postSignupSchema>;

export const postSignupHandler = (payload: PostSignupSchema) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(authActions.setIsSignupLoading(true));

			const response = await api.post<APIResponseSuccess>("/auth/signup", payload);
			return Promise.resolve(response.data);
		} catch (err: any) {
			return Promise.reject(err);
		} finally {
			dispatch(authActions.setIsSignupLoading(false));
		}
	};
};
