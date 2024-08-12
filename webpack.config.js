const path = require('path');

module.exports = {
  entry: './assets/js/main.js', // Update this path as needed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'nice-admin/static/js'), // Update this path as needed
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '../img/[hash][ext][query]'
        }
      },
    ],
  },
  resolve: {
    alias: {
      apexcharts: path.resolve(__dirname, 'node_modules/apexcharts'),
      bootstrap: path.resolve(__dirname, 'node_modules/bootstrap'),
      'bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons'),
      boxicons: path.resolve(__dirname, 'node_modules/boxicons'),
      'chart.js': path.resolve(__dirname, 'node_modules/chart.js'),
      echarts: path.resolve(__dirname, 'node_modules/echarts'),
      quill: path.resolve(__dirname, 'node_modules/quill'),
      remixicon: path.resolve(__dirname, 'node_modules/remixicon'),
      'simple-datatables': path.resolve(__dirname, 'node_modules/simple-datatables'),
      tinymce: path.resolve(__dirname, 'node_modules/tinymce')
    }
  }
};
