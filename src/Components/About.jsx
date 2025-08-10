import AboutMe from '../assets/about.webp';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section
      className="relative flex justify-center items-center  py-16 lg:pb-28"
      id="about"
    >
      {/* Decorative blurred circle */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center my-16 tracking-wider text-white drop-shadow-lg">
          About <span className="text-pink-400">Me</span>
        </h2>
        <div className="flex flex-col lg:flex-row lg:space-x-32 items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0"
          >
            <div className="relative group">
              <img
                src={AboutMe}
                alt="About"
                className="rounded-2xl shadow-2xl border-4 border-indigo-500 group-hover:scale-105 transition-transform duration-300 object-cover  md:h-[500px]"
                style={{
                  boxShadow:
                    '0 0 40px 0 rgba(139,92,246,0.25), 0 0 80px 0 rgba(236,72,153,0.15)',
                }}
              />
              {/* Overlay for effect */}
              <div className="absolute inset-0 rounded-2xl bg-neutral-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>
          <div className="w-full lg:w-1/2 ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center items-center lg:items-start "
            >
              <div className="w-full md:p-4 text-neutral-200 bg-white/5  rounded-xl shadow-inner ">
                <p className="max-w-lg tracking-wide text-base lg:text-lg leading-7 font-light px-6 py-6  lg:py-0 lg:px-0 mt-2 ">
                  I am a dedicated and versatile{' '}
                  <span className="text-indigo-400 font-medium">
                    full stack developer
                  </span>{' '}
                  with a passion for creating efficient and user-friendly web
                  applications. With{' '}
                  <span className="text-pink-400 font-medium">3+ years</span> of
                  professional experience, I have worked with a variety of
                  technologies, including{' '}
                  <span className="text-indigo-300">
                    React, Node.js, Express.js, PostgreSQL, and MongoDB
                  </span>
                  .
                  <br />
                  <br />
                  My journey in web development began with a deep curiosity for
                  how things work. I thrive in collaborative environments and
                  enjoy solving complex problems to deliver high-quality
                  solutions. Outside of coding, I enjoy staying active,
                  exploring new technologies, and contributing to open-source
                  projects.
                </p>
              </div>
              {/* Optional: Add a CV download button */}
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-pink-500 hover:to-indigo-600 transition-colors duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
