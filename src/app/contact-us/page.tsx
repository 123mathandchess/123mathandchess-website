import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "We'd love to hear from you! Whether you have questions about our programs, want to schedule a visit, or need any information, please don't hesitate to reach out.",
};

export default function ContactUsPage() {
  return (
    <>
      <section className="bg-accent py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="font-heading text-[30px] font-extrabold text-white">Contact Us</h1>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
              Our Location & Address
            </h2>
            <p className="text-lg text-accent/80 leading-relaxed mb-8">
              We&apos;d love to hear from you! Whether you have questions about our programs, want
              to schedule a visit, or need any information, please don&apos;t hesitate to reach out.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-3 mt-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-extrabold text-accent">Address</h3>
                  <p className="text-accent/80 mt-1">
                    #103 – 8584 Granville Street<br />
                    Vancouver, BC V6P 4Z7<br />
                    Canada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-3 mt-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-extrabold text-accent">Phone</h3>
                  <a href="tel:+16042634567" className="text-accent/80 hover:text-primary transition-colors mt-1 block">
                    (604) 263-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-3 mt-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-extrabold text-accent">Email</h3>
                  <a href="mailto:marho123@gmail.com" className="text-accent/80 hover:text-primary transition-colors mt-1 block break-all">
                    marho123@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-10 bg-light-gray rounded-lg p-6">
              <h3 className="font-heading text-lg font-extrabold text-accent mb-3">
                Hours of Operation
              </h3>
              <div className="space-y-2 text-accent/80">
                <p><strong>Weekdays:</strong> 4pm – 8pm</p>
                <p><strong>Saturday:</strong> 10am – 8pm</p>
                <p><strong>Sunday:</strong> 10am – 2pm</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
              Student Enrollment Form
            </h2>
            <p className="text-lg text-accent/80 leading-relaxed mb-6">
              Interested in enrolling? Fill out the form below and we&apos;ll get back to you as
              soon as possible. Alternatively, call us at{' '}
              <a href="tel:+16042634567" className="text-primary font-bold hover:underline">
                (604) 263-4567
              </a>{' '}
              or email{' '}
              <a href="mailto:marho123@gmail.com" className="text-primary font-bold hover:underline break-all">
                marho123@gmail.com
              </a>.
            </p>

            <form
              className="space-y-5"
              action="https://formspree.io/f/your-form-id"
              method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-accent mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-accent mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-accent mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-accent mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="program" className="block text-sm font-semibold text-accent mb-1">
                  Program of Interest
                </label>
                <select
                  id="program"
                  name="program"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                >
                  <option value="">Select a program...</option>
                  <option value="elementary-math">Elementary Math (Gr 3-7)</option>
                  <option value="high-school-math">High School Math (Gr 8-12)</option>
                  <option value="calculus">Calculus</option>
                  <option value="chess">Chess Coaching</option>
                  <option value="physics-chemistry">Physics / Chemistry</option>
                  <option value="summer">Summer Program</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-accent mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors w-full sm:w-auto"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <div className="bg-light-gray rounded-lg h-[400px] flex items-center justify-center">
            <div className="text-center text-accent/60">
              <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <p className="text-lg font-semibold">#103 – 8584 Granville Street</p>
              <p>Vancouver, BC V6P 4Z7</p>
              <a
                href="https://maps.google.com/?q=8584+Granville+Street+Vancouver+BC+V6P+4Z7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline mt-2 inline-block"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
