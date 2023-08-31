import React, { FC } from "react";
import { Pressable, Text, TextProps } from "react-native";

interface HeadingProps extends TextProps {
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
 * <Heading rootClassName="mt-5">Welcome to maya</Heading>
 * ```
 */
export const Heading: FC<HeadingProps> = ({ children, rootClassName }) => {
	return (
		<Text
			className={`text-lightgrey text-center text-grey font-semibold text-2xl font-motserratSemiBold ${rootClassName}`}
		>
			{children}
		</Text>
	);
};

interface ParaProps extends TextProps {
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
 * <Para rootClassName="mt-8">Join us now and let us take care of all your stress to manage your money</Para>
 * ```
 */
export const Para: FC<ParaProps> = ({ children, rootClassName }) => {
	return (
		<Text
			className={`text-lg text-center tracking-widest font-light font-font-motserratLight ${rootClassName}`}
		>
			{children}
		</Text>
	);
};
