import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import flowbiteReact from "flowbite-react/plugin/vite";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),flowbiteReact()],
   server: {
    port: 3000,
    open: true, // opens in browser on dev start
  },
})