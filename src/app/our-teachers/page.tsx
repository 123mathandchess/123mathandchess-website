import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Math & Chess Teachers | Certified Vancouver Instructors",
  description: "Meet our certified math and chess instructors in Vancouver. Over 24 years combined teaching experience. B.Sc., B.Ed. qualified teachers with BC certification. Candidate Chess Master for chess coaching.",
};

const teachers = [
  {
    name: "Maria Ho",
    role: "Founder & Lead Math Instructor",
    description:
      "With <strong>over two decades of experience</strong> in teaching mathematics, Maria Ho is the cornerstone of our Centre. Holding a B.Sc. in Mathematics with a minor in Statistics, she has an extensive teaching background both in Hong Kong and Canada. Maria's teaching philosophy revolves around making math accessible and engaging to all students, inspiring them to achieve their full potential.",
    initials: "MH",
    bg: "bg-blue-accent",
  },
  {
    name: "William Lau",
    role: "Math & Calculus Instructor",
    description:
      "William Lau brings a wealth of knowledge in mathematics and engineering to our Centre. A graduate in Electrical Engineering from the University of Hong Kong, he also holds a Postgraduate Certificate in Education. William has been instrumental in helping many Greater Vancouver students excel in <strong>Mathematics and AP Calculus since 1995</strong>.",
    initials: "WL",
    bg: "bg-green-accent",
  },
  {
    name: "Paul Larm",
    role: "Math & Science Instructor",
    description:
      "Paul Larm, a <strong>certified teacher with over ten years of experience</strong>, has a degree in Mechanical Engineering from the University of Hong Kong. His engineering background, combined with his passion for teaching, allows him to bring a <strong>practical, real-world perspective</strong> to math and science education.",
    initials: "PL",
    bg: "bg-secondary",
  },
  {
    name: "Daniel Lai",
    role: "Math & Physics Instructor",
    description:
      "Daniel Lai, certified in both Hong Kong and Canada, is our Math and Physics expert. He holds <strong>three degrees</strong> -- a B.Sc. in Mathematics and Statistics, a second B.Sc. from UBC, and a B.Ed. from UBC. His dual expertise in math and science makes him an invaluable resource for students looking to excel in both areas.",
    initials: "DL",
    bg: "bg-orange-accent",
  },
  {
    name: "Toni Deline",
    role: "Chess Coach",
    description:
      "A <strong>candidate Chess Master</strong> and former President of the BC Chess Federation, Toni Deline has a remarkable track record in chess instruction. His experience as a <strong>World Chess Marathon Chess Champion</strong> and a certified National Tournament Director enriches our chess program, making it one of the best in the region.",
    initials: "TD",
    bg: "bg-primary",
  },
];

export default function OurTeachersPage() {
  return (
    <>
      {/* Hero with background image */}
      <section
        className="relative bg-cover bg-center flex items-center min-h-[325px]"
        style={{ backgroundImage: "url('/Depositphotos_672164674_L.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/55 to-[#811E37]" />
        <div className="relative max-w-[1280px] mx-auto px-6 pb-[40px] w-full text-center">
          <h1 className="font-heading text-[48px] leading-[54px] md:text-[48px] md:leading-[56px] lg:text-[55px] lg:leading-[56px] font-bold text-white [text-shadow:1px_2px_1px_#474747]">
            Our Vancouver Math &amp; Chess Teachers
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-[600px] mx-auto anim-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Dedicated educators committed to your child&apos;s success
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        {/* Intro */}
        <div className="text-center mb-12 reveal-on-scroll">
          <p className="text-lg text-accent/80 leading-relaxed max-w-[770px] mx-auto">
            Our team of certified teachers and experienced tutors brings decades of combined expertise
            in mathematics, science, and chess instruction. Each instructor is passionate about helping
            students reach their full potential.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {teachers.map((teacher, i) => (
            <div
              key={teacher.name}
              className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 card-hover reveal-on-scroll-scale"
            >
              {/* Colored left panel */}
              <div className={`${teacher.bg} md:w-[280px] flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10`}>
                <div className="w-28 h-28 rounded-full bg-white/25 flex items-center justify-center mb-4 ring-4 ring-white/30">
                  <span className="text-white font-heading text-4xl font-extrabold">
                    {teacher.initials}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white text-center">
                  {teacher.name}
                </h3>
                {teacher.role && (
                  <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mt-1 text-center">
                    {teacher.role}
                  </p>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-8 md:p-10 flex items-center">
                <p
                  className="text-lg text-accent/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: teacher.description }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-16 bg-light-gray rounded-2xl py-12 px-8 reveal-on-scroll">
          <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0-3h2v2H6zm0 6h8v2H6zm10 0h2v2h-2zm-4-3h6v2h-6z" />
          </svg>
          <h2 className="font-heading text-2xl font-bold text-primary mb-3">
            Ready to get started?
          </h2>
          <p className="text-lg text-accent/80 leading-relaxed max-w-[600px] mx-auto mb-6">
            Contact us to book a free trial and assessment for your child.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors btn-hover"
          >
            Contact us
          </a>
        </div>
      </div>
    </>
  );
}
