import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Contact 123 Math & Chess | Vancouver Math Tutoring | Free Trial",
  description: "Contact 123 Math & Chess Learning Centre in Vancouver, BC. Book a free trial math assessment, ask about programs for grades 3-12, or schedule a visit. #103-8584 Granville Street. Call (604) 263-4567.",
};

export default function ContactUsPage() {
  return (
    <>
      {/* Hero with background image */}
      <section
        className="relative bg-cover bg-center flex items-center min-h-[325px]"
        style={{ backgroundImage: "url('/Screenshot-2024-07-08-at-12.26.46 AM.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/55 to-[#811E37]" />
        <div className="relative max-w-[1280px] mx-auto px-6 pb-[40px] w-full text-center">
          <h1 className="font-heading text-[48px] leading-[54px] md:text-[48px] md:leading-[56px] lg:text-[55px] lg:leading-[56px] font-bold text-white [text-shadow:1px_2px_1px_#474747]">
            Contact Our Vancouver Learning Centre
          </h1>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-[10px] py-[80px]">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Contact Info + Map */}
          <div className="w-full lg:w-[38%] reveal-on-scroll-left">
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
          <div className="w-full lg:w-[60%] reveal-on-scroll-right">
            <div className="bg-white border-2 border-blue-accent rounded-[20px] p-[20px] pt-[25px]">
              <h2 className="font-heading text-2xl font-bold text-accent mb-6">
                Student Enrollment Form
              </h2>

              <div
                className="deftform"
                data-form-id="f6e766b8-2171-4aa6-8a84-e3fc8bdcceab"
                data-form-width="100%"
                data-form-align="center"
                data-form-auto-height="1"
              />
              <Script src="https://cdn.deftform.com/embed.js" strategy="afterInteractive" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
