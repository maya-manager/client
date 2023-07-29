import api, { APIResponseSuccess } from "../../common/utils/api.util";
import { authActions } from "../slices/auth.slice";
import { Dispatch } from "@reduxjs/toolkit";
import { GetVerifyAccountSchema, PostLoginSchema, PostSignupSchema } from "./schemas/auth.schema";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const postSignupAction = (payload: PostSignupSchema) => {
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

export const getResendVerificationCodeAction = (email: string) => {
	return async () => {
		try {
			const response = await api.get<APIResponseSuccess>(`/auth/verify/${email}/resend`);
			return Promise.resolve(response.data.message);
		} catch (err: any) {
			return Promise.reject(err);
		}
	};
};

export const getVerifyAccountAction = (payload: GetVerifyAccountSchema) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(authActions.setIsVerifyAccountLoading(true));

			const response = await api.get<APIResponseSuccess>(
				`/auth/verify/${payload.email}?vc=${payload.verification_code}`,
			);

			return Promise.resolve(response.data);
		} catch (err: any) {
			return Promise.reject(err);
		} finally {
			dispatch(authActions.setIsVerifyAccountLoading(false));
		}
	};
};

interface PostLoginSuccessResponse extends APIResponseSuccess {
	access_token: string;
	refresh_token: string;
}

export const postLoginAction = (payload: PostLoginSchema) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(authActions.setIsLoginLoading(true));

			const response = await api.post<PostLoginSuccessResponse>("/auth/login", payload);

			// save token to async storage
			await AsyncStorage.setItem("access_token", response.data.access_token);
			await AsyncStorage.setItem("refresh_token", response.data.refresh_token);

			return Promise.resolve(response.data);
		} catch (err) {
			return Promise.reject(err);
		} finally {
			dispatch(authActions.setIsLoginLoading(false));
		}
	};
};
