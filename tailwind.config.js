/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']
			},
			fontSize: {
				h1: '2.75rem',
				h2: '2rem',
				h3: '1.75rem',
				h4: '1.25rem',
				body1: '1rem',
				body2: '0.875rem',
				caption: '0.75rem',
				button: '1.125rem',
				label: '1rem'
			},
			fontWeight: {
				h1: '700',
				h2: '700',
				h3: '700',
				h4: '600',
				body1: '400',
				body2: '500',
				label: '600',
				button: '600',
				caption: '500'
			},
			colors: {
				primary: '#c83fa9',
				secondary: '#f3b0dc',
				'light-text-secondary': '#C874B2',
				'dark-text-secondary': '#F5D5E0',
				'light-bg': '#E8ECF4',
				'dark-bg': '#2e0f38',
				'light-text': '#210535',
				'dark-text': '#F7F7F7'
			},
			backgroundImage: {
				'gradient-to-r': 'linear-gradient(to right, #F5D5E0, #C874B2)'
			}
		},
		variants: {
			extend: {
				backgroundImage: ['hover']
			}
		}
	},
	plugins: []
};
