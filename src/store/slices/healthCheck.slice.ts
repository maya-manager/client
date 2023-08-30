import { createSlice } from "@reduxjs/toolkit";
import {
	setIsHealthCheckLoadingReducer,
	setIsHealthCheckSuccessReducer,
} from "../reducers/healthCheck.reducer";

export interface HealthCheckState {
	isHealthCheckLoading: boolean;
	isHealthCheckSuccess: boolean;
}

const initialState = {
	isHealthCheckLoading: false,
	isHealthCheckSuccess: false,
};

const healthCheckSlice = createSlice({
	name: "healthCheck",
	initialState,
	reducers: {
		setIsHealthCheckLoading: setIsHealthCheckLoadingReducer,
		setIsHealthCheckSuccess: setIsHealthCheckSuccessReducer,
	},
});

export const healthCheckActions = healthCheckSlice.actions;
export default healthCheckSlice.reducer;
