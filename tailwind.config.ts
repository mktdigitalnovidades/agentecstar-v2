
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
			screens: { '2xl': '1400px' }
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
				secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
				destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
				muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
				accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
				popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
				card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// ── Paleta AgentecStar ───────────────────────────────────
				'brand-dark':         '#0F172A',
				'brand-slate':        '#1E293B',
				'brand-slate-mid':    '#2D3F55',
				'brand-navy':         '#190C59',
				'brand-purple':       '#542FA3',
				'brand-purple-light': '#7B5FC4',
				'brand-fuchsia':      '#D946EF',
				'brand-cyan':         '#3ECED0',
				'brand-cyan-bright':  '#00E5FF',
				'brand-pink':         '#C55C8A',
				'brand-coral':        '#E47D7F',
				'brand-lavender':     '#C9C1CE',
				// Mantidos para compatibilidade com componentes existentes
				'brand-blue':         '#3ECED0',
				'brand-accent':       '#3ECED0',
				'brand-light-purple': '#7B5FC4',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
				'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-18px)' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(24px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(62,206,208,0.3), 0 0 40px rgba(84,47,163,0.2)' },
					'50%': { boxShadow: '0 0 40px rgba(62,206,208,0.6), 0 0 80px rgba(84,47,163,0.4)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'fade-in': 'fade-in 0.8s ease-out',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'shimmer': 'shimmer 2.5s linear infinite',
				'gradient-shift': 'gradient-shift 4s ease infinite',
			},
			backgroundImage: {
				'gradient-brand':   'linear-gradient(135deg, #0F172A 0%, #190C59 30%, #542FA3 65%, #3ECED0 100%)',
				'gradient-tech':    'linear-gradient(135deg, #1E293B 0%, #2D3F55 50%, #190C59 100%)',
				'gradient-cyber':   'linear-gradient(90deg, #00E5FF 0%, #D946EF 50%, #542FA3 100%)',
				'gradient-glow':    'linear-gradient(135deg, #3ECED0 0%, #542FA3 50%, #D946EF 100%)',
				'gradient-dark':    'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
				'gradient-purple':  'linear-gradient(135deg, #190C59 0%, #542FA3 50%, #3ECED0 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
