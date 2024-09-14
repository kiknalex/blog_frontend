import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import sonarjs from "eslint-plugin-sonarjs";
import tailwind from "eslint-plugin-tailwindcss";
import perfectionist from "eslint-plugin-perfectionist";
import checkFile from "eslint-plugin-check-file";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginPromise from "eslint-plugin-promise";
import paths from "eslint-plugin-paths";
import reactPlugin from "eslint-plugin-react";
import parser from "@typescript-eslint/parser";
import brettz9 from "@brettz9/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
	{ ignores: ["node_modules", "dist", "src/vite-env.d.ts"] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			sonarjs.configs.recommended,
			...tailwind.configs["flat/recommended"],
			eslintPluginUnicorn.configs["flat/recommended"],
			jsxA11y.flatConfigs.recommended,
			pluginPromise.configs["flat/recommended"],
			perfectionist.configs["recommended-natural"],
			reactPlugin.configs.flat.recommended,
			...brettz9.configs.es6,
			eslintConfigPrettier,
		],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: parser,
			ecmaVersion: 2020,
			...reactPlugin.configs.flat.recommended.languageOptions,
			...jsxA11y.flatConfigs.recommended.languageOptions,

			globals: {
				...globals.browser,
				...globals.builtin,
				...globals.serviceworker,
			},
		},

		plugins: {
			"check-file": checkFile,
			"react-refresh": reactRefresh,
			"react-hooks": reactHooks,
			paths,
		},

		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			"react/jsx-uses-react": "off",
			"react/react-in-jsx-scope": "off",
			"check-file/filename-naming-convention": [
				"error",
				{
					"**/*.{ts,tsx}": "KEBAB_CASE",
				},
				{
					// ignore the middle extensions of the filename to support filename like bable.config.js or smoke.spec.ts
					ignoreMiddleExtensions: true,
				},
			],
			"check-file/folder-naming-convention": [
				"error",
				{
					// all folders within src (except __tests__)should be named in kebab-case
					"src/**/!(__tests__)": "KEBAB_CASE",
				},
			],
			"paths/alias": "error",
		},
	}
);
