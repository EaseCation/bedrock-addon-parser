const path = require('path');

module.exports = {
  entry: './src/typescript/index.ts',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'AddonBridgeRuntime',
      type: 'var',
      export: 'default'
    },
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  mode: 'production',

  optimization: {
    // 保持可读性，便于调试
    minimize: false
  },

  devtool: 'source-map',

  target: 'node'
};
