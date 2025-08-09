import About from './Components/About';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden  min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-pink-900 animate-gradient-x  ">
      {/* Animated or Radial Gradient Background */}
      <div className="container mx-auto px-4 sm:px-8 ">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;

// Tailwind CSS animation (add to your global CSS if not present):
// .animate-gradient-x {
//   background-size: 200% 200%;
//   animation: gradient-x 8s ease-in-out infinite;
// }
// @keyframes gradient-x {
//   0%, 100% { background-position: left center; }
//   50% { background-position: right center; }
// }
