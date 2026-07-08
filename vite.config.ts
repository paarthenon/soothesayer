import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
    base: 'https://paarthenon.github.io/soothesayer/',
    plugins: [
        react(),
        tsconfigPaths(),
    ],
})
