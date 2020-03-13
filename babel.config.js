module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          assets: './assets',
          resources: './resources',
          store: ['./src/store'],
          managers: ["./src/managers"],
          screens: ["./src/screens"],
          entities: ["./src/entities"]
        },
      },
    ],
  ],
};
