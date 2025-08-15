import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'DevCompanion',
      formats: ['es', 'cjs'],
      fileName: format => `dev-companion.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'zustand', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          zustand: 'zustand',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    cssCodeSplit: false,
  },
});
