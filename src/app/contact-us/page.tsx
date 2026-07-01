import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "We'd love to hear from you! Whether you have questions about our programs, want to schedule a visit, or need any information, please don't hesitate to reach out.",
};

export default function ContactUsPage() {
  return (
    <>
      {/* Hero with background image */}
      <section
        className="relative bg-cover bg-center flex items-end min-h-[325px]"
        style={{ backgroundImage: "url('/contact-hero.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/55 to-[#811E37]" />
        <div className="relative max-w-[1280px] mx-auto px-6 pb-[90px] w-full text-center">
          <h1 className="font-heading text-[55px] leading-[56px] font-bold text-white [text-shadow:1px_2px_1px_#474747]">
            Contact Us
          </h1>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-[10px] py-[80px]">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Contact Info + Map */}
          <div className="w-full lg:w-[38%]">
            <h2 className="font-heading text-[30px] font-extrabold text-accent mb-6">
              Our Location &amp; Address
            </h2>

            {/* Google Maps */}
            <div className="mb-6">
              <iframe
                loading="lazy"
                src="https://maps.google.com/maps?q=123%20Math%20%26%20Chess%20Learning%20Centr&t=m&z=10&output=embed&iwloc=near"
                title="123 Math &amp; Chess Learning Centre"
                aria-label="123 Math &amp; Chess Learning Centre"
                className="w-full h-[300px] rounded-lg"
              />
            </div>

            <div className="text-[16px] text-accent space-y-3">
              <p>
                We&apos;d love to hear from you! Whether you have questions about our programs, want
                to schedule a visit, or need any information, please don&apos;t hesitate to reach out.
              </p>
              <ul className="space-y-2">
                <li><strong>Address:</strong> #103 – 8584 Granville Street, Vancouver, BC V6P 4Z7 Canada</li>
                <li><strong>Phone:</strong> (604) 263-4567</li>
                <li><strong>Email:</strong> <a href="mailto:marho123@gmail.com" className="text-primary hover:underline break-all">marho123@gmail.com</a></li>
              </ul>
            </div>
          </div>

          {/* Right: Form Card */}
          <div className="w-full lg:w-[60%]">
            <div className="bg-white border-2 border-blue-accent rounded-[20px] p-[20px] pt-[25px]">
              <h2 className="font-heading text-2xl font-bold text-accent mb-6">
                Student Enrollment Form
              </h2>

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
        </div>
      </div>
    </>
  );
}
