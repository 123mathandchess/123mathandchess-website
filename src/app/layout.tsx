import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "123 Math & Chess Learning Centre | 123 Math and Chess Learning Centre (123 數學棋藝中心)",
    template: "%s | 123 Math and Chess Learning Centre (123 數學棋藝中心)",
  },
  description:
    "We understand that learning is a journey with its unique challenges and triumphs. We're committed to guiding our students through this journey, offering support in mathematics and chess that's both effective and engaging.",
  icons: {
    icon: "/favicon.webp",
  },
  openGraph: {
    title: "123 Math & Chess Learning Centre (123 數學棋藝中心)",
    description:
      "We understand that learning is a journey with its unique challenges and triumphs. We're committed to guiding our students through this journey.",
    url: "https://123mathandchess.com",
    siteName: "123 Math & Chess Learning Centre",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Place",
                  "@id": "https://123mathandchess.com/#place",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "#103 – 8584 Granville Street",
                    addressLocality: "Vancouver",
                    addressRegion: "BC",
                    postalCode: "V6P 4Z7",
                    addressCountry: "Canada",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://123mathandchess.com/#organization",
                  name: "123 Math & Chess Learning Centre (123 數學棋藝中心)",
                  url: "https://123mathandchess.com",
                  email: "marho123@gmail.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "#103 – 8584 Granville Street",
                    addressLocality: "Vancouver",
                    addressRegion: "BC",
                    postalCode: "V6P 4Z7",
                    addressCountry: "Canada",
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "604 263 4567",
                      contactType: "customer support",
                    },
                  ],
                  description:
                    "At 123 Math & Chess Learning Centre (123 數學棋藝中心), we understand that learning is a journey with its unique challenges and triumphs. We're committed to guiding our students through this journey, offering support in mathematics and chess that's both effective and engaging.",
                  location: { "@id": "https://123mathandchess.com/#place" },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://123mathandchess.com/#website",
                  url: "https://123mathandchess.com",
                  name: "123 Math & Chess Learning Centre (123 數學棋藝中心)",
                  alternateName: "123 Math & Chess Learning Centre",
                  publisher: { "@id": "https://123mathandchess.com/#organization" },
                  inLanguage: "en-US",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
