import logo from '../assets/mylogo.png';
import { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { GiTechnoHeart } from 'react-icons/gi';
import { IoCodeWorkingSharp } from 'react-icons/io5';

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const toggleClose = () => setIsToggleOpen(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-30 transition-all duration-300"
      id="navbar"
    >
      <div className="mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex h-[4.5rem] items-stretch justify-between font-medium"
          role="navigation"
        >
          {/* Brand logo */}
          <a
            id="WindUI"
            aria-label="WindUI logo"
            aria-current="page"
            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 transition-transform hover:scale-105"
            href="#hero"
          >
            <img
              src={logo}
              className="w-14 drop-shadow-lg rounded-xl border-2 border-indigo-400 hover:border-pink-400 transition-all"
              alt="Logo"
            />
          </a>
          {/* Mobile trigger */}
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden`}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2  -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-indigo-400 transition-all duration-300 ${
                  isToggleOpen ? 'rotate-45 translate-y-0 w-6' : ''
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-6 transform rounded-full bg-indigo-400 transition duration-300 ${
                  isToggleOpen ? '-rotate-45' : ''
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-indigo-400 transition-all duration-300 ${
                  isToggleOpen ? 'w-0' : ''
                }`}
              ></span>
            </div>
          </button>
          {/* Navigation links */}
          <ul
            role="menubar"
            aria-label="Select page"
            className={`fixed top-0 left-0 w-full h-screen bg-neutral-950/80 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-lg font-semibold transition-all duration-300 z-20 lg:static lg:flex-row lg:h-auto lg:w-auto lg:bg-transparent lg:backdrop-blur-none lg:gap-0 lg:justify-end lg:items-center lg:translate-x-0 ${
              isToggleOpen
                ? 'translate-x-0 opacity-100 pointer-events-auto'
                : '-translate-x-full opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto'
            }`}
          >
            <li role="none">
              <a
                onClick={toggleClose}
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-pink-400 hover:bg-neutral-800/60 focus:outline-none"
                href="#hero"
              >
                <IoHomeOutline size={20} />
                <span>Home</span>
              </a>
            </li>
            <li role="none">
              <a
                onClick={toggleClose}
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-pink-400 hover:bg-neutral-800/60 focus:outline-none"
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
            <li role="none">
              <a
                onClick={toggleClose}
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-pink-400 hover:bg-neutral-800/60 focus:outline-none"
                href="#technologies"
              >
                <GiTechnoHeart size={20} />
                <span>Skills</span>
              </a>
            </li>
            <li role="none">
              <a
                onClick={toggleClose}
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-200 text-neutral-300 hover:text-pink-400 hover:bg-neutral-800/60 focus:outline-none"
                href="#projects"
              >
                <IoCodeWorkingSharp size={25} />
                <span>Work</span>
              </a>
            </li>
            {/* Contact button for mobile */}
            <li className="lg:hidden">
              <a
                onClick={toggleClose}
                href="#contact"
                className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 text-base font-semibold shadow-md transition duration-300 hover:from-pink-500 hover:to-indigo-500 focus-visible:outline-none"
              >
                <span>Contact me</span>
              </a>
            </li>
          </ul>
          {/* Contact button for desktop */}
          <div className="ml-auto hidden lg:flex items-center px-6 lg:ml-0 lg:p-0">
            <a
              onClick={toggleClose}
              href="#contact"
              className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 text-base font-semibold shadow-md transition duration-300 hover:from-pink-500 hover:to-indigo-500 focus-visible:outline-none"
            >
              <span>Contact me</span>
            </a>
          </div>
        </nav>
      </div>
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg"></div>
    </header>
  );
};

export default Navbar;
