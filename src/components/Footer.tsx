import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/weekly-classes', label: 'Weekly Classes' },
  { href: '/summer-program', label: 'Summer Classes' },
  { href: '/our-teachers', label: 'Our Teachers' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-footer-bg text-white">
        <div className="max-w-[1410px] mx-auto flex flex-col md:flex-row gap-8 px-6 py-[60px]">
          {/* Logo + intro */}
          <div className="w-full md:w-[27%]">
            <Image
              src="/123-Math-Chess-Logo-White.webp"
              alt="123 Math & Chess Learning Centre"
              width={1920}
              height={772}
              className="w-[83%] h-auto mb-4"
            />
            <p className="text-[16px] leading-relaxed text-white/80">
              We understand that learning is a journey with its unique challenges and triumphs.
              We&apos;re committed to guiding our students through this journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-[20%]">
            <h3 className="font-heading text-xl font-extrabold text-white mb-4 pl-5">Quick Links</h3>
            <ul className="space-y-0">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-[3px] text-lg font-semibold text-white hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-[50%] pr-0 md:pr-10">
            <h3 className="font-heading text-xl font-extrabold text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-[16px]">
              <p className="flex items-start gap-2">
                <span className="text-primary mt-0.5">📍</span>
                <span>#103 – 8584 Granville Street, Vancouver, BC V6P 4Z7 Canada</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">📞</span>
                <a href="tel:+16042634567" className="hover:text-primary transition-colors">(604) 263-4567</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">✉️</span>
                <a href="mailto:marho123@gmail.com" className="hover:text-primary transition-colors break-all">marho123@gmail.com</a>
              </p>
              <div className="pt-4">
                <h4 className="font-heading font-extrabold text-white mb-2">Hours of Operation</h4>
                <p className="text-white/80"><strong>Weekdays:</strong> 4pm to 8pm</p>
                <p className="text-white/80"><strong>Saturday:</strong> 10am to 8pm</p>
                <p className="text-white/80"><strong>Sunday:</strong> 10am to 2pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-primary text-white">
        <div className="max-w-[1280px] mx-auto flex justify-center items-center min-h-[100px] px-6">
          <p className="text-lg text-center">
            Copyright 1996&ndash;2026, 123 Math &amp; Chess Learning Center (123 數學棋藝中心), all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
