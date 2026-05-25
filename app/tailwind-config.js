// Shared Tailwind theme tokens for Sehha
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        mint: {
          50:  '#F1F9F4',
          100: '#E2F2E7',
          200: '#C7E6D2',
          300: '#9CD2B2',
          400: '#6FBE8E',
          500: '#4DA876',
          600: '#3A8C61',
          700: '#2D6F4D',
          800: '#1F4F37',
          900: '#143324',
        },
        ink: {
          900: '#0F1A14',
          800: '#1A2620',
          700: '#2E3A33',
          600: '#4A5852',
          500: '#6B7770',
          400: '#94A09A',
          300: '#C2CAC6',
          200: '#E2E7E4',
          100: '#EEF2F0',
          50:  '#F7F9F8',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 26, 20, 0.04), 0 1px 1px rgba(15, 26, 20, 0.02)',
        pop:  '0 8px 24px rgba(15, 26, 20, 0.08)',
      },
      borderRadius: { 'xl2': '14px' }
    }
  }
};
