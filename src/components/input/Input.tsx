import { FC } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import constants from "../../common/constants";

interface IInputProps extends TextInputProps {
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

	/**
	 * Error for input
	 */
	error?: string;

	/**
	 * If the input is required. this will only show `*` in the label
	 */
	required?: boolean;
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
	error,
	onChangeText,
	onBlur,
	value,
	required,
	autoCapitalize,
	keyboardType = "default",
}) => {
	return (
		<View className={`w-[100vw] px-8 ${rootClassName}`}>
			<Text className={`${error && "text-accent"} ${labelClassName}`}>
				{label}: {required && "*"}
			</Text>
			<TextInput
				placeholder={placeholder}
				className={`mt-3 border-solid border-lightgrey border-[0.2px] w-full rounded-md px-4 h-16 pb-[6px] text-lg ${
					error && "border-accent"
				} ${inputClassName}`}
				placeholderTextColor={
					error ? constants.colors.accent : constants.colors.placeholders
				}
				onChangeText={onChangeText}
				onBlur={onBlur}
				value={value}
				autoCapitalize={autoCapitalize}
				keyboardType={keyboardType}
			/>
			{error && <Text className="text-accent mt-2">{error}</Text>}
		</View>
	);
};

export default Input;
