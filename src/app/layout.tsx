import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  verification: {
    google: "KhkQ1qbKZCO3k-mU7Bkh4jMndRU0GwC674PbGcbn3Fs",
  },
  title: {
    default: "123 Math & Chess Learning Centre | Math Tutoring Vancouver BC | 123 數學棋藝中心",
    template: "%s | 123 Math & Chess Learning Centre",
  },
  description:
    "Vancouver math tutoring and chess coaching for grades 3-12 since 2006. Small classes of 5 students, BC-certified teachers, $57/session. Free trial assessment. Located on Granville Street.",
  icons: {
    icon: "/Favicon.webp",
  },
  openGraph: {
    title: "123 Math & Chess Learning Centre | Vancouver Math Tutoring (123 數學棋藝中心)",
    description:
      "Vancouver math tutoring and chess coaching. Small classes, certified teachers, free trials. Serving Vancouver families since 2006.",
    url: "https://123mathandchess.com",
    siteName: "123 Math & Chess Learning Centre",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 49.2098,
                    longitude: -123.1397,
                  },
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://123mathandchess.com/#localbusiness",
                  name: "123 Math & Chess Learning Centre (123 數學棋藝中心)",
                  url: "https://123mathandchess.com",
                  email: "marho123@gmail.com",
                  telephone: "+1-604-263-4567",
                  priceRange: "$$",
                  description:
                    "Vancouver math tutoring and chess coaching for students grades 3-12. Small classes of 5 students, BC curriculum aligned. Operating since 2006.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "#103 – 8584 Granville Street",
                    addressLocality: "Vancouver",
                    addressRegion: "BC",
                    postalCode: "V6P 4Z7",
                    addressCountry: "Canada",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 49.2098,
                    longitude: -123.1397,
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "16:00",
                      closes: "20:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Saturday",
                      opens: "10:00",
                      closes: "20:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Sunday",
                      opens: "10:00",
                      closes: "14:00",
                    },
                  ],
                  location: { "@id": "https://123mathandchess.com/#place" },
                },
                {
                  "@type": "Organization",
                  "@id": "https://123mathandchess.com/#organization",
                  name: "123 Math & Chess Learning Centre (123 數學棋藝中心)",
                  url: "https://123mathandchess.com",
                  email: "marho123@gmail.com",
                  telephone: "+1-604-263-4567",
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
                      telephone: "+1-604-263-4567",
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M92TN5ZH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var observer = new IntersectionObserver(function(entries) {
                  entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('revealed');
                    }
                  });
                }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
                document.querySelectorAll('.reveal-on-scroll, .reveal-on-scroll-left, .reveal-on-scroll-right, .reveal-on-scroll-scale')
                  .forEach(function(el) { observer.observe(el); });

                var rescanTimeout;
                var rescanner = new MutationObserver(function() {
                  clearTimeout(rescanTimeout);
                  rescanTimeout = setTimeout(function() {
                    document.querySelectorAll('.reveal-on-scroll:not(.revealed), .reveal-on-scroll-left:not(.revealed), .reveal-on-scroll-right:not(.revealed), .reveal-on-scroll-scale:not(.revealed)')
                      .forEach(function(el) { observer.observe(el); });
                  }, 200);
                });
                rescanner.observe(document.body, { childList: true, subtree: true });
              })();
            `,
          }}
        />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M92TN5ZH');`,
          }}
        />
      </body>
    </html>
  );
}
