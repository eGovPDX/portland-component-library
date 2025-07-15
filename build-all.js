import { build } from 'vite';
import { libraryBuilds, themeBuilds, tokensBuild, themeLoaderBuild } from './vite.lib.config.js';
import fs from 'fs';
import { resolve, dirname } from 'path';

(async () => {
  const tempDir = './temp-themes';
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  const cleanupCallbacks = [];

  try {
    // Build the main library
    await build({
      configFile: 'vite.lib.config.js',
    });

    // Build each component
    for (const buildConfig of libraryBuilds) {
      await build(buildConfig);
    }

    // Create temporary JS entry points for themes
    const tempThemeBuilds = themeBuilds.map(themeConfig => {
      const tempEntryPath = resolve(tempDir, `${themeConfig.build.lib.name}.js`);
      const cssImportPath = themeConfig.build.lib.entry;
      fs.writeFileSync(tempEntryPath, `import '${cssImportPath}';`);
      
      cleanupCallbacks.push(() => fs.unlinkSync(tempEntryPath));

      return {
        ...themeConfig,
        build: {
          ...themeConfig.build,
          lib: {
            ...themeConfig.build.lib,
            entry: tempEntryPath,
          }
        }
      };
    });

    // Build each theme
    for (const buildConfig of tempThemeBuilds) {
      await build(buildConfig);
    }

    // Build the tokens
    await build(tokensBuild);

    // Build the theme loader
    await build(themeLoaderBuild);

    console.log('All builds completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  } finally {
    cleanupCallbacks.forEach(cb => cb());
    if (fs.existsSync(tempDir)) {
      fs.rmdirSync(tempDir);
    }
  }
})(); 