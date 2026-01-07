/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ganti 'dark' dengan warna Deep Space Black (Hitam kebiruan sangat gelap)
        dark: "#030014", 
        // Warna hitam pekat untuk kartu
        card: "#0f172a",
        accent: "#6366f1",
        secondary: "#a855f7",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Tambahkan animasi kustom jika perlu
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}