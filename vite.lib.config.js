import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Find all component index.js files and prepare entries
const componentFiles = glob.sync('src/components/**/index.js', {
  cwd: __dirname,
  ignore: ['src/components/index.js', 'src/components/**/components/index.js'],
});

const componentEntries = componentFiles.map((file) => {
  const componentName = basename(dirname(file));
  return {
    name: componentName,
    path: resolve(__dirname, file),
  };
});

const themeFiles = glob.sync('src/styles/themes/*.css', {
  cwd: __dirname,
});

const themeEntries = themeFiles.map((file) => {
  const themeName = basename(file, '.css');
  return {
    name: themeName,
    path: resolve(__dirname, file),
  };
});

const baseConfig = {
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules'],
        charset: false,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
};

export const libraryBuilds = componentEntries.map(({ name, path }) => ({
  ...baseConfig,
  build: {
    ...baseConfig.build,
    lib: {
      entry: path,
      name: name,
      fileName: `components/${name}/index`,
      formats: ['es'],
    },
    rollupOptions: {
      ...baseConfig.build.rollupOptions,
      output: {
        ...baseConfig.build.rollupOptions.output,
        assetFileNames: `components/${name}/style.css`,
      },
    },
  },
}));

export const themeBuilds = themeEntries.map(({ name, path }) => ({
  ...baseConfig,
  build: {
    ...baseConfig.build,
    lib: {
      entry: path,
      name: name,
      fileName: `themes/${name}`,
      formats: ['es'],
    },
    rollupOptions: {
      ...baseConfig.build.rollupOptions,
      output: {
        ...baseConfig.build.rollupOptions.output,
        assetFileNames: `themes/${name}.css`,
      },
    },
  },
}));

export const themeLoaderBuild = {
  ...baseConfig,
  build: {
    ...baseConfig.build,
    lib: {
      entry: resolve(__dirname, 'src/themeLoader.js'),
      name: 'themeLoader',
      fileName: 'themeLoader',
      formats: ['es'],
    },
  },
};

export const tokensBuild = {
  ...baseConfig,
  build: {
    ...baseConfig.build,
    lib: {
      entry: resolve(__dirname, 'src/tokens.js'),
      name: 'tokens',
      fileName: 'tokens',
      formats: ['es'],
    },
  },
};

const mainBuild = {
  ...baseConfig,
  build: {
    ...baseConfig.build,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'PortlandComponentLibrary',
      fileName: 'portland-component-library',
      formats: ['es'],
    },
    rollupOptions: {
      ...baseConfig.build.rollupOptions,
      output: {
        ...baseConfig.build.rollupOptions.output,
        assetFileNames: 'style.css',
      },
    },
  },
};

export default defineConfig(mainBuild); 