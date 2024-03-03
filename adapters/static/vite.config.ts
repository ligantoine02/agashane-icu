import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
	return {
		build: {
			ssr: true,
			rollupOptions: {
				input: ["@qwik-city-plan"],
			},
		},
		plugins: [
			staticAdapter({
				origin:
					process.env.NODE_ENV === "production"
						? "https://agashane.icu"
						: "http://localhost:5173",
			}),
		],
	};
});
