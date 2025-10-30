/**
 * PostCSS Configuration
 * Optimizes CSS processing with cssnano for production builds
 */

export default {
  plugins: {
    cssnano:
      process.env.NODE_ENV === 'production'
        ? {
            preset: [
              'default',
              {
                // Preserve CSS custom properties for theming
                reduceIdents: false,
                // Preserve calc() for dynamic values
                calc: false,
                // Merge rules for smaller bundle
                mergeRules: true,
                // Discard comments in production
                discardComments: {
                  removeAll: true,
                },
                // Normalize whitespace
                normalizeWhitespace: true,
                // Minify selectors
                minifySelectors: true,
                // Minify font values
                minifyFontValues: true,
              },
            ],
          }
        : false,
  },
};
