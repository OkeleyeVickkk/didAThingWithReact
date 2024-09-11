const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
	theme: {
		extend: {
			screens: {
				xs: "max-width: 450px",
			},
		},
	},
	plugins: [flowbite.plugin()],
};
