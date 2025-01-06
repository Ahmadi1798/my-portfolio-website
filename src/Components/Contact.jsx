import { motion } from 'motion/react';

const Contact = () => {
  return (
    <section className="lg:px-20 mb-20 " id="contact">
      <form
        action="https://getform.io/f/avrrnlya"
        method="post"
        className="flex flex-col space-y-5 max-w-4xl mx-auto"
      >
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl text-center my-16 tracking-wider">
            Contact <span className="text-neutral-600"> Me</span>
          </h2>
          <div className=" pl-[4.5rem] lg:pl-16 text-neutral-500 font-semibold text-sm">
            <h4>// Email: rafiullahrafat2049@gmail.com</h4>
          </div>
        </motion.div>
        <motion.input
          required
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.2 }}
          type="text"
          name="name"
          placeholder="Name"
          className="max-w-3xl bg-gray-200 w-[22rem] lg:w-full text-neutral-900 rounded-sm mx-auto p-2 focus:outline-none placeholder:text-neutral-950 "
        />
        <motion.input
          required
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.2 }}
          type="email"
          name="email"
          placeholder="Email"
          className="max-w-3xl bg-gray-200 w-[22rem] lg:w-full text-neutral-900 rounded-sm mx-auto p-2 focus:outline-none placeholder:text-neutral-950 "
        />
        <motion.textarea
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.2 }}
          name="message"
          placeholder="message"
          rows="10"
          className="max-w-3xl bg-gray-200 w-[22rem] lg:w-full text-neutral-900 rounded-sm mx-auto p-2 focus:outline-none placeholder:text-neutral-950"
        ></motion.textarea>
        <div className="flex flex-col items-start pl-[4.5rem] lg:pl-[4rem]">
          <motion.button
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.2 }}
            className="  py-2 border border-gray-200 text-gray-200 w-40 hover:bg-gray-200 hover:text-neutral-950 "
          >
            Let's Collabrate
          </motion.button>
        </div>
      </form>
    </section>
  );
};
export default Contact;
