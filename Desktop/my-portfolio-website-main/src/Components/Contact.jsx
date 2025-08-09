import { motion } from 'motion/react';

const Contact = () => {
  return (
    <section className="relative lg:px-20 mb-20 " id="contact">
      {/* Decorative blurred circle */}
      <div className="absolute -top-16 right-0 w-60 h-60 bg-indigo-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <form
        action="https://getform.io/f/avrrnlya"
        method="post"
        className="flex flex-col space-y-6 max-w-4xl mx-auto px-4 py-10 bg-white/5 rounded-2xl shadow-2xl backdrop-blur-md"
      >
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl lg:text-5xl text-center my-10 tracking-wider font-bold text-white drop-shadow-lg">
            Contact <span className="text-pink-400">Me</span>
          </h2>
          <div className="text-center text-neutral-400 font-semibold text-sm mb-4">
            <h4>
              // Email:{' '}
              <span className="text-indigo-300">
                rafiullahrafat2049@gmail.com
              </span>
            </h4>
          </div>
        </motion.div>
        <motion.input
          required
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.2 }}
          type="text"
          name="name"
          placeholder="Your Name"
          className="max-w-3xl bg-neutral-900/80 w-full text-neutral-100 rounded-lg mx-auto p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-neutral-400 shadow-inner transition-all duration-200"
        />
        <motion.input
          required
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.2 }}
          type="email"
          name="email"
          placeholder="Your Email"
          className="max-w-3xl bg-neutral-900/80 w-full text-neutral-100 rounded-lg mx-auto p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-neutral-400 shadow-inner transition-all duration-200"
        />
        <motion.textarea
          required
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.2 }}
          name="message"
          placeholder="Your Message"
          rows="8"
          className="max-w-3xl bg-neutral-900/80 w-full text-neutral-100 rounded-lg mx-auto p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-neutral-400 shadow-inner transition-all duration-200 resize-none"
        ></motion.textarea>
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.2 }}
            className="py-3 px-10 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-indigo-600 transition-colors duration-300 text-lg tracking-wide"
          >
            Let's Collaborate
          </motion.button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
