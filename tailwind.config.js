/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			animation: {
				"gradient-move": "gradientBG 6s ease infinite",
			},
			keyframes: {
				gradientBG: {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
			},
			backgroundSize: {
				"200%": "200% 200%", // Ensure the background is large enough to move
			},
		},
	},
	plugins: [],
};
