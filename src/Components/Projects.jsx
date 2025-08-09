import PROJECTS from '../constants';
import { motion } from 'motion/react';

const Projects = () => {
  return (
    <section className="relative pb-20  p-2" id="projects">
      {/* Decorative blurred circle */}
      <div className="absolute -top-16 left-0 w-60 h-60 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="text-4xl lg:text-5xl font-bold text-center my-20 tracking-wider text-white drop-shadow-lg"
      >
        <span className="text-pink-400">Pro</span>jects
      </motion.h2>
      <div className="space-y-24">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:items-start lg:flex-row lg:space-x-16 lg:px-40 group"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.2 }}
              className="lg:w-1/3 mb-10"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-indigo-500 group-hover:scale-105 group-hover:border-pink-400 transition-all duration-300">
                <img
                  src={project.image}
                  className="w-full lg:w-96 h-64 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-neutral-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.2 }}
              className="flex flex-col space-y-4 px-4 mb-20 items-start max-w-xl lg:w-2/3"
            >
              <h2 className="font-semibold text-2xl lg:text-3xl text-white group-hover:text-pink-400 transition-colors duration-300">
                {project.title}
              </h2>
              <p className="text-neutral-300 text-lg">{project.description}</p>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="my-2 py-2 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-indigo-600 transition-colors duration-300 text-center text-base"
              >
                Preview Site
              </a>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-neutral-900/80 border border-indigo-500/30 rounded-md py-1 px-3 text-sm font-medium text-indigo-300 group-hover:bg-pink-900/40 group-hover:text-pink-300 transition-colors duration-300"
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
