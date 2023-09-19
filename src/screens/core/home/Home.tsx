import { FC } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Hero } from "./components/hero/Hero";

const Home: FC = () => {
	return (
		<>
			<StatusBar backgroundColor="#56BAA770" />
			<SafeAreaView className="bg-[#56BAA770] flex-grow-0" />
			<Hero />
		</>
	);
};

export default Home;
