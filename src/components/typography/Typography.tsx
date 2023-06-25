import React, { FC, ReactNode } from "react";
import { Text } from "react-native";

interface HeadingPrimaryProps {
	/**
	 * The title of the heading
	 */
	title: string | ReactNode;

	/**
	 * Additional class names for the heading
	 */
	className?: string;
}

/**
 * The primary heading component
 * @example
 * ```tsx
 * <HeadingPrimary title="Signup" className="mt-5" />
 * ```
 */
export const HeadingPrimary: FC<HeadingPrimaryProps> = ({ title, className }) => {
	return (
		<Text className={`text-lightgrey text-center font-semibold text-2xl ${className}`}>
			{title}
		</Text>
	);
};

interface ParaPrimaryProps {
	/**
	 * The title of the paragraph
	 */
	title: string | ReactNode;

	/**
	 * Additional class names for the paragraph
	 */
	className?: string;
}

export const ParaPrimary: FC<ParaPrimaryProps> = ({ title, className }) => {
	return <Text className={`text-lg tracking-widest font-light ${className}`}>{title}</Text>;
};
