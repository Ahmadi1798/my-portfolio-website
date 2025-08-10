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
  hidden: { x: -40, opacity: 0 }, // smaller offset for mobile
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
});

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-visible bg-neutral-900"
    >
      {/* Subtle animated glow background (kept behind with -z-10) */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-indigo-900/40 via-fuchsia-900/20 to-sky-900/40" />

      <div className="w-full px-4 sm:px-6 lg:px-10 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-center lg:items-stretch">
          {/* Text Column */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg"
            >
              Rafiullah Ahmadi
            </motion.h1>

            {/* Gradient typed subtitle */}
            <motion.span
              variants={container(0.15)}
              initial="hidden"
              animate="visible"
              className="mt-3 inline-block bg-gradient-to-r from-indigo-300 via-slate-200 to-pink-300 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight"
            >
              <Typewriter
                words={['Frontend Developer', 'MERN Stack Developer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1400}
              />
            </motion.span>

            <motion.p
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="max-w-xl text-neutral-200/90 text-sm sm:text-base lg:text-lg leading-7 font-light py-6"
            >
              Innovative and detail-oriented MERN Stack Developer with 3+ years
              of experience delivering responsive and user-focused web
              applications. Skilled in frontend development with React.js,
              Tailwind CSS, and modern JavaScript, complemented by strong
              backend expertise in Node.js, Express.js, and MongoDB. Proficient
              in building and integrating RESTful APIs to create seamless
              full-stack solutions.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              variants={container(0.45)}
              initial="hidden"
              animate="visible"
              className="inline-block mt-2 px-6 py-3 sm:px-8 bg-indigo-600 hover:bg-pink-500 transition-colors duration-300 text-white font-semibold rounded-lg shadow-lg"
            >
              Contact Me
            </motion.a>

            {/* Social Icons */}
            <motion.div
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="flex gap-5 sm:gap-6 mt-6"
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-xl sm:text-2xl text-neutral-300 hover:text-pink-400 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-2 lg:mt-0">
            <motion.div
              initial={{ x: 40, opacity: 0, rotate: 3 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="relative rounded-2xl shadow-2xl group"
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-indigo-400/30 via-white/10 to-pink-400/30 blur-xl opacity-60" />
              <img
                src={ProfilePic}
                alt="profile"
                width="320"
                className="rounded-2xl border border-white/20 sm:border-2 shadow-lg group-hover:scale-105 transition-transform duration-300"
                style={{
                  boxShadow:
                    '0 8px 32px 0 rgba(60,60,90,0.18), 0 0 40px 0 rgba(139,92,246,0.15), 0 0 80px 0 rgba(236,72,153,0.10)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-white/5 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
