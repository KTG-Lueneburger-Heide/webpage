/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader'
    })
    
    return config
  },
  output: 'export',
  distDir: 'dist',
  images: { 
    unoptimized: true 
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: import.meta.dirname
  }
};

export default nextConfig;
