import TextHeading from '@/components/TextHeading/TextHeading';

import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    year: '2022',
    title: 'Open Source Contributor - GitHub',
    description:
      'Contributed to React-based projects, fixing bugs and improving UI components.',
  },

  {
    year: '2022',
    title: 'Group Project',
    description:
      'Developed websites using the MERN stack, handling both frontend and backend.',
  },

  {
    year: '2020',
    title: 'Assitant Teacher - Dhanikunda Nurani Madrasa',
    description:
      'Provided interactive instruction in Bangla, English, and Math, helping students build strong foundational skills.',
  },
];

const education = [
  {
    year: '2024',
    title: 'Bachelor’s Degree – National University',
    description:
      'Completed a Bachelor’s degree in Physics with a strong interest in problem-solving, logical reasoning, and scientific thinking.',
  },
  {
    year: '2022',
    title: 'Full-Stack Web Development – Self-Taught / Online Learning',
    description:
      'Completed several online courses and hands-on projects focused on MERN stack, web technologies, and software development best practices.',
  },
  {
    year: '2022',
    title: 'Web Development Courses – Various Platforms',
    description:
      'Completed courses on platforms like Programmng Hero, Udemy, and YouTube covering JavaScript, React, Node.js, and database systems.',
  },
];

function Experience() {
  return (
    <div className="bg-backgroundLight py-6">
      <div className="max-w-screen-xl px-3 xl:px-0 mx-auto my-10 md:my-20 ">
        <div className="text-center mb-6 md:mb-10">
          <TextHeading text="Experience & Education" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-[3px] border-dotted border-gray-700 pb-2">
              Experience
            </h3>
            <ul className="space-y-6">
              {experiences.map((el, index) => (
                <ExperienceCard key={index} info={el} />
              ))}
            </ul>
          </div>
          {/* Education Section */}
          <div className="mb-6 lg:mb-8">
            <h3 className="text-xl font-semibold mb-4 border-b-[3px] border-dotted border-gray-700 pb-2">
              Education
            </h3>
            <ul className="space-y-6">
              {education.map((el, index) => (
                <ExperienceCard key={index} info={el} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
