import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules'],
        charset: false
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'PortlandComponentLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `portland-component-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'portland-component-library.css';
          return assetInfo.name;
        },
      },
    },
  },
}); 