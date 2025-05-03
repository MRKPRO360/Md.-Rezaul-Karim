import Cta from '@/components/Cta/Cta';
import TextHighlight from '@/components/TextHighlight/TextHighlight';
import Image from 'next/image';
import skillImg from '../../../assets/images/skills.jpg';
import TextHeading from '@/components/TextHeading/TextHeading';
import badge from '../../../assets/images/badge-2.svg';

function About() {
  return (
    <div
      id="about"
      className="max-w-screen-xl px-3 xl:px-0 mx-auto my-20 md:my-28"
    >
      <div className="md:flex justify-between">
        <div className="flex-1 h-[380px] sm:h-[400px] md:h-[435px] relative">
          <Image
            className="object-cover object-center"
            src={skillImg}
            fill
            alt="skill image"
          />
        </div>
        <div className="basis-1/2">
          <TextHighlight text="about me" />
          <TextHeading text="A Little Bio About Me" />
          <div className="flex items-center gap-3 md:gap-0 mb-3 sm:mb-0">
            <div className="w-16 h-full my-4">
              <Image
                style={{ position: 'relative' }}
                className="object-cover object-bottom "
                src={badge}
                //   fill
                alt="skill image"
              />
            </div>
            <h5 className="md:leading-7 md:text-lg font-medium">
              Building with passion, one project at a time.
            </h5>
          </div>
          <p className="leading-7 text-gray-100/75 mb-4 md:mb-6">
            I&apos;m a Full Stack Developer with hands-on experience in
            volunteer projects using the MERN stack. I&apos;ve built responsive,
            scalable web apps and gained solid skills in both frontend and
            backend development. <br /> I enjoy turning ideas into real
            applications, writing clean code, and constantly learning. Working
            on community projects has helped me grow both technically and as a
            team player.
          </p>
          <Cta
            href="/doc/Md Rezaul Karim.pdf"
            download="Md.Rezaul Karim.pdf"
            text="Download CV"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
