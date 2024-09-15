import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
	css: {
		postcss: {
			plugins: [tailwindcss()],
		}
	},
	plugins: [react()],
	resolve: {
		alias: {
			"@": "/src",
			"@assets": "/src/assets",
		},
	},
});
