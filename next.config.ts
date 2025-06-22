import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
  env:{
    BREVO_API_KEY:"57MGTnwKkrYWP2Jf"

  }
}

export default nextConfig