import logo from '../assets/mylogo.png';
import { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { GiTechnoHeart } from 'react-icons/gi';
import { IoCodeWorkingSharp } from 'react-icons/io5';

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const toggleClose = () => {
    setIsToggleOpen(false);
  };
  return (
    <header
      className="relative z-20 my-5 w-full border-b border-slate-200 bg-transparent shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden"
      id="navbar"
    >
      <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex h-[4.5rem] items-stretch justify-between font-medium text-slate-700"
          role="navigation"
        >
          {/*      <!-- Brand logo --> */}
          <a
            id="WindUI"
            aria-label="WindUI logo"
            aria-current="page"
            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
            href="navbar"
          >
            <img src={logo} className="w-16" alt="" />
          </a>
          {/*      <!-- Mobile trigger --> */}
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 '
                  : ''
              }
            `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2  -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-gray-200 transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-gray-200 transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-gray-200 transition-all duration-300"
              ></span>
            </div>
          </button>
          {/*      <!-- Navigation links --> */}
          <ul
            role="menubar"
            aria-label="Select page"
            className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-neutral-950 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
              isToggleOpen
                ? 'visible opacity-100 backdrop-blur-sm'
                : 'invisible opacity-0'
            }`}
          >
            <li role="none" className="flex items-stretch">
              <a
                onClick={toggleClose}
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300 text-neutral-400 hover:text-gray-100 focus:text-gray-100 focus:outline-none focus-visible:outline-none lg:px-8"
                href="#hero"
              >
                <IoHomeOutline size={20} />
                <span>Home</span>
              </a>
            </li>

            <li role="none" className="flex items-stretch">
              <a
                onClick={toggleClose}
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300  text-neutral-400 hover:text-gray-100 focus:text-gray-100 focus:outline-none focus-visible:outline-none lg:px-8"
                href="#about"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                  aria-label="Menu item icon"
                  role="graphics-symbol"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>

                <span>About</span>
              </a>
            </li>
            <li role="none" className="flex items-stretch">
              <a
                onClick={toggleClose}
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300 text-neutral-400 hover:text-gray-100 focus:text-gray-100 focus:outline-none focus-visible:outline-none lg:px-8"
                href="#technologies"
              >
                <GiTechnoHeart size={20} />
                <span>Skills</span>
              </a>
            </li>

            <li role="none" className="flex items-stretch">
              <a
                onClick={toggleClose}
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300 text-neutral-400 hover:text-gray-100 focus:text-gray-100 focus:outline-none focus-visible:outline-none lg:px-8"
                href="#projects"
              >
                <IoCodeWorkingSharp size={25} />
                <span>Work</span>
              </a>
            </li>
          </ul>
          <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
            <a
              onClick={toggleClose}
              href="#contact"
              className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-gray-200 text-neutral-900 px-5 text-sm font-medium tracking-wide  shadow-md transition duration-300 hover:bg-neutral-900 hover:text-gray-200 focus-visible:outline-none"
            >
              <span>Contact me</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
