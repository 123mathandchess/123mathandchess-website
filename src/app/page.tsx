import Link from 'next/link';
import Image from 'next/image';

const testimonials = [
  {
    text: "My child has been a part of 123 since grade 4 and has just graduated, heading to UBC. The foundation laid by 123 in challenging math and problem-solving has been instrumental in his academic success.",
    author: "Michelle L",
    stars: 5,
    bg: "bg-blue-accent",
  },
  {
    text: "123 Math and Chess has been great for my child! The teachers keep him engaged and excited to learn. Highly recommend this place to learn math!",
    author: "Tommy C",
    stars: 5,
    bg: "bg-green-accent",
  },
  {
    text: "Amazing teachers and very enjoyable learning 🙂 Definitely the place to go for math tutoring!",
    author: "Charis L",
    stars: 5,
    bg: "bg-secondary",
  },
  {
    text: "I learned math here since grade 4. Now I'm taking Math AP in school! They are extremely patient and provide me with a great foundation in math. They're great!",
    author: "Joey C",
    stars: 5,
    bg: "bg-orange-accent",
  },
];

const whyChooseItems = [
  {
    title: "Professional Teachers",
    subtitle: "專科專教",
    description:
      "Our team consists of professional teachers with majors in Mathematical Studies and certification in education. With <strong>over 24 years of experience</strong>, our educators are skilled in providing top-notch instruction.",
    bg: "bg-blue-accent",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Trust & Reliability",
    subtitle: "優良信譽",
    description:
      "We are known for our trustworthy service, with <strong>most of our students coming through referrals</strong>. Students often <strong>stay with us from early school years through high school graduation</strong>, reflecting their confidence in our programs.",
    bg: "bg-green-accent",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Focused Learning",
    subtitle: "老師專注、學生專心",
    description:
      "Our focused approach ensures effective tutoring. <strong>Teachers concentrate on teaching, while students focus on learning</strong>, creating an environment where students do their best work.",
    bg: "bg-secondary",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

const smallClassFeatures = [
  { label: "Small Class Size", value: "1 teacher to 5 students" },
  { label: "Materials", value: "Constantly upgraded to follow BC Ministry Guidelines" },
  { label: "Assessment", value: "Free trial & assessment tests" },
  { label: "Make-up Classes", value: "Arrange for missed classes" },
  { label: "Study Pace", value: "Students advance at their own pace" },
  { label: "Class Length", value: "2 hours per session" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center" style={{
        backgroundImage: "url('/Depositphotos_141667892_L-jpg.webp')",
        minHeight: "500px",
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-[1280px] mx-auto px-6 pt-[200px] pb-[80px]">
          <h1 className="font-heading text-[48px] leading-[54px] md:text-[56px] md:leading-[64px] lg:text-[64px] lg:leading-[71px] font-extrabold text-white max-w-[853px] [text-shadow:-3px_6px_16px_#000] anim-fade-in-up">
            Welcome to 123 Math &amp; Chess Learning Centre
          </h1>
          <p className="font-heading text-[24px] leading-tight md:text-[32px] lg:text-[40px] font-extrabold text-white mt-2 [text-shadow:-3px_6px_16px_#000] anim-fade-in-up" style={{ animationDelay: '0.15s' }}>
            (123 數學棋藝中心)
          </p>
        </div>
      </section>

      {/* Intro text card */}
      <section className="max-w-[1280px] mx-auto px-6 -mt-[60px] relative z-10">
        <div className="bg-[#C62828] rounded-[15px] px-10 py-10 text-white text-lg leading-relaxed reveal-on-scroll-scale">
          <p>
            We understand that learning is a journey with its unique challenges and triumphs.
            We&apos;re committed to guiding our students through this journey, offering support in
            mathematics and chess that&apos;s both effective and engaging.
          </p>
          <p className="mt-4">
            Success in learning requires more than just good grades; it&apos;s about{' '}
            <strong>understanding, confidence, and enjoyment</strong>. Our approach balances
            rigorous academic standards with a supportive environment. We&apos;re here not only to
            improve grades but to <strong>build skills that last a lifetime</strong>.
          </p>
          <div className="mt-6 pt-4 border-t border-white/20">
            <p className="font-extrabold">Classes are offered at #103 – 8584 Granville Street, Vancouver, BC.</p>
            <div className="flex flex-wrap gap-x-12 gap-y-1 mt-2">
              <span><strong>Weekdays:</strong> 4pm to 8pm</span>
              <span><strong>Saturday:</strong> 10am to 8pm</span>
              <span><strong>Sunday:</strong> 10am to 2pm</span>
            </div>
          </div>
        </div>
      </section>

      {/* SoundCloud + Image Grid */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="reveal-on-scroll-left">
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1883447988&color=%23B31515&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
              <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
                <a href="https://soundcloud.com/joseph-choi-278183438" title="123 Math & Chess" target="_blank" rel="nofollow noopener" style={{ color: '#cccccc', textDecoration: 'none' }}>123 Math &amp; Chess</a> · <a href="https://soundcloud.com/joseph-choi-278183438/song" title="123 Math &amp; Chess" target="_blank" rel="nofollow noopener" style={{ color: '#cccccc', textDecoration: 'none' }}>123 Math &amp; Chess</a>
              </div>
            </div>
            <div className="flex items-center justify-center reveal-on-scroll-right">
              <Image
                src="/Math-Chess.webp"
                alt="Math and Chess"
                width={500}
                height={500}
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-accent py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`${t.bg} rounded-[20px] p-8 pt-8 flex flex-col min-h-[283px] card-hover reveal-on-scroll-scale`}
              >
                <div className="flex flex-col flex-1">
                  <div className="flex gap-1 mb-4 text-yellow-accent text-2xl">
                    {'★'.repeat(t.stars)}
                  </div>
                  <p className="text-white text-[16px] leading-relaxed flex-1 px-1">
                    {t.text}
                  </p>
                  <p className="font-heading text-2xl font-bold text-white mt-4">– {t.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Offered + Small Classes Split */}
      <section className="flex flex-col lg:flex-row min-h-[574px]">
        {/* Left: Image */}
        <div className="lg:w-1/2 min-h-[300px] lg:min-h-full bg-cover bg-center reveal-on-scroll-left" style={{
          backgroundImage: "url('/Depositphotos_179168238_XL.webp')",
        }} />
        {/* Right: Content */}
        <div className="lg:w-1/2 flex items-center bg-white px-6 py-16 lg:px-[80px] reveal-on-scroll-right">
          <div>
            <h2 className="font-heading text-[30px] font-extrabold text-primary mb-4">
              Classes Offered
            </h2>
            <p className="text-[16px] text-accent mb-6">
              Our programs are designed to cater to different needs and goals. From <strong>foundational
              math classes to advanced chess strategies</strong>, we provide opportunities for all students
              to grow and excel.
            </p>
            <p className="text-[16px] text-accent mb-6">
              Our classes follow the guidelines of <strong>BC Ministry of Education</strong>.
            </p>
            <Link
              href="/weekly-classes"
              className="inline-block bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors btn-hover"
            >
              Weekly classes
            </Link>
          </div>
        </div>
      </section>

      {/* Small Classes + Why Choose Split */}
      <section className="flex flex-col lg:flex-row-reverse min-h-[491px]">
        {/* Right: Image */}
        <div className="lg:w-1/2 min-h-[300px] lg:min-h-full bg-cover bg-center reveal-on-scroll-right" style={{
          backgroundImage: "url('/Depositphotos_208732556_XL-scaled.webp')",
          backgroundPosition: "top center",
        }} />
        {/* Left: Content */}
        <div className="lg:w-1/2 flex items-center bg-white px-6 py-16 lg:px-[80px] reveal-on-scroll-left">
          <div>
            <h2 className="font-heading text-[30px] font-extrabold text-primary mb-4">
              Small Classes, Big Results!
            </h2>
            <ul className="space-y-4 mb-6 list-disc list-inside">
              {smallClassFeatures.map((f) => (
                <li key={f.label} className="text-[16px] text-accent marker:text-primary">
                  <strong>{f.label}:</strong>{' '}
                  {f.label === 'Small Class Size' ? (
                    <><strong>1 teacher to 5 students</strong></>
                  ) : f.label === 'Assessment' ? (
                    <><strong>Free trial &amp; assessment tests</strong></>
                  ) : (
                    f.value
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="/about-us"
              className="inline-block bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors btn-hover"
            >
              About us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose 123 */}
      <section className="bg-light-gray py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-8 reveal-on-scroll">
            <h2 className="font-heading text-[30px] font-extrabold text-accent">
              Why Choose 123 Math &amp; Chess?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-0 md:px-0 stagger-children">
            {whyChooseItems.map((item) => (
              <div
                key={item.title}
                className={`${item.bg} rounded-[20px] p-8 flex flex-col items-center text-center min-h-[320px] card-hover reveal-on-scroll-scale`}
              >
                <div className="flex flex-col items-center flex-1">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-base mb-4">{item.subtitle}</p>
                  <p
                    className="text-white text-[16px] leading-relaxed px-2"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-10 reveal-on-scroll">
            <h2 className="font-heading text-[30px] font-extrabold text-accent mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-accent/60">Everything you need to know about our Vancouver math tutoring programs</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What math levels do you teach?",
                a: "We teach students from Grade 3 through Grade 12, covering elementary math, high school math, pre-calculus, and calculus. Our programs align with the BC Ministry of Education curriculum.",
              },
              {
                q: "How much do math tutoring sessions cost?",
                a: "Individual sessions are $57 each. Family rate is $56 per session. Every session runs for 2 hours, giving students ample time to work through concepts with their teacher.",
              },
              {
                q: "Where are you located in Vancouver?",
                a: "Our learning centre is at #103-8584 Granville Street in Vancouver, BC (V6P 4Z7). We're easily accessible from South Vancouver, Marpole, and Richmond.",
              },
              {
                q: "Do you offer a free trial class?",
                a: "Yes. We offer free trial and assessment tests so we can place your child at the right level. This helps us understand their strengths and where they need support.",
              },
              {
                q: "How big are your classes?",
                a: "We keep classes small: 1 teacher to a maximum of 5 students. This ensures every student gets individual attention and can learn at their own pace.",
              },
              {
                q: "What ages can start chess lessons?",
                a: "Chess coaching is available for children age 3 and up. Our chess program is led by Toni Deline, a candidate Chess Master and former BC Chess Federation President.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-light-gray rounded-xl p-6 reveal-on-scroll cursor-pointer group"
              >
                <summary className="font-heading text-lg font-extrabold text-accent list-none flex justify-between items-center">
                  {faq.q}
                  <svg className="w-5 h-5 text-primary transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-accent/80 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What math levels do you teach?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We teach students from Grade 3 through Grade 12, covering elementary math, high school math, pre-calculus, and calculus. Our programs align with the BC Ministry of Education curriculum.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "How much do math tutoring sessions cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Individual sessions are $57 each. Family rate is $56 per session. Every session runs for 2 hours, giving students ample time to work through concepts with their teacher.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Where are you located in Vancouver?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our learning centre is at #103-8584 Granville Street in Vancouver, BC (V6P 4Z7). We're easily accessible from South Vancouver, Marpole, and Richmond.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer a free trial class?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We offer free trial and assessment tests so we can place your child at the right level. This helps us understand their strengths and where they need support.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "How big are your classes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We keep classes small: 1 teacher to a maximum of 5 students. This ensures every student gets individual attention and can learn at their own pace.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "What ages can start chess lessons?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Chess coaching is available for children age 3 and up. Our chess program is led by Toni Deline, a candidate Chess Master and former BC Chess Federation President.",
                    },
                  },
                ],
              }),
            }}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-accent py-10 reveal-on-scroll">
        <div className="max-w-[1280px] mx-auto px-6 text-center text-white">
          <p className="font-heading text-[30px] font-extrabold mb-2">
            Classes offered at #103-8584 Granville Street, Vancouver BC.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-lg">
            <span><strong>Weekdays:</strong> 4pm to 8pm</span>
            <span><strong>Saturday:</strong> 10am to 8pm</span>
            <span><strong>Sunday:</strong> 10am to 2pm</span>
          </div>
        </div>
      </section>
    </>
  );
}
