import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { RootStackParamList } from "../../App";

interface ButtonProps extends TouchableOpacityProps {
	/**
	 * The screen to navigate to
	 */

	to?: keyof RootStackParamList;

	/**
	 * The type of button
	 */
	type?: "contained" | "link";

	/**
	 * Additional class names for the root background element
	 */
	rootClassName?: string;

	/**
	 * Additional class names for the text element
	 */
	textClassName?: string;

	/**
	 * Shows a loading indicator if true
	 */
	loading?: boolean;

	/**
	 * The text to show when loading is true
	 */
	loadingText?: string;

	/**
	 * The function to call when the button is pressed
	 */
	onPress?: () => void;
}

/**
 * Primary button
 *
 * @example
 * ```tsx
 * <Button to="Signup" rootClassName="mt-8" textClassName="font-bold" onPress={() => console.log("button pressed")}>Get Started</Button>
 * ```
 */
const Button: FC<ButtonProps> = ({
	children,
	type = "contained",
	to,
	rootClassName,
	textClassName,
	loading,
	loadingText,
	onPress,
}) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	return (
		<>
			{type === "contained" && (
				<TouchableOpacity
					className={`py-3 px-16 bg-primary shadow-sm shadow-greyLight rounded-xl flex-row text-center items-center ${
						loading ? "justify-between" : "justify-center"
					} ${rootClassName}`}
					onPress={() => (to ? navigation.navigate(to) : onPress())}
				>
					<Text
						className={`text-white text-lg text-center items-center ${textClassName}`}
					>
						{loading ? loadingText : children}{" "}
					</Text>
					{loading && <ActivityIndicator color="#fff" className="ml-2" />}
				</TouchableOpacity>
			)}

			{type === "link" && (
				<TouchableOpacity
					className={`items-center flex-row ${
						loading ? "justify-between" : "justify-center"
					}`}
					onPress={() => (to ? navigation.navigate(to) : onPress())}
				>
					<Text
						className={`text-primary text-lg underline font-semibold ${textClassName}`}
					>
						{loading ? loadingText : children}
					</Text>

					{loading && <ActivityIndicator color="#56BAA7" className="ml-2" />}
				</TouchableOpacity>
			)}
		</>
	);
};

export default Button;
