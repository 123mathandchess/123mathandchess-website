import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Teachers",
  description: "With over two decades of experience in teaching mathematics, Maria Ho is the cornerstone of our Centre.",
};

const teachers = [
  {
    name: "Maria Ho",
    description:
      "With over two decades of experience in teaching mathematics, Maria Ho is the cornerstone of our Centre. Holding a B.Sc. in Mathematics with a minor in Statistics, she has an extensive teaching background both in Hong Kong and Canada. Maria's teaching philosophy revolves around making math accessible and engaging to all students, inspiring them to achieve their full potential.",
    initials: "MH",
    bg: "bg-blue-accent",
  },
  {
    name: "William Lau",
    description:
      "William Lau brings a wealth of knowledge in mathematics and engineering to our Centre. A graduate in Electrical Engineering from the University of Hong Kong, he also holds a Postgraduate Certificate in Education. William has been instrumental in helping many Greater Vancouver students excel in Mathematics and AP Calculus since 1995.",
    initials: "WL",
    bg: "bg-green-accent",
  },
  {
    name: "Paul Larm",
    description:
      "Paul Larm, a certified teacher with over ten years of experience, has a degree in Mechanical Engineering from the University of Hong Kong. His engineering background, combined with his passion for teaching, allows him to bring a practical, real-world perspective to math and science education.",
    initials: "PL",
    bg: "bg-secondary",
  },
  {
    name: "Daniel Lai",
    description:
      "Daniel Lai, certified in both Hong Kong and Canada, is our Math and Physics expert. He holds three degrees – a B.Sc. in Mathematics and Statistics, a second B.Sc. from UBC, and a B.Ed. from UBC. His dual expertise in math and science makes him an invaluable resource for students looking to excel in both areas.",
    initials: "DL",
    bg: "bg-orange-accent",
  },
  {
    name: "Toni Deline",
    role: "Chess Coach",
    description:
      "A candidate Chess Master and former President of the BC Chess Federation, Toni Deline has a remarkable track record in chess instruction. His experience as a World Chess Marathon Chess Champion and a certified National Tournament Director enriches our chess program, making it one of the best in the region.",
    initials: "TD",
    bg: "bg-primary",
  },
];

export default function OurTeachersPage() {
  return (
    <>
      <section className="bg-accent py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="font-heading text-[30px] font-extrabold text-white">Our Teachers</h1>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="space-y-12">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Avatar placeholder */}
              <div
                className={`${teacher.bg} w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0`}
              >
                <span className="text-white font-heading text-3xl font-extrabold">
                  {teacher.initials}
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-1">
                  {teacher.name}
                </h3>
                {teacher.role && (
                  <p className="text-sm text-accent/60 font-semibold uppercase tracking-wide mb-2">
                    {teacher.role}
                  </p>
                )}
                <p className="text-lg text-accent/80 leading-relaxed">
                  {teacher.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
