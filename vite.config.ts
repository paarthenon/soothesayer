import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: 'https://paarthenon.github.io/soothesayer/',
    resolve: {
        tsconfigPaths: true,
    },
    plugins: [
        react(),
    ],
})
