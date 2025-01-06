import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from 'motion/react';
const SociailIcons = () => {
  const iconAnimation = (duration) => ({
    initial: { x: -10 },
    animate: {
      x: [10, -10],
      transition: {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  });
  return (
    <div className=" hidden lg:flex  fixed h-screen top-[35%] left-0 bottom-0">
      <ul>
        <motion.li
          variants={iconAnimation(1)}
          initial="initial"
          animate="animate"
          className="w-[160px] h-[60px] flex items-center justify-center  ml-[-100px]  hover:ml-[-10px] duration-300 bg-blue-600 pl-4 p-2  rounded-md"
        >
          <a
            href="https://af.linkedin.com/in/rafiullah-ahmadi-70650325a"
            className="flex w-full items-center justify-between text-gray-300 text-[1rem] font-semibold"
          >
            Linkedin <FaLinkedin size={50} />
          </a>
        </motion.li>
        <motion.li
          variants={iconAnimation(2)}
          initial="initial"
          animate="animate"
          className="w-[160px] h-[60px] flex items-center justify-center  ml-[-100px]  hover:ml-[-10px] duration-500 bg-neutral-900 pl-4 p-2 rounded-md"
        >
          <a
            href="https://github.com/Ahmadi1798"
            className="flex w-full items-center justify-between text-gray-300 text-[1rem] font-semibold"
          >
            Github <FaGithub size={50} />
          </a>
        </motion.li>
        <motion.li
          variants={iconAnimation(3)}
          initial="initial"
          animate="animate"
          className="w-[160px] h-[60px] flex items-center justify-center  ml-[-100px]  hover:ml-[-10px] duration-300 bg-red-600 pl-4 p-2 rounded-md"
        >
          <a
            href="https://www.instagram.com/ahmadi_1798/"
            className="flex w-full items-center justify-between text-gray-300 text-[1rem] font-semibold"
          >
            Instagram <FaInstagram size={50} />
          </a>
        </motion.li>
        <motion.li
          variants={iconAnimation(3)}
          initial="initial"
          animate="animate"
          className="w-[160px] h-[60px] flex items-center justify-center  ml-[-100px]  hover:ml-[-10px] duration-300 bg-neutral-900 pl-4 p-2 rounded-md"
        >
          <a
            href="https://x.com/rafiullah_rafat"
            className="flex w-full items-center justify-between text-gray-300 text-[1rem] font-semibold"
          >
            Twitter <FaSquareXTwitter size={50} />
          </a>
        </motion.li>
      </ul>
    </div>
  );
};
export default SociailIcons;
