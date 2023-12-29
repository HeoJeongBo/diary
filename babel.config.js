module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    ['@babel/plugin-proposal-export-namespace-from'],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@screens': './src/screens',
          '@types': './src/types',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@design-system': './src/design-system',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
