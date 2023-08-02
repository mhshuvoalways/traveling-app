module.exports = {
  webpack: (config, { isServer }) => {
    // Add file-loader rule for video files
    config.module.rules.push({
      test: /\.(mov|mp4|mkv|avi)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
