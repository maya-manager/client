import { FC } from "react";
import {
	SafeAreaView,
	View,
	Modal as ModalComponent,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
	Pressable,
	GestureResponderEvent,
} from "react-native";
import { Heading } from "../typography/Typography";
import { BlurView } from "expo-blur";

interface ModalProps {
	/**
	 * Will the modal be visible
	 */
	isVisible: boolean;

	/**
	 * Set the visibility of the modal
	 */
	setIsVisible: (isVisible: boolean) => void;

	/**
	 * Heading of the modal
	 */
	heading: string;

	children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isVisible, setIsVisible, heading, children }) => {
	return (
		<ModalComponent
			visible={isVisible}
			onRequestClose={() => setIsVisible(false)}
			transparent
			animationType="slide"
		>
			<SafeAreaView />
			<KeyboardAvoidingView
				className="flex-1"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
					}}
					onScrollEndDrag={(e) =>
						e.nativeEvent.contentOffset.y < -100 && setIsVisible(false)
					}
				>
					<View className="flex-1 justify-end h-full justify-self-end">
						<Pressable className="flex-1" onPress={() => setIsVisible(false)}>
							<View className="max-h-[20%]"></View>
						</Pressable>
						<BlurView
							intensity={100}
							className="min-h-[70%] max-h-full items-center justify-center rounded-2xl backdrop-blur-3xl"
						>
							<View className="p-5 rounded w-[90%]">
								<Heading rootClassName="mb-5">{heading}</Heading>
								<View className="w-full">{children}</View>
							</View>
						</BlurView>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</ModalComponent>
	);
};

export default Modal;
