'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/weekly-classes', label: 'Weekly Classes' },
  { href: '/summer-program', label: 'Summer Classes' },
  { href: '/our-teachers', label: 'Our Teachers' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto flex items-center px-6 py-0">
        {/* Logo */}
        <div className="w-[19%] min-w-[120px] py-2">
          <Link href="/" className="block">
            <Image
              src="/logo.png"
              alt="123 Math & Chess Learning Centre"
              width={1920}
              height={772}
              className="w-full h-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center items-center" style={{ width: '61%' }}>
          <ul className="flex items-center gap-0">
            {navItems.map((item, i) => (
              <li key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className="px-[10px] py-5 text-[16px] font-semibold text-accent hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-3 left-[10px] right-[10px] h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
                {i < navItems.length - 1 && (
                  <span className="text-accent/30 mx-0 h-[15px] w-[1px] bg-accent/30" />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex justify-end" style={{ width: '30%' }}>
          <Link
            href="/contact-us"
            className="bg-primary text-white font-extrabold text-lg px-[25px] py-4 rounded-md hover:bg-primary-dark transition-colors shadow-md"
          >
            (604) 263 4567
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-auto p-2 bg-primary text-white rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav className="lg:hidden bg-accent">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-6 py-4 text-white font-extrabold text-lg hover:text-primary transition-colors border-b border-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
