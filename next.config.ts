import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  distDir: 'dist',
  sassOptions: {
    additionalData: `$var: red;`,
  },
}

export default nextConfig