import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../App";

interface IButtonPrimaryProps {
	/**
	 * The screen to navigate to
	 */

	to?: keyof RootStackParamList;
	/**
	 * The title of the button
	 */
	title: string;

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
 * <ButtonPrimary to="Signup" title="Get Started" rootClassName="mt-8" textClassName="font-bold" onPress={() => console.log("button pressed")} />
 * ```
 */
const ButtonPrimary: FC<IButtonPrimaryProps> = ({
	title,
	to,
	rootClassName,
	textClassName,
	loading,
	loadingText,
	onPress,
}) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	return (
		<TouchableOpacity
			className={`py-3 px-16 bg-primary shadow-sm shadow-greyLight rounded-xl flex-row justify-between ${rootClassName}`}
			onPress={() => (to ? navigation.navigate(to) : onPress())}
		>
			<Text className={`text-white text-lg ${textClassName}`}>
				{loading ? loadingText : title}{" "}
			</Text>
			{loading && <ActivityIndicator color="#fff" className="ml-2" />}
		</TouchableOpacity>
	);
};

export default ButtonPrimary;
