import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description: "For almost 20 years, we've had the joy of watching countless students grow, learn, and achieve what they want. Thank you for being a part of our story.",
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
      {/* Page header */}
      <section className="bg-accent py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="font-heading text-[30px] font-extrabold text-white">About Us</h1>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-16 space-y-16">
        {/* Started in 2006 */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">Started in 2006</h2>
          <p className="text-lg text-accent/80 leading-relaxed max-w-[770px]">
            <strong>For almost 20 years</strong>, we&apos;ve had the joy of watching countless students
            grow, learn, and achieve what they want. Thank you for being a part of our story.
          </p>
        </section>

        {/* Why 123? */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">Why 123?</h2>
          <p className="text-lg text-accent/80 leading-relaxed max-w-[770px] mb-4">
            123 Math & Chess have <strong>18+ years of excellent tutoring service</strong>, with most
            students coming through referrals. Our programs follow{' '}
            <strong>BC Ministry of Education guidelines and help students to advance their math level</strong>.
          </p>
          <p className="text-lg text-accent/80 leading-relaxed max-w-[770px] mb-4">
            Classes are <strong>limited to 5 students</strong> for individual attention. All instructors
            are certified teachers or experienced tutors with relevant degrees. We provide a positive
            learning environment with proven success and long-term student relationships.
          </p>
          <Link
            href="/our-teachers"
            className="inline-block bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors mt-4"
          >
            Our teachers
          </Link>
        </section>

        {/* Long-term students */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            18+ Years of Excellent Tutoring Service
          </h2>
          <p className="text-lg text-accent/80 leading-relaxed mb-6 max-w-[770px]">
            We have been maintaining a long term relationship and mutual trust with our students.
            It is not our usual practice to put into too much effort on advertisement. Our students
            mainly come from referral.
          </p>
          <p className="text-lg text-accent/80 leading-relaxed mb-6">
            The following students enrolled when they were in elementary or at Grade 8 and stayed
            with us until they graduated from their high school.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-accent text-white">
                  <th className="text-left p-3 font-heading">Name</th>
                  <th className="text-left p-3 font-heading">Grade Enrolled</th>
                  <th className="text-left p-3 font-heading">Grade Completed @ 123</th>
                  <th className="text-left p-3 font-heading">School</th>
                </tr>
              </thead>
              <tbody>
                {longTermStudents.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 border-b border-gray-200">{s.name}</td>
                    <td className="p-3 border-b border-gray-200">{s.gradeEnrolled}</td>
                    <td className="p-3 border-b border-gray-200">{s.gradeCompleted}</td>
                    <td className="p-3 border-b border-gray-200">{s.school}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Advance Your Studies */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            Advance Your Studies
          </h2>
          <p className="text-lg text-accent/80 leading-relaxed max-w-[770px] mb-4">
            We offer programs that advance math levels for{' '}
            <strong>elementary and high school students</strong>.
          </p>
          <p className="text-lg text-accent/80 leading-relaxed max-w-[770px] mb-6">
            We help students achieve excellent results in private school entrance exams (SAT, PSAT)
            & special program entrance exams (enrichment, accelerated, AP, Honour, IB classes).
          </p>
          <Link
            href="/weekly-classes"
            className="inline-block bg-primary text-white font-heading text-2xl font-bold px-[30px] py-5 rounded-md hover:bg-secondary transition-colors"
          >
            Our programs
          </Link>
        </section>
      </div>
    </>
  );
}
