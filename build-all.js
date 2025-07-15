import { build } from 'vite';
import { libraryBuilds } from './vite.lib.config.js';

(async () => {
  try {
    // Build the main library
    await build({
      configFile: 'vite.lib.config.js',
    });

    // Build each component
    for (const buildConfig of libraryBuilds) {
      await build(buildConfig);
    }

    console.log('All builds completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
})(); 