import type { Metadata } from 'next'


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { METADATA } from "@/constant/site";

export const metadata: Metadata = METADATA

import "./globals.css";
import "./layout.styles.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Scoop Investment | Equity Research & Unlisted Shares</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Scoop Investment",
              "url": "https://www.scoopinvestment.com",
              "logo": "https://www.scoopinvestment.com/images/scoop-investment-logo.jpg",
              "description": "Scoop Investment provides services for converting Physical Shares to demat, investing in mutual funds, and dealing in unlisted shares.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "G-17 Shyam Plaza, VIP Road",
                "addressLocality": "Surat",
                "postalCode": "395007",
                "addressCountry": "IN"
              },
              "telephone": "+917567473055",
              "email": "Contact@scoopinvestment.com",
              "founder": {
                "@type": "Person",
                "name": "Chirag Jain"
              },
              "sameAs": [
                "https://scoopinvestment.substack.com/",
                "https://in.linkedin.com/company/scoopinvestment",
                "https://twitter.com/scoopinvestment"
              ]
            })
          }}
        ></script>
      </body>
    </html>
  )
}