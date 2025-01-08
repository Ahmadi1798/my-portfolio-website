import AboutMe from '../assets/about.jpg';
import { motion } from 'motion/react';
const About = () => {
  return (
    <section
      className=" flex justify-center items-center border-b border-neutral-900 pb-12 lg:pb-20  "
      id="about"
    >
      <div className="   ">
        <h2 className="text-4xl text-center my-20 tracking-wider ">
          About <span className="text-neutral-600"> Me</span>
        </h2>
        <div className="flex flex-col lg:flex-row lg:space-x-20">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center justify-center px-5 lg:px-0">
              <img src={AboutMe} alt="about" className="rounded-xl" />
            </div>
          </motion.div>
          <div className="w-full lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <p className="max-w-lg tracking-wide  text-sm lg:text-[1rem] leading-7 font-light px-6 py-6 lg:py-0 lg:px-0 mt-5 lg:mt-0">
                I am a dedicated and versatile full stack developer with a
                passion for creating efficient and user-friendly web
                applications. With 2+ years of professional experience, I have
                worked with a variety of technologies, including React, Node.js,
                Express.js PostgreSQL, and MongoDB. My journey in web
                development began with a deep curiosity for how things work, I
                thrive in collaborative environments and enjoy solving complex
                problems to deliver high-quality solutions. Outside of coding, I
                enjoy staying active, exploring new technologies, and
                contributing to open-source projects.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
