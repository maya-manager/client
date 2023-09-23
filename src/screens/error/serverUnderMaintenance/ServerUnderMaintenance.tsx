import { NavigationProp } from "@react-navigation/native";
import { FC } from "react";
import { Image, Text, View } from "react-native";
import { AuthStackParamList } from "../../../App";
import { Heading, Para } from "../../../components/typography/Typography";
import Button from "../../../components/button/Button";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { getHealthCheck } from "../../../store/actions/healthCheck.action";

interface ServerUnderMaintenanceProps {
	navigation: NavigationProp<AuthStackParamList>;
}

const ServerUnderMaintenance: FC<ServerUnderMaintenanceProps> = ({ navigation }) => {
	const dispatch = useAppDispatch();

	const onRefresh = async () => {
		try {
			await dispatch(getHealthCheck());

			navigation.navigate("Welcome");
		} catch (err) {
			return;
		}
	};

	return (
		<View className="items-center">
			<View className="w-auto h-auto mt-10">
				<Image
					source={require("../../../../assets/illustrations/maintenance.jpg")}
					className="w-[80vw] h-[80vw]"
				/>
			</View>
			<View className="px-8">
				<Heading rootClassName="mt-8">Server Under Maintenance</Heading>

				<Para rootClassName="mt-8">
					Sorry but Our server's are currently under maintenance. Please try again later.
				</Para>

				<Button rootClassName="mt-8" onPress={onRefresh}>
					Refresh
				</Button>
			</View>
		</View>
	);
};

export default ServerUnderMaintenance;
