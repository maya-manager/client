import { FC, useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import constants from "../../common/constants";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { alertActions } from "../../store/slices/alert.slice";
import { RootState } from "../../store";

export const AlertError: FC = () => {
	const dispatch = useAppDispatch();

	const [isAlertVisible, setIsAlertVisible] = useState(false);
	const { type, message } = useAppSelector((state: RootState) => state.alert);

	useEffect(() => {
		if (type === "error" && message) {
			setIsAlertVisible(true);

			setTimeout(() => {
				hideAlert();
			}, 3000);
		}
	}, [type, message]);

	const hideAlert = () => {
		setIsAlertVisible(false);
		dispatch(alertActions.clearAlert());
	};

	return (
		<View
			className={`items-center z-10 absolute left-0 right-0 mt-4 transition-all duration-300 ${
				isAlertVisible ? "block" : "hidden"
			}`}
			style={{ top: constants.statusBarHeight }}
		>
			<View className="flex-row justify-between items-center w-[80%] px-4 py-2 shadow shadow-black/30 bg-white">
				<View className="border-[1px] border-solid border-danger rounded-full mr-2 h-5 w-5 items-center justify-center">
					<Text className="text-danger">!</Text>
				</View>
				<Text className="w-[60%]">{message}</Text>
				<Pressable onPress={hideAlert}>
					<Text>✕</Text>
				</Pressable>
			</View>
		</View>
	);
};

export const AlertSuccess: FC = () => {
	const dispatch = useAppDispatch();

	const [isAlertVisible, setIsAlertVisible] = useState(false);
	const { type, message } = useAppSelector((state: RootState) => state.alert);

	useEffect(() => {
		if (type === "success" && message) {
			setIsAlertVisible(true);

			setTimeout(() => {
				hideAlert();
			}, 3000);
		}
	}, [type, message]);

	const hideAlert = () => {
		setIsAlertVisible(false);
		dispatch(alertActions.clearAlert());
	};

	return (
		<View
			className={`items-center z-10 absolute left-0 right-0 mt-4 transition-all duration-300 ${
				isAlertVisible ? "block" : "hidden"
			}`}
			style={{ top: constants.statusBarHeight }}
		>
			<View className="flex-row justify-between items-center w-[80%] px-4 py-2 shadow shadow-black/30 bg-white">
				<View className="border-[1px] border-solid border-primary rounded-full mr-2 h-5 w-5 items-center justify-center">
					<Text className="text-primary">✓</Text>
				</View>
				<Text className="w-[60%]">{message}</Text>
				<Pressable onPress={hideAlert}>
					<Text>✕</Text>
				</Pressable>
			</View>
		</View>
	);
};
