import createExpoWebpackConfigAsync from "@expo/webpack-config/webpack";
import { Arguments, Environment } from "@expo/webpack-config/webpack/types";

module.exports = async function (env, argv) {
	const config = await createExpoWebpackConfigAsync(
		{
			...env,
			babel: {
				dangerouslyAddModulePathsToTranspile: ["nativewind"],
			},
		},
		argv,
	);

	config.module.rules.push({
		test: /\.css$/i,
		use: ["postcss-loader"],
	});

	return config;
};
