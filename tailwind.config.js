module.exports = {
  purge: {
    enabled: false,
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
