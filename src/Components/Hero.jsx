import ProfilePic from '../assets/rafi.webp';
import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const socials = [
  {
    icon: <FaLinkedin />,
    url: 'https://linkedin.com/in/rafiullahahmadi',
    label: 'LinkedIn',
  },
  {
    icon: <FaGithub />,
    url: 'https://github.com/rafiullahahmadi',
    label: 'GitHub',
  },
  {
    icon: <FaEnvelope />,
    url: 'mailto:your.email@example.com',
    label: 'Email',
  },
];

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <section
      className="relative h-screen flex justify-center items-center my-20 lg:my-0 overflow-hidden"
      id="hero"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 "></div>
      <div className=" pb-4 lg:mb-20 w-full">
        <div className="flex flex-wrap my-20">
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center px-5 lg:px-0">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-[3.5rem] lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg"
            >
              Rafiullah Ahmadi
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-indigo-400 via-slate-400 to-pink-400 text-3xl lg:text-5xl text-transparent bg-clip-text font-semibold tracking-tight mt-2"
            >
              <Typewriter
                words={['Frontend Developer', 'MERN Stack Developer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-lg tracking-wider text-base lg:text-lg leading-7 font-light py-6 text-neutral-200"
            >
              Innovative and detail-oriented MERN Stack Developer with 3+ years
              of experience delivering responsive and user-focused web
              applications. Skilled in frontend development with React.js,
              Tailwind CSS, and modern JavaScript, complemented by strong
              backend expertise in Node.js, Express.js, and MongoDB. Proficient
              in building and integrating RESTful APIs to create seamless
              full-stack solutions. Adept at writing clean, maintainable code
              and developing high-performing applications that combine modern
              UI/UX design with robust backend functionality.
            </motion.p>
            {/* CTA Button */}
            <motion.a
              href="#contact"
              variants={container(1.3)}
              initial="hidden"
              animate="visible"
              className="inline-block mt-4 px-8 py-3 bg-indigo-600 hover:bg-pink-500 transition-colors duration-300 text-white font-semibold rounded-lg shadow-lg"
            >
              Contact Me
            </motion.a>
            {/* Social Icons */}
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="flex gap-6 mt-8"
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-2xl text-neutral-300 hover:text-pink-400 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>
          {/* Profile Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-end mt-10 pr-20 lg:mt-0">
            <motion.div
              initial={{ x: 100, opacity: 0, rotate: 8 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="relative rounded-2xl shadow-2xl group"
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-indigo-400/30 via-white/10 to-pink-400/30 blur-xl opacity-60"></div>
              <img
                src={ProfilePic}
                alt="profile"
                width="350"
                className="rounded-2xl border-4 border-neutral-200 shadow-lg group-hover:scale-105 transition-transform duration-300"
                style={{
                  boxShadow:
                    '0 8px 32px 0 rgba(60,60,90,0.18), 0 0 40px 0 rgba(139,92,246,0.15), 0 0 80px 0 rgba(236,72,153,0.10)',
                  background: 'rgba(255,255,255,0.05)',
                }}
              />
              {/* Glass overlay for effect */}
              <div className="absolute rounded-2xl top-0 left-0 right-0 bottom-0 bg-white/5 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
