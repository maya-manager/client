import { FC } from "react";
import { SafeAreaView, View, Modal as ModalComponent } from "react-native";
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
			className="backdrop-blur-3xl"
		>
			<SafeAreaView />
			<BlurView
				intensity={100}
				className="flex flex-1/2 h-[70%] absolute bottom-0 left-0 right-0 items-center justify-center bg-white/20 rounded-2xl backdrop-blur-1xl"
			>
				<View className="p-5 rounded w-[90%]">
					<Heading rootClassName="mb-5">{heading}</Heading>
					<View>{children}</View>
				</View>
			</BlurView>
		</ModalComponent>
	);
};

export default Modal;
