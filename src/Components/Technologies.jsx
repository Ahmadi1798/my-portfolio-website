import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from 'motion/react';
import { FaGitAlt } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';

const techStack = [
  {
    icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
    label: 'React.js',
    border: 'border-cyan-400/30',
    bg: 'bg-cyan-900/10',
  },
  {
    icon: <SiRedux className="text-7xl text-purple-600" />,
    label: 'Redux',
    border: 'border-purple-600/30',
    bg: 'bg-purple-900/10',
  },
  {
    icon: <SiExpress className="text-7xl bg-white text-black rounded" />,
    label: 'Express.js',
    border: 'border-neutral-300/30',
    bg: 'bg-neutral-100/10',
  },
  {
    icon: <SiMongodb className="text-7xl text-green-500" />,
    label: 'MongoDB',
    border: 'border-green-500/30',
    bg: 'bg-green-900/10',
  },
  {
    icon: <FaGitAlt className="text-7xl text-orange-600" />,
    label: 'Git',
    border: 'border-orange-400/30',
    bg: 'bg-orange-900/10',
  },
  {
    icon: <FaNodeJs className="text-7xl text-green-500" />,
    label: 'Node.js',
    border: 'border-green-400/30',
    bg: 'bg-green-900/10',
  },
  {
    icon: <BiLogoPostgresql className="text-7xl text-sky-700" />,
    label: 'PostgreSQL',
    border: 'border-sky-700/30',
    bg: 'bg-sky-900/10',
  },
  {
    icon: <FaGithub className="text-7xl text-neutral-200" />,
    label: 'GitHub',
    border: 'border-neutral-400/30',
    bg: 'bg-neutral-800/10',
  },
  {
    icon: <SiTailwindcss className="text-7xl text-teal-300" />,
    label: 'Tailwind CSS',
    border: 'border-teal-300/30',
    bg: 'bg-teal-900/10',
  },
];

const Technologies = () => {
  const iconAnimation = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  });

  return (
    <section className="relative  pb-24 p-1" id="technologies">
      {/* Decorative blurred circle */}
      <div className="absolute -top-16 right-0 w-60 h-60 bg-indigo-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="text-center text-4xl lg:text-5xl font-bold my-20 tracking-wider text-white drop-shadow-lg"
      >
        <span className="text-pink-400">Tech</span>nologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-8"
      >
        {techStack.map((tech, idx) => (
          <motion.div
            key={tech.label}
            variants={iconAnimation(2 + idx * 0.5)}
            initial="initial"
            animate="animate"
            className={`flex flex-col items-center justify-center rounded-2xl border-4 ${tech.border} ${tech.bg} p-6 shadow-xl hover:scale-105 hover:border-pink-400 transition-transform duration-300 group`}
          >
            {tech.icon}
            <span className="mt-4 text-lg font-semibold text-neutral-200 group-hover:text-pink-400 transition-colors duration-200 tracking-wide">
              {tech.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <p className="mt-16 text-center text-neutral-400 text-lg max-w-2xl mx-auto">
        I love building with modern web technologies and always keep learning
        new tools to deliver the best user experiences.
      </p>
    </section>
  );
};

export default Technologies;
