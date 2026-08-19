import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Summer Math Program Vancouver | July-August Classes | 123 Math & Chess",
  description: "Summer math classes in Vancouver for grades 3-12. Get ahead or catch up on challenging topics. 2-hour sessions, $57/session. Chess coaching with candidate Chess Master Toni Deline also available.",
};

export default function SummerProgramPage() {
  return (
    <>
      {/* Hero with background image */}
      <section
        className="relative bg-cover bg-center flex items-center min-h-[325px]"
        style={{ backgroundImage: "url('/Depositphotos_149086749_XL.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/55 to-[#811E37]" />
        <div className="relative max-w-[1280px] mx-auto px-6 pb-[40px] w-full text-center">
          <h1 className="font-heading text-[48px] leading-[54px] md:text-[48px] md:leading-[56px] lg:text-[55px] lg:leading-[56px] font-bold text-white [text-shadow:1px_2px_1px_#474747]">
            Summer Math Program in Vancouver
          </h1>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-16 space-y-16">
        {/* Challenging Math - Full section with picture */}
        <section className="flex flex-col lg:flex-row min-h-[350px]">
          <div
            className="lg:w-1/2 min-h-[300px] lg:min-h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/Depositphotos_179168238_XL.webp')" }}
          />
          <div className="lg:w-1/2 flex items-center bg-primary px-6 py-16 lg:px-[80px]">
            <div>
              <svg className="w-12 h-12 text-white mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
              </svg>
              <h2 className="font-heading text-[30px] font-extrabold text-white mb-4">
                Challenging Math and Problem Solving (Grades 3-12)
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Our Summer Program gives students the chance to get ahead in their
                studies or <strong>catch up on challenging topics</strong>. These Math classes are offered during July
                &amp; August each year in <strong>2-hour sessions</strong> from Monday to Sunday.
              </p>

              {/* Tuition Fee Blocks */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="bg-white/20 backdrop-blur-sm text-white rounded-xl px-6 py-5 flex-1 border border-white/20 card-hover">
                  <p className="font-heading text-lg font-extrabold mb-1">Individual</p>
                  <p className="text-3xl font-extrabold">$57</p>
                  <p className="text-white/70 text-sm">per session</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm text-white rounded-xl px-6 py-5 flex-1 border border-white/20 card-hover">
                  <p className="font-heading text-lg font-extrabold mb-1">Family</p>
                  <p className="text-3xl font-extrabold">$56</p>
                  <p className="text-white/70 text-sm">per session</p>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="inline-block bg-white text-primary font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-gray-100 transition-colors btn-hover"
              >
                Inquire now
              </Link>
            </div>
          </div>
        </section>

        {/* Chess */}
        <section className="flex flex-col lg:flex-row min-h-[350px]">
          <div
            className="lg:w-1/2 min-h-[300px] lg:min-h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/Depositphotos_375633664_L.webp')" }}
          />
          <div className="lg:w-1/2 flex items-center bg-green-accent px-6 py-16 lg:px-[80px]">
            <div>
              <svg className="w-12 h-12 text-white mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 22H5v-2h14v2zm-2-8c-1.42 0-2.74-.77-3.45-2H7v-2h6.55c.28-.61.45-1.3.45-2s-.17-1.39-.45-2H7V4h6.55c.71-1.23 2.03-2 3.45-2 2.21 0 4 1.79 4 4s-1.79 4-4 4z" />
              </svg>
              <h2 className="font-heading text-[30px] font-extrabold text-white mb-4">
                International Chess Coaching (Age 3+)
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                Taught by Toni Deline, he is a <strong>candidate Chess Master</strong>, a former BC Chess Federation
                President, a <strong>former World Chess Marathon Chess Champion</strong>, a certified National Tournament
                Director (NTD) and the captain of the Vancouver Chess Team from 2004 to 2007.
              </p>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                As a dedicated coach, Toni has mentored numerous B.C. elementary school chess champions.
                One of his notable achievements includes coaching the first runner-up in the Girls Under 8
                division at the 2009 Canadian Youth Chess Championships. This talented student went on to
                qualify for the World Youth Championships in Turkey.
              </p>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                With his expertise and guidance, students gain a well-rounded understanding of chess,
                preparing them for success.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-white text-green-accent font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-gray-100 transition-colors btn-hover"
              >
                Inquire now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
