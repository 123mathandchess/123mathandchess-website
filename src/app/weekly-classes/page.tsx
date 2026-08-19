import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Math Tutoring Vancouver | Weekly Classes | 123 Math & Chess",
  description: "Year-round math tutoring in Vancouver, BC. Small classes with 5 students max, 2-hour sessions for grades 3-12. $57/session individual, $56/session family. Free trial and assessment available.",
};

export default function WeeklyClassesPage() {
  return (
    <>
      {/* Hero with background image */}
      <section
        className="relative bg-cover bg-center flex items-center min-h-[325px]"
        style={{ backgroundImage: "url('/Depositphotos_163063456_L-jpg.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/55 to-[#811E37]" />
        <div className="relative max-w-[1280px] mx-auto px-6 pb-[40px] w-full text-center">
          <h1 className="font-heading text-[48px] leading-[54px] md:text-[48px] md:leading-[56px] lg:text-[55px] lg:leading-[56px] font-bold text-white [text-shadow:1px_2px_1px_#474747]">
            Weekly Math Classes in Vancouver
          </h1>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-16 space-y-16">
        {/* Intro */}
        <section className="text-center reveal-on-scroll">
          <p className="text-lg text-accent/80 leading-relaxed mb-6 max-w-[770px] mx-auto">
            We offer year-round Math classes in <strong>2-hour sessions</strong> from Monday to Sunday.
          </p>

          {/* Tuition Fee Blocks */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-[600px] mx-auto mb-6">
            <div className="bg-primary text-white rounded-xl px-8 py-6 flex-1 shadow-md card-hover">
              <p className="font-heading text-lg font-extrabold mb-1">Individual</p>
              <p className="text-3xl font-extrabold">$57</p>
              <p className="text-white/80 text-sm">per session</p>
            </div>
            <div className="bg-green-accent text-white rounded-xl px-8 py-6 flex-1 shadow-md card-hover">
              <p className="font-heading text-lg font-extrabold mb-1">Family</p>
              <p className="text-3xl font-extrabold">$56</p>
              <p className="text-white/80 text-sm">per session</p>
            </div>
          </div>
        </section>

        {/* Grade 3-7 */}
        <section className="flex flex-col lg:flex-row min-h-[350px]">
          <div
            className="lg:w-1/2 min-h-[300px] lg:min-h-full bg-cover bg-center reveal-on-scroll-left"
            style={{ backgroundImage: "url('/Depositphotos_110775696_L.webp')" }}
          />
          <div className="lg:w-1/2 flex items-center bg-blue-accent px-6 py-16 lg:px-[80px] reveal-on-scroll-right">
            <div>
              <svg className="w-12 h-12 text-white mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
              </svg>
              <h2 className="font-heading text-2xl font-bold text-white mb-4">
                Grade 3 to 7 Elementary Math &amp; Problem Solving Class
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                These courses help students build a solid foundation in Math and get well prepared for
                high level math courses, mini-school, enriched math, accelerated programs or private
                school entrance examinations.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-white text-blue-accent font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-gray-100 transition-colors btn-hover"
              >
                Inquire now
              </Link>
            </div>
          </div>
        </section>

        {/* Grade 8-12 */}
        <section className="flex flex-col lg:flex-row-reverse min-h-[350px]">
          <div
            className="lg:w-1/2 min-h-[300px] lg:min-h-full bg-cover bg-center reveal-on-scroll-right"
            style={{ backgroundImage: "url('/Depositphotos_48453089_L.webp')" }}
          />
          <div className="lg:w-1/2 flex items-center bg-primary px-6 py-16 lg:px-[80px] reveal-on-scroll-left">
            <div>
              <svg className="w-12 h-12 text-white mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.5 14.5l-1.4 1.4L5.3 13l2.8-2.8 1.4 1.4L8.2 13l1.3 1.5zm5.6-5.6L12.3 8l2.8-2.8-1.4-1.4L10.9 7l2.8 2.8 1.4-1.4zM12 17l1.4-1.4L10.6 13l2.8-2.8-1.4-1.4L7.7 13 12 17z" />
              </svg>
              <h2 className="font-heading text-2xl font-bold text-white mb-4">
                Grade 8 to 12 High School Math &amp; Calculus
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                Students bring their school problems to class. Our teachers can help them to solve problems.
              </p>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                These courses aimed at helping students master the concepts and be well prepared for
                quizzes, tests and <strong>provincial math examinations</strong>.
              </p>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                We also help students advance their math so that they can complete their high school
                math earlier. Students will be getting ready to take <strong>SAT examination</strong> as well.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-white text-primary font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-gray-100 transition-colors btn-hover"
              >
                Inquire now
              </Link>
            </div>
          </div>
        </section>

        {/* Summer Program link */}
        <section className="bg-orange-accent/10 rounded-2xl py-12 px-8 text-center border border-orange-accent/20 reveal-on-scroll">
          <svg className="w-12 h-12 text-orange-accent mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" />
          </svg>
          <h2 className="font-heading text-2xl font-bold text-orange-accent mb-4">
            Summer Program (July &amp; August)
          </h2>
          <p className="text-lg text-accent/80 leading-relaxed mb-6 max-w-[770px] mx-auto">
            Our <strong>Summer Program</strong> gives students the chance to get
            ahead in their studies or catch up on challenging topics.
          </p>
          <Link
            href="/summer-program"
            className="inline-block bg-orange-accent text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:brightness-90 transition-all btn-hover"
          >
            Learn more
          </Link>
        </section>

        {/* Chess */}
        <section className="flex flex-col lg:flex-row min-h-[350px]">
          <div
            className="lg:w-1/2 min-h-[300px] lg:min-h-full bg-cover bg-center reveal-on-scroll-right"
            style={{ backgroundImage: "url('/Depositphotos_375633664_L.webp')" }}
          />
          <div className="lg:w-1/2 flex items-center bg-green-accent px-6 py-16 lg:px-[80px] reveal-on-scroll-left">
            <div>
              <svg className="w-12 h-12 text-white mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 22H5v-2h14v2zm-2-8c-1.42 0-2.74-.77-3.45-2H7v-2h6.55c.28-.61.45-1.3.45-2s-.17-1.39-.45-2H7V4h6.55c.71-1.23 2.03-2 3.45-2 2.21 0 4 1.79 4 4s-1.79 4-4 4z" />
              </svg>
              <h2 className="font-heading text-2xl font-bold text-white mb-4">
                International Chess Coaching (Age 3+)
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                Taught by Toni Deline, he is a <strong>candidate Chess Master</strong>, a former BC Chess Federation
                President, a former World Chess Marathon Chess Champion, a certified National Tournament
                Director (NTD) and the captain of the Vancouver Chess Team from 2004 to 2007.
              </p>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                As a dedicated coach, Toni has mentored numerous B.C. elementary school chess champions.
                One of his notable achievements includes coaching the first runner-up in the Girls Under 8
                division at the 2009 Canadian Youth Chess Championships.
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

        {/* Science */}
        <section className="flex flex-col lg:flex-row-reverse min-h-[350px]">
          <div
            className="lg:w-1/2 min-h-[300px] lg:min-h-full bg-cover bg-center reveal-on-scroll-right"
            style={{ backgroundImage: "url('/Depositphotos_672164674_L.webp')" }}
          />
          <div className="lg:w-1/2 flex items-center bg-blue-accent px-6 py-16 lg:px-[80px] reveal-on-scroll-left">
            <div>
              <svg className="w-12 h-12 text-white mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.14 7.5A5.98 5.98 0 0 0 13 3.08V1h-2v2.08A6 6 0 0 0 5.52 10H3v2h2.52c.34 1.67 1.17 3.12 2.38 4.17L5.38 18.7 3 17.38l-1 1.73 2.38 1.32L2 22.73 3.73 24l2.38-1.32L8.5 24l1-1.73-2.38-1.32 2.5-2.5A5.96 5.96 0 0 0 13 20.92V23h2v-2.08A6 6 0 0 0 20.48 14H23v-2h-2.52a5.87 5.87 0 0 0-1.34-4.5zM12 18c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
              </svg>
              <h2 className="font-heading text-2xl font-bold text-white mb-4">Science</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Our <strong>Physics and Chemistry tutoring lessons</strong> for Grade 10 students and
                above offer <strong>personalized instruction</strong> to strengthen foundational concepts and tackle
                advanced topics.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-white text-blue-accent font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-gray-100 transition-colors btn-hover"
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
