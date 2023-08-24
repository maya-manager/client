import { FC } from "react";
import { SafeAreaView, View, Modal as ModalComponent } from "react-native";
import { Heading } from "../typography/Typography";

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
		<ModalComponent visible={isVisible} onRequestClose={() => setIsVisible(false)} transparent>
			<SafeAreaView className="bg-grey/40" />
			<View className="flex flex-1 h-full items-center justify-center bg-grey/40">
				<View className="bg-white p-5 rounded w-[90%]">
					<Heading rootClassName="mb-5">{heading}</Heading>
					<View>{children}</View>
				</View>
			</View>
		</ModalComponent>
	);
};

export default Modal;
