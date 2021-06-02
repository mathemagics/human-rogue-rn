module.exports = {
  plugins: [
    'module:react-native-dotenv',
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-runtime',
    'import-glob',
    [
      'module-resolver',
      {
        alias: {
          '': './src',
        },
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
