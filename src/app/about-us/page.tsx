import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About 123 Math & Chess | Vancouver Tutoring Since 2006",
  description: "Vancouver's trusted math tutoring and chess coaching centre since 2006. Small classes of 5 students, BC-certified teachers, free trial and assessment tests. Located on Granville Street, Vancouver BC.",
};

const longTermStudents = [
  { name: "Jonathan Ng", gradeEnrolled: 5, gradeCompleted: "12 + Calculus", school: "St. Georges" },
  { name: "Carmen Lau", gradeEnrolled: 5, gradeCompleted: "12 + Calculus", school: "Point Grey" },
  { name: "May Lin", gradeEnrolled: 5, gradeCompleted: "12", school: "Point Grey" },
  { name: "Jenny Liao", gradeEnrolled: 7, gradeCompleted: "12", school: "Eric Hamber" },
  { name: "David Lau", gradeEnrolled: 6, gradeCompleted: "12 + Calculus", school: "David Thompson" },
  { name: "Eva Mak", gradeEnrolled: 7, gradeCompleted: "12 + Calculus", school: "Prince of Wales" },
  { name: "RoseMary Ching", gradeEnrolled: 7, gradeCompleted: "12 + Calculus", school: "Crofton House" },
  { name: "Iris Chia", gradeEnrolled: 7, gradeCompleted: "12 + Calculus", school: "York House" },
  { name: "William Chia", gradeEnrolled: 6, gradeCompleted: "12", school: "West Point Grey A." },
  { name: "Jocelyn Chan", gradeEnrolled: 7, gradeCompleted: "12 + Calculus", school: "West Point Grey" },
  { name: "David Yung", gradeEnrolled: 7, gradeCompleted: "12 + Calculus", school: "Eric Hamber" },
  { name: "Nelson Leung", gradeEnrolled: 7, gradeCompleted: "12 + Calculus", school: "St. Georges" },
  { name: "Thomson Lai", gradeEnrolled: 3, gradeCompleted: "12 + Calculus", school: "Burnett" },
  { name: "Catherine Wong", gradeEnrolled: 7, gradeCompleted: "12 + Calculus", school: "Little Flower A." },
  { name: "Linda Cheung", gradeEnrolled: 7, gradeCompleted: "12 + Calculus", school: "Eric Hamber" },
  { name: "Kenneth Auyyeng", gradeEnrolled: 5, gradeCompleted: "12 + Calculus", school: "Burnett" },
  { name: "Venus Ip", gradeEnrolled: 7, gradeCompleted: "12 + Calculus", school: "Crofton House" },
  { name: "Andy Yao", gradeEnrolled: 6, gradeCompleted: "12 + Calculus", school: "Point Grey" },
  { name: "Heidi Choi", gradeEnrolled: 7, gradeCompleted: "12 + Calculus", school: "Magee" },
  { name: "Jovita Vytasek", gradeEnrolled: 7, gradeCompleted: "12", school: "West Point Grey" },
  { name: "Danielle Brimo", gradeEnrolled: 8, gradeCompleted: "12", school: "York House" },
  { name: "Anthony Yung", gradeEnrolled: 7, gradeCompleted: "12", school: "Magee" },
  { name: "Fred Cheung", gradeEnrolled: 5, gradeCompleted: "12 + Calculus", school: "Magee" },
  { name: "Anthony Cheung", gradeEnrolled: 6, gradeCompleted: "12 + Calculus", school: "Magee" },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero with background image */}
      <section
        className="relative bg-cover bg-center flex items-center min-h-[325px]"
        style={{ backgroundImage: "url('/Depositphotos_208731480_XL-1.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/55 to-[#811E37]" />
        <div className="relative max-w-[1280px] mx-auto px-6 pb-[40px] w-full text-center">
          <h1 className="font-heading text-[48px] leading-[54px] md:text-[48px] md:leading-[56px] lg:text-[55px] lg:leading-[56px] font-bold text-white [text-shadow:1px_2px_1px_#474747] max-w-[600px] mx-auto">
            About Vancouver's Math &amp; Chess Centre
          </h1>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-16 space-y-16">
        {/* Started in 2006 */}
        <section className="text-center reveal-on-scroll">
          <h2 className="font-heading text-[30px] font-extrabold text-primary mb-4">Started in 2006 in Vancouver</h2>
          <p className="text-lg text-accent/80 leading-relaxed max-w-[770px] mx-auto">
            <strong>For almost 20 years</strong>, we&apos;ve had the joy of watching countless students
            grow, learn, and achieve what they want. Thank you for being a part of our story.
          </p>
        </section>

        {/* Why 123? - Split section with orange bg */}
        <section className="flex flex-col lg:flex-row min-h-[400px]">
          {/* Left: Image */}
          <div
            className="lg:w-1/2 min-h-[300px] lg:min-h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/Depositphotos_106031698_XL-1.webp')" }}
          />
          {/* Right: Orange content */}
          <div className="lg:w-1/2 flex items-center bg-orange-accent px-6 py-16 lg:px-[80px]">
            <div>
              <h2 className="font-heading text-[30px] font-extrabold text-white mb-4">Why 123?</h2>
              <p className="text-white text-lg leading-relaxed mb-4">
                123 Math &amp; Chess have <strong>18+ years of excellent tutoring service</strong>, with most
                students coming through referrals. Our programs follow{' '}
                <strong>BC Ministry of Education guidelines and help students to advance their math level</strong>.
              </p>
              <p className="text-white text-lg leading-relaxed mb-6">
                Classes are <strong>limited to 5 students</strong> for individual attention. All instructors
                are certified teachers or experienced tutors with relevant degrees. We provide <strong>a positive
                learning environment with proven success and long-term student relationships</strong>.
              </p>
              <Link
                href="/our-teachers"
                className="inline-block bg-white text-orange-accent font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-gray-100 transition-colors btn-hover"
              >
                Our teachers
              </Link>
            </div>
          </div>
        </section>

        {/* Long-term students table */}
        <section className="reveal-on-scroll">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4 text-center">
            Students Who Have Stayed With Us Long-Term
          </h2>
          <p className="text-lg text-accent/80 leading-relaxed mb-4 max-w-[770px] mx-auto text-center">
            We have been maintaining long-term relationships and mutual trust with our students
            in Vancouver. We've grown almost entirely through word of mouth. Our students
            mainly come from referral.
          </p>
          <p className="text-lg text-accent/80 leading-relaxed mb-6 max-w-[770px] mx-auto text-center">
            The following students enrolled when they were in elementary or at Grade 8 and stayed
            with us until they graduated from their high school.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-white border-b-2 border-gray-300">
                  <th className="text-left p-4 font-heading text-accent border-r border-gray-300">Name</th>
                  <th className="text-left p-4 font-heading text-accent border-r border-gray-300">Grade Enrolled</th>
                  <th className="text-left p-4 font-heading text-accent border-r border-gray-300">Grade Completed @ 123</th>
                  <th className="text-left p-4 font-heading text-accent">School</th>
                </tr>
              </thead>
              <tbody>
                {longTermStudents.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 border-b border-r border-gray-300">{s.name}</td>
                    <td className="p-4 border-b border-r border-gray-300">{s.gradeEnrolled}</td>
                    <td className="p-4 border-b border-r border-gray-300">{s.gradeCompleted}</td>
                    <td className="p-4 border-b border-gray-300">{s.school}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Advance Your Studies */}
        <section className="flex flex-col lg:flex-row min-h-[350px]">
          <div
            className="lg:w-1/2 min-h-[300px] lg:min-h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/Depositphotos_415729792_XL-1.webp')" }}
          />
          <div className="lg:w-1/2 flex items-center bg-white px-6 py-16 lg:px-[80px]">
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                Advance Your Studies
              </h2>
              <p className="text-lg text-accent/80 leading-relaxed mb-4">
                We offer programs that advance math levels for{' '}
                <strong>elementary and high school students</strong>.
              </p>
              <p className="text-lg text-accent/80 leading-relaxed mb-6">
                We help students <strong>achieve excellent results in private school entrance exams (SAT, PSAT)
                &amp; special program entrance exams (enrichment, accelerated, AP, Honour, IB classes)</strong>.
              </p>
              <Link
                href="/weekly-classes"
                className="inline-block bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors btn-hover"
              >
                Our programs
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
