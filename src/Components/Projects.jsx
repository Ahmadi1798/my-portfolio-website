import PROJECTS from '../constants';
import { motion } from 'motion/react';

const Projects = () => {
  return (
    <section className="border-b border-neutral-900 pb-4" id="projects">
      <motion.h2
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="text-4xl text-center my-20 tracking-wider"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:items-start lg:flex-row lg:space-x-16  lg:px-40 "
          >
            <motion.div
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.2 }}
              className="lg:w-1/4 mb-10"
            >
              <img
                src={project.image}
                className="rounded-md w-full lg:w-80  px-4 lg:px-0"
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.2 }}
              className="flex flex-col space-y-3 px-4 mb-20 items-start max-w-xl lg:w-3/4"
            >
              <h2 className="font-semibold text-xl lg:text-2xl">
                {project.title}
              </h2>
              <p className="text-neutral-400">{project.description}</p>
              <a
                href={project.liveLink}
                className="my-2 py-2 px-4 border border-gray-200 text-gray-200  hover:bg-gray-200 hover:text-neutral-950 text-center text-sm"
              >
                Preview Site
              </a>
              <div className="flex flex-wrap gap-2 ">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 bg-neutral-900 rounded-md py-1 px-2 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
