import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'xs': '475px',
				'2xl': '1400px'
			}
		},
		screens: {
			'xs': '475px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'float-delayed': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-15px)'
					}
				},
				'float-slow-delayed': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-25px)'
					}
				},
				'grid-flow': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(40px)'
					}
				},
				'light-beam': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'light-beam-delayed': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'particles-1': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)',
						opacity: '0.4'
					},
					'25%': {
						transform: 'translateY(-10px) translateX(5px)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'translateY(-20px) translateX(-5px)',
						opacity: '0.6'
					},
					'75%': {
						transform: 'translateY(-10px) translateX(3px)',
						opacity: '0.9'
					}
				},
				'particles-2': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)',
						opacity: '0.3'
					},
					'33%': {
						transform: 'translateY(-15px) translateX(-8px)',
						opacity: '0.7'
					},
					'66%': {
						transform: 'translateY(-25px) translateX(8px)',
						opacity: '0.5'
					}
				},
				'particles-3': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)',
						opacity: '0.5'
					},
					'50%': {
						transform: 'translateY(-18px) translateX(-3px)',
						opacity: '0.8'
					}
				},
				'particles-4': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)',
						opacity: '0.4'
					},
					'25%': {
						transform: 'translateY(-12px) translateX(6px)',
						opacity: '0.7'
					},
					'75%': {
						transform: 'translateY(-22px) translateX(-6px)',
						opacity: '0.6'
					}
				},
				'particles-5': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)',
						opacity: '0.3'
					},
					'40%': {
						transform: 'translateY(-16px) translateX(4px)',
						opacity: '0.8'
					},
					'80%': {
						transform: 'translateY(-28px) translateX(-4px)',
						opacity: '0.5'
					}
				},
				'particles-6': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)',
						opacity: '0.4'
					},
					'30%': {
						transform: 'translateY(-14px) translateX(-7px)',
						opacity: '0.9'
					},
					'70%': {
						transform: 'translateY(-24px) translateX(7px)',
						opacity: '0.6'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'float-delayed': 'float-delayed 8s ease-in-out infinite 2s',
				'float-slow-delayed': 'float-slow-delayed 10s ease-in-out infinite 4s',
				'grid-flow': 'grid-flow 20s linear infinite',
				'light-beam': 'light-beam 3s ease-in-out infinite',
				'light-beam-delayed': 'light-beam-delayed 3s ease-in-out infinite 1.5s',
				'particles-1': 'particles-1 4s ease-in-out infinite',
				'particles-2': 'particles-2 5s ease-in-out infinite 0.5s',
				'particles-3': 'particles-3 6s ease-in-out infinite 1s',
				'particles-4': 'particles-4 7s ease-in-out infinite 1.5s',
				'particles-5': 'particles-5 8s ease-in-out infinite 2s',
				'particles-6': 'particles-6 9s ease-in-out infinite 2.5s'
			},
			backgroundImage: {
				'primary-gradient': 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.8) 100%)',
			},
			boxShadow: {
				'elegant': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			},
			scale: {
				'hover-scale': 'scale(1.05)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
