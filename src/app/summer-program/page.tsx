import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Summer Classes",
  description: "Our Summer Program offers an exciting opportunity for students to get ahead in their studies or catch up on challenging topics. These Math classes are offered during July & August.",
};

export default function SummerProgramPage() {
  return (
    <>
      <section className="bg-accent py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="font-heading text-[30px] font-extrabold text-white">Summer Classes</h1>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-16 space-y-16">
        {/* Math */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            Challenging Math and Problem Solving (Grades 3-12)
          </h2>
          <p className="text-lg text-accent/80 leading-relaxed mb-6 max-w-[770px]">
            Our Summer Program offers an exciting opportunity for students to get ahead in their
            studies or catch up on challenging topics. These Math classes are offered during July
            & August each year in <strong>2-hour sessions</strong> from Monday to Sunday.
          </p>

          <div className="bg-accent text-white rounded-lg p-6 inline-block mb-6">
            <p className="font-heading text-xl font-extrabold mb-2">Tuition Fee:</p>
            <p>Individual: $57 / session</p>
            <p>Family: $56 / session</p>
          </div>

          <div>
            <Link
              href="/contact-us"
              className="inline-block bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors"
            >
              Inquire now
            </Link>
          </div>
        </section>

        {/* Chess */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
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
      </div>
    </>
  );
}
