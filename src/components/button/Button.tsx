import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../App";

interface ButtonPrimaryProps {
	/**
	 * The screen to navigate to
	 */

	to: keyof RootStackParamList;
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
}

/**
 * Primary button
 *
 * @example
 * ```tsx
 * <ButtonPrimary to="Signup" title="Get Started" />
 * ```
 */
const ButtonPrimary: FC<ButtonPrimaryProps> = ({ title, to, rootClassName, textClassName }) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	return (
		<TouchableOpacity
			className={`py-3 px-16 bg-primary rounded-xl mt-20 ${rootClassName}`}
			onPress={() => navigation.navigate(to)}
		>
			<Text className={`text-white text-lg ${textClassName}`}>{title}</Text>
		</TouchableOpacity>
	);
};

export default ButtonPrimary;
