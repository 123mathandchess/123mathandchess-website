import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Weekly Classes",
  description: "We offer year-round Math classes in 2-hour sessions from Monday to Sunday.",
};

export default function WeeklyClassesPage() {
  return (
    <>
      <section className="bg-accent py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="font-heading text-[30px] font-extrabold text-white">Weekly Classes</h1>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-16 space-y-16">
        {/* Intro */}
        <section>
          <p className="text-lg text-accent/80 leading-relaxed mb-4">
            We offer year-round Math classes in <strong>2-hour sessions</strong> from Monday to Sunday.
          </p>
          <div className="bg-accent text-white rounded-lg p-6 inline-block">
            <p className="font-heading text-xl font-extrabold mb-2">Tuition Fee:</p>
            <p>Individual: $57 / session</p>
            <p>Family: $56 / session</p>
          </div>
        </section>

        {/* Grade 3-7 */}
        <section className="border-l-4 border-primary pl-6">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            Grade 3 to 7 Elementary Math & Problem Solving Class
          </h2>
          <p className="text-lg text-accent/80 leading-relaxed mb-6 max-w-[770px]">
            These courses help students build a solid foundation in Math and get well prepared for
            high level math courses, mini-school, enriched math, accelerated programs or private
            school entrance examinations.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors"
          >
            Inquire now
          </Link>
        </section>

        {/* Grade 8-12 */}
        <section className="border-l-4 border-primary pl-6">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            Grade 8 to 12 High School Math & Calculus
          </h2>
          <p className="text-lg text-accent/80 leading-relaxed mb-4 max-w-[770px]">
            Students bring their school problems to class. Our teachers can help them to solve problems.
          </p>
          <p className="text-lg text-accent/80 leading-relaxed mb-4 max-w-[770px]">
            These courses aimed at helping students master the concepts and be well prepared for
            quizzes, tests and provincial math examinations.
          </p>
          <p className="text-lg text-accent/80 leading-relaxed mb-6 max-w-[770px]">
            We also help students advance their math so that they can complete their high school
            math earlier. Students will be getting ready to take SAT examination as well.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors"
          >
            Inquire now
          </Link>
        </section>

        {/* Summer Program */}
        <section className="border-l-4 border-orange-accent pl-6">
          <h2 className="font-heading text-2xl font-bold text-orange-accent mb-4">
            Summer Program (July & August)
          </h2>
          <p className="text-lg text-accent/80 leading-relaxed mb-6 max-w-[770px]">
            Our <strong>Summer Program</strong> offers an exciting opportunity for students to get
            ahead in their studies or catch up on challenging topics.
          </p>
          <Link
            href="/summer-program"
            className="inline-block bg-orange-accent text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:brightness-90 transition-all"
          >
            Learn more
          </Link>
        </section>

        {/* Chess */}
        <section className="border-l-4 border-green-accent pl-6">
          <h2 className="font-heading text-2xl font-bold text-green-accent mb-4">
            International Chess Coaching (Age 3+)
          </h2>
          <p className="text-lg text-accent/80 leading-relaxed mb-4 max-w-[770px]">
            Taught by Toni Deline, he is a candidate Chess Master, a former BC Chess Federation
            President, a former World Chess Marathon Chess Champion, a certified National Tournament
            Director (NTD) and the captain of the Vancouver Chess Team from 2004 to 2007.
          </p>
          <p className="text-lg text-accent/80 leading-relaxed mb-4 max-w-[770px]">
            As a dedicated coach, Toni has mentored numerous B.C. elementary school chess champions.
            One of his notable achievements includes coaching the first runner-up in the Girls Under 8
            division at the 2009 Canadian Youth Chess Championships. This talented student went on to
            qualify for the World Youth Championships in Turkey.
          </p>
          <p className="text-lg text-accent/80 leading-relaxed mb-6 max-w-[770px]">
            With his expertise and guidance, students gain a well-rounded understanding of chess,
            preparing them for success.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors"
          >
            Inquire now
          </Link>
        </section>

        {/* Science */}
        <section className="border-l-4 border-blue-accent pl-6">
          <h2 className="font-heading text-2xl font-bold text-blue-accent mb-4">Science</h2>
          <p className="text-lg text-accent/80 leading-relaxed mb-6 max-w-[770px]">
            Our <strong>Physics and Chemistry tutoring lessons</strong> for Grade 10 students and
            above offer personalized instruction to strengthen foundational concepts and tackle
            advanced topics.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors"
          >
            Inquire now
          </Link>
        </section>
      </div>
    </>
  );
}
