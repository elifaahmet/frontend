const getRandomNumber = (n = 2) => Math.floor(Math.random() * n);
const genRandomChars = (n = 10) => {
  const letterStart = [65, 97];
  return Array(n)
    .fill()
    .map(() =>
      String.fromCharCode(getRandomNumber(26) + letterStart[getRandomNumber()])
    )
    .join('');
};

module.exports = (config, context) => {
  return {
    ...config,
    node: { global: true },
    output: {
      ...config.output,
      chunkLoadingGlobal: `webpackJsonP_${genRandomChars()}`,
    },
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: require.resolve('url-loader'),
          exclude: /node_modules/,
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      ],
    },
  };
};
