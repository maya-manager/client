import { FC } from "react";
import { Text, TextInput, View } from "react-native";
import constants from "../../common/constants";

interface IInputProps {
	/**
	 * Placeholder for the input
	 */
	placeholder: string;

	/**
	 * Label for the input
	 */
	label: string;

	/**
	 * Root class name for the root view
	 */
	rootClassName?: string;

	/**
	 * Class name for the input
	 */
	inputClassName?: string;

	/**
	 * Class name for the label
	 */
	labelClassName?: string;
}

/**
 * Input component
 */
const Input: FC<IInputProps> = ({
	placeholder,
	label,
	rootClassName,
	inputClassName,
	labelClassName,
}) => {
	return (
		<View className={`w-[100vw] px-8 ${rootClassName}`}>
			<Text className={labelClassName}>{label}</Text>
			<TextInput
				placeholder={placeholder}
				className={`mt-3 border-solid border-lightgrey border-[0.2px] w-full rounded-md px-4 h-16 py-0 text-lg ${inputClassName}`}
				placeholderTextColor={constants.colors.placeholders}
			/>
		</View>
	);
};

export default Input;
