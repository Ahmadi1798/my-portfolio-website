import ProfilePic from '../assets/myimage.png';
import { motion } from 'motion/react';
const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });
  return (
    <section
      className="h-screen flex justify-center items-center mt-10 lg:mt-0 "
      id="hero"
    >
      <div className="border-b border-neutral-900 pb-4 lg:mb-20 w-full mt-20">
        <div className="flex flex-wrap my-20">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="text-[3.5rem] pl-5 lg:pl-0 pt-10 lg:pt-0 lg:pb-12 font-thin tracking-tight lg:text-8xl text-left "
              >
                Rafiullah Ahmadi
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r pl-5 lg:pl-0 from-indigo-500 via-slate-500 to-pink-500 text-4xl text-transparent bg-clip-text tracking-tight"
              >
                Frontend Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="max-w-lg tracking-wider text-sm lg:text-[1rem] leading-7  font-light py-6 px-6 lg:px-0"
              >
                I’m a Frontend Developer with 2+ years of experience
                specializing in building responsive, user-friendly websites
                using HTML, CSS, JavaScript, React, and Tailwind CSS. I focus on
                clean, efficient code and delivering exceptional user
                experiences. While my expertise lies in frontend development, I
                also have beginner-level experience with backend technologies
                like Node.js, Express.js, PostgreSQL, and MongoDB, allowing me
                to contribute to full-stack applications and ensure seamless
                integration between frontend and backend systems.
              </motion.p>
            </div>
          </div>
          {/* Profile Image */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="relative rounded-xl px-5 lg:px-0"
              >
                <img
                  src={ProfilePic}
                  alt="profile image"
                  width="550px"
                  className="rounded-xl"
                />
                <div className="absolute rounded-xl top-0 left-0 right-0 bottom-0 bg-neutral-950 bg-opacity-50"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
