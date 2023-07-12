import { PayloadAction } from "@reduxjs/toolkit";
import { AlertState } from "../slices/alert.slice";

export const setAlertReducer = (state: AlertState, action: PayloadAction<AlertState>) => {
	state.message = action.payload.message;
	state.type = action.payload.type;
};

export const clearAlertReducer = (state: AlertState) => {
	state.message = null;
	state.type = null;
};
