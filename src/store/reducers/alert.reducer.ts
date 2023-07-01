import { PayloadAction } from "@reduxjs/toolkit";
import { IAlertState } from "../slices/alert.slice";

export const setAlertReducer = (state: IAlertState, action: PayloadAction<IAlertState>) => {
	state.message = action.payload.message;
	state.type = action.payload.type;
};

export const clearAlertReducer = (state: IAlertState) => {
	state.message = null;
	state.type = null;
};
