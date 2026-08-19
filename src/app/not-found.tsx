import Link from "next/link";

export default function NotFound() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center flex items-center min-h-[325px]"
        style={{
          backgroundImage:
            "url('/Depositphotos_103640622_L.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-700 mb-8">
            Let us help you find what you need. Browse our main pages below or
            contact us directly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <Link
              href="/"
              className="bg-blue-accent text-white rounded-lg px-6 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              Home
            </Link>
            <Link
              href="/weekly-classes"
              className="bg-blue-accent text-white rounded-lg px-6 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              Weekly Classes
            </Link>
            <Link
              href="/summer-program"
              className="bg-blue-accent text-white rounded-lg px-6 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              Summer Program
            </Link>
            <Link
              href="/about-us"
              className="bg-blue-accent text-white rounded-lg px-6 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              About Us
            </Link>
            <Link
              href="/our-teachers"
              className="bg-blue-accent text-white rounded-lg px-6 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              Our Teachers
            </Link>
            <Link
              href="/contact-us"
              className="bg-blue-accent text-white rounded-lg px-6 py-4 font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
          <p className="text-gray-600">
            Still stuck? Call us at{" "}
            <a
              href="tel:+16042634567"
              className="text-blue-accent font-semibold hover:underline"
            >
              (604) 263 4567
            </a>{" "}
            or{" "}
            <Link
              href="/contact-us"
              className="text-blue-accent font-semibold hover:underline"
            >
              send us a message
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
