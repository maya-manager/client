import { PayloadAction } from "@reduxjs/toolkit";
import { HealthCheckState } from "../slices/healthCheck.slice";

export const setIsHealthCheckLoadingReducer = (
	state: HealthCheckState,
	action: PayloadAction<boolean>,
) => {
	state.isHealthCheckLoading = action.payload;
};

export const setIsHealthCheckSuccessReducer = (
	state: HealthCheckState,
	action: PayloadAction<boolean>,
) => {
	state.isHealthCheckSuccess = action.payload;
};
