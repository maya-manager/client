import { Dispatch } from "@reduxjs/toolkit";
import { healthCheckActions } from "../slices/healthCheck.slice";
import api, { APIResponseSuccess } from "../../common/utils/api.util";

export const getHealthCheck = () => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(healthCheckActions.setIsHealthCheckLoading(true));

			await api.get<APIResponseSuccess>("/health");

			dispatch(healthCheckActions.setIsHealthCheckSuccess(true));

			return Promise.resolve();
		} catch (err) {
			dispatch(healthCheckActions.setIsHealthCheckSuccess(false));

			return Promise.reject();
		} finally {
			dispatch(healthCheckActions.setIsHealthCheckLoading(false));
		}
	};
};
