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
      "Our team consists of professional teachers with majors in Mathematical Studies and certification in education. With over 24 years of experience, our educators are skilled in providing top-notch instruction.",
    bg: "bg-blue-accent",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a9.003 9.003 0 0 0-8.2-5H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1.1a9.003 9.003 0 0 0 8.2 5H16v3h2v-3h2zM4 9h4v6H4zm12.1 5H11a7.003 7.003 0 0 1-4-5h9.1z" />
      </svg>
    ),
  },
  {
    title: "Trust & Reliability",
    subtitle: "優良信譽",
    description:
      "We are known for our trustworthy service, with most of our students coming through referrals. Students often stay with us from early school years through high school graduation, reflecting their confidence in our programs.",
    bg: "bg-green-accent",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
  },
  {
    title: "Focused Learning",
    subtitle: "老師專注、學生專心",
    description:
      "Our focused approach ensures effective tutoring. Teachers concentrate on teaching, while students focus on learning, creating a conducive environment for academic success.",
    bg: "bg-secondary",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
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
      <section className="relative bg-cover bg-center -mt-[0px]" style={{
        backgroundImage: "url('/hero-bg.webp')",
        minHeight: "500px",
      }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-[1280px] mx-auto px-6 pt-[250px] pb-[25px]">
          <h1 className="font-heading text-[64px] leading-[71px] font-extrabold text-white max-w-[853px] [text-shadow:-3px_6px_16px_#000]">
            Welcome to 123 Math &amp; Chess Learning Centre
          </h1>
          <p className="font-heading text-[40px] leading-tight font-extrabold text-white mt-2 [text-shadow:-3px_6px_16px_#000]">
            (123 數學棋藝中心)
          </p>
        </div>
      </section>

      {/* Intro text card */}
      <section className="max-w-[1280px] mx-auto px-6 -mt-[0px] relative z-10">
        <div className="bg-[#C62828] rounded-[15px] px-10 py-10 text-white text-lg leading-relaxed">
          <p>
            We understand that learning is a journey with its unique challenges and triumphs.
            We&apos;re committed to guiding our students through this journey, offering support in
            mathematics and chess that&apos;s both effective and engaging.
          </p>
          <p className="mt-4">
            Success in learning requires more than just good grades; it&apos;s about{' '}
            <strong>understanding, confidence, and enjoyment</strong>. Our approach balances
            rigorous academic standards with a supportive environment. We&apos;re here not only to
            improve grades but to build skills that last a lifetime.
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
            <div>
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
            <div className="flex items-center justify-center">
              <Image
                src="/math-chess-icon.webp"
                alt="Math and Chess"
                width={200}
                height={200}
                className="w-full max-w-[300px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`${t.bg} rounded-[20px] p-8 pt-8 flex flex-col min-h-[283px]`}
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
        <div className="lg:w-1/2 min-h-[300px] lg:min-h-full bg-cover bg-center" style={{
          backgroundImage: "url('/classes-bg.jpg')",
        }} />
        {/* Right: Content */}
        <div className="lg:w-1/2 flex items-center bg-white px-6 py-16 lg:px-[200px]">
          <div>
            <h2 className="font-heading text-[30px] font-extrabold text-primary mb-4">
              Classes Offered
            </h2>
            <p className="text-[16px] text-accent mb-6 max-w-[770px]">
              Our programs are designed to cater to different needs and goals. From foundational
              math classes to advanced chess strategies, we provide opportunities for all students
              to grow and excel.
            </p>
            <p className="text-[16px] text-accent mb-6">
              Our classes follow the guidelines of BC Ministry of Education.
            </p>
            <Link
              href="/weekly-classes"
              className="inline-block bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors"
            >
              Weekly classes
            </Link>
          </div>
        </div>
      </section>

      {/* Small Classes + Why Choose Split */}
      <section className="flex flex-col lg:flex-row-reverse min-h-[491px]">
        {/* Right: Image */}
        <div className="lg:w-1/2 min-h-[300px] lg:min-h-full bg-cover bg-center" style={{
          backgroundImage: "url('/why-choose-bg.webp')",
          backgroundPosition: "top center",
        }} />
        {/* Left: Content */}
        <div className="lg:w-1/2 flex items-center bg-white px-6 py-16 lg:px-[200px]">
          <div>
            <h2 className="font-heading text-[30px] font-extrabold text-primary mb-4">
              Small Classes, Big Results!
            </h2>
            <ul className="space-y-4 mb-6 max-w-[770px]">
              {smallClassFeatures.map((f) => (
                <li key={f.label} className="text-[16px] text-accent">
                  <strong>{f.label}:</strong> {f.value}
                </li>
              ))}
            </ul>
            <Link
              href="/about-us"
              className="inline-block bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors"
            >
              About us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose 123 */}
      <section className="bg-light-gray py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="font-heading text-[30px] font-extrabold text-accent">
              Why Choose 123 Math &amp; Chess?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-0 md:px-0">
            {whyChooseItems.map((item) => (
              <div
                key={item.title}
                className={`${item.bg} rounded-[20px] p-8 flex flex-col items-center text-center min-h-[320px]`}
              >
                <div className="flex flex-col items-center flex-1">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">{item.subtitle}</p>
                  <p className="text-white text-[16px] leading-relaxed px-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-accent py-10">
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
