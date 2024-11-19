/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader'
    })
    
    return config
  },
  experimental: {
    turbo: {
      rules: {
        '*.yaml': {
          loaders: ['yaml-loader'],
          as: '*.js'
        },
        '*.yml': {
          loaders: ['yaml-loader'],
          as: '*.js'
        },
      }
    }
  },
  output: 'export',
  distDir: 'dist'
};

export default nextConfig;
