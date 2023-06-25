import React, { FC, ReactNode } from "react";
import { Text } from "react-native";

interface IHeadingPrimaryProps {
	/**
	 * The title of the heading
	 */
	title: string | ReactNode;

	/**
	 * Additional class names
	 */
	rootClassName?: string;
}

/**
 * The primary heading component
 *
 * @example
 * ```tsx
 * <HeadingPrimary title="Signup" rootClassName="mt-5" />
 * ```
 */
export const HeadingPrimary: FC<IHeadingPrimaryProps> = ({ title, rootClassName }) => {
	return (
		<Text className={`text-lightgrey text-center font-semibold text-2xl ${rootClassName}`}>
			{title}
		</Text>
	);
};

interface IParaPrimaryProps {
	/**
	 * The title of the paragraph
	 */
	title: string | ReactNode;

	/**
	 * Additional class names
	 */
	rootClassName?: string;
}

/**
 * The primary paragraph component
 *
 * @example
 * ```tsx
 * <ParaPrimary title="Join us now and let us take care of all your stress to manage your money" rootClassName="mt-8" />
 * ```
 */
export const ParaPrimary: FC<IParaPrimaryProps> = ({ title, rootClassName }) => {
	return <Text className={`text-lg tracking-widest font-light ${rootClassName}`}>{title}</Text>;
};
