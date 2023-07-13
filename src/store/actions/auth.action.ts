import api, { APIResponseSuccess } from "../../common/utils/api.util";
import { authActions } from "../slices/auth.slice";
import { Dispatch } from "@reduxjs/toolkit";
import { GetVerifyAccountSchema, PostSignupSchema } from "./schemas/auth.schema";

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

export const getVerifyAccountHandler = (payload: GetVerifyAccountSchema) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(authActions.setIsVerifyAccountLoading(true));

			const response = await api.get<APIResponseSuccess>(
				`/auth/verify/${payload.email}/${payload.verification_code}`,
			);

			return Promise.resolve(response.data);
		} catch (err: any) {
			return Promise.reject(err);
		} finally {
			dispatch(authActions.setIsVerifyAccountLoading(false));
		}
	};
};
