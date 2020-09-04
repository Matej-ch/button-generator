module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.vue'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
