const loadedThemes = new Set();

/**
 * Dynamically loads a theme's CSS. This function relies on the consumer's bundler
 * to handle the dynamic import and inject the stylesheet.
 *
 * @param {string} themeName The name of the theme to load (e.g., 'pgov', 'pgov-dark').
 * @returns {Promise<void>} A promise that resolves when the theme is loaded or rejects on error.
 */
export async function loadTheme(themeName) {
  if (loadedThemes.has(themeName)) {
    return;
  }

  try {
    switch (themeName) {
      case 'pgov':
        await import('./styles/themes/pgov.css');
        break;
      case 'pgov-dark':
        await import('./styles/themes/pgov.css');
        await import('./styles/themes/pgov-dark.css');
        break;
      case 'uswds-default':
        await import('./styles/themes/uswds-default.css');
        break;
      default:
        console.warn(`Theme "${themeName}" not found.`);
        return;
    }
    loadedThemes.add(themeName);
  } catch (error) {
    console.error(`Failed to load theme "${themeName}":`, error);
    throw error;
  }
} 