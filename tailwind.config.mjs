/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Custom Fonts
			fontFamily: {
				medieval: ['"Uncial Antiqua"', 'serif'], // Add a scary medieval font
				body: ['"Inter"', 'sans-serif'], // Optional fallback for body text
			},

			// Custom Colors
			colors: {
				dark: {
					DEFAULT: '#1a1a1a', // Main dark background
					lighter: '#2c2c2c', // Slightly lighter for contrast
				},
				bone: '#f5f5f5', // Bone-white for text
				crimson: '#a31515', // Crimson red for accents
				gold: '#d4af37', // Gold for highlights
			},

			// Custom Keyframes for Animations
			keyframes: {
				flicker: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
			},

			// Animations
			animation: {
				flicker: 'flicker 1.5s infinite',
			},
		},
	},
	plugins: [],
};
