module.exports = {
  presets: [
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset',
  ],
  plugins: ['transform-inline-environment-variables', 'babel-plugin-macros'],
};
