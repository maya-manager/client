import api, { APIResponseSuccess } from "../../common/utils/api.util";
import { authActions } from "../slices/auth.slice";
import { Dispatch } from "@reduxjs/toolkit";
import {
	GetForgotPasswordSchema,
	GetVerifyAccountSchema,
	PostLoginSchema,
	PostResetPasswordSchema,
	PostSignupSchema,
} from "./schemas/auth.schema";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector } from "../../hooks/useAppSelector";
import store, { RootState } from "..";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const postSignupAction = (payload: PostSignupSchema) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(authActions.setIsSignupLoading(true));

			const response = await api.post<APIResponseSuccess>("/auth/signup", payload);

			dispatch(
				authActions.setSignupCredentials({
					email: payload.email,
					password: payload.password,
				}),
			);
			return Promise.resolve(response.data);
		} catch (err: any) {
			return Promise.reject(err);
		} finally {
			dispatch(authActions.setIsSignupLoading(false));
		}
	};
};

export const getResendVerificationCodeAction = (email: string) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(authActions.setIsResendVerificationCodeLoading(true));

			const response = await api.get<APIResponseSuccess>(`/auth/verify/${email}/resend`);

			return Promise.resolve(response.data.message);
		} catch (err: any) {
			return Promise.reject(err);
		} finally {
			dispatch(authActions.setIsResendVerificationCodeLoading(false));
		}
	};
};

export const getVerifyAccountAction = (payload: GetVerifyAccountSchema) => {
	// can I use useSelector here

	return async (dispatch: Dispatch) => {
		try {
			dispatch(authActions.setIsVerifyAccountLoading(true));

			const response = await api.get<APIResponseSuccess>(
				`/auth/verify/${payload.email}?vc=${payload.verification_code}`,
			);

			// auto login
			const { signupCredentials } = store.getState().auth;

			if (payload.email === signupCredentials.email) {
				await store.dispatch(
					postLoginAction({
						email_username: signupCredentials.email,
						password: signupCredentials.password,
					}),
				);
			}

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

export const getForgotPasswordAction = (payload: GetForgotPasswordSchema) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(authActions.setIsForgotPasswordLoading(true));

			const response = await api.get<APIResponseSuccess>(
				`/auth/forgot-password/${payload.email}`,
			);

			return Promise.resolve(response.data);
		} catch (err) {
			return Promise.reject(err);
		} finally {
			dispatch(authActions.setIsForgotPasswordLoading(false));
		}
	};
};

export const postResetPasswordAction = (email: string, payload: PostResetPasswordSchema) => {
	return (dispatch: Dispatch) => {
		try {
			dispatch(authActions.setIsResetPasswordLoading(true));

			const response = api.post<APIResponseSuccess>(`/auth/reset-password/${email}`, payload);

			return Promise.resolve(response);
		} catch (err) {
			return Promise.reject(err);
		} finally {
			dispatch(authActions.setIsResetPasswordLoading(false));
		}
	};
};
