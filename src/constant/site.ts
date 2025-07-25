import type { Metadata } from 'next'

const METADATA: Metadata = {
  title: 'Scoop Investment | Equity Research & Unlisted Shares',
  description:
    'SEBI-registered research analyst providing deep fundamental research on midcap, smallcap & microcap companies. Specialized in unlisted shares, pre-IPO advisory, and equity research.',
  metadataBase: new URL('https://www.scoopinvestment.com'),
  keywords: [
    'Scoop Investment',
    'Chirag Jain CFA',
    'Equity Research',
    'SEBI Registered Analyst',
    'Unlisted Shares',
    'Pre-IPO',
    'Smallcap Stocks',
    'Microcap Investment',
    'Long-term Investing',
    'Surat Financial Services',
    'Investment Advisory India',
  ],
  openGraph: {
    title: 'Scoop Investment | SEBI Registered Equity Research',
    description:
      'Equity research service focused on high-conviction, long-term investments in microcap, smallcap, and midcap companies. Led by SEBI registered analyst Chirag Jain.',
    url: 'https://www.scoopinvestment.com',
    siteName: 'Scoop Investment',
    images: [
      {
        url: 'https://www.scoopinvestment.com/images/scoop-investment-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Scoop Investment Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scoop Investment | SEBI Registered Equity Research',
    description:
      'Led by Chirag Jain, CFA, Scoop Investment offers deep-dive research in midcap, smallcap, and microcap stocks with focus on unlisted equity and structural plays.',
    site: '@scoopinvestment',
    images: ['https://www.scoopinvestment.com/images/scoop-investment-logo.jpg'],
  },
  authors: [{ name: 'Chirag Jain', url: 'https://www.linkedin.com/in/chiragjain-cfa' }],
  creator: 'Scoop Investment',
  publisher: 'Scoop Investment',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.scoopinvestment.com',
  },
}

const NAVIGATION_LINKS = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Posts',
    link: '/posts',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Services',
    link: '/services',
  },
  {
    title: 'Reports',
    link: '/reports',
  },

  {
    title: 'Contact',
    link: '/contact',
  },
]

const OTHER_LINKS = [
  {
    title: 'Privacy Policy',
    link: '/privacy-policy',
  },
  {
    title: 'Terms of Service',
    link: '/terms-of-service',
  },
  {
    title: 'Disclaimer',
    link: '/#disclaimer',
  },
  {
    title: 'Compliance',
    link: '/compliance',
  },
  {
    title: 'Investor Charter',
    link: '/investor-charter',
  },
]

export { METADATA, NAVIGATION_LINKS, OTHER_LINKS }
