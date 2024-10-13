"use client"
import React,{useState,useEffect} from 'react';



const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
  
        const sections = ['projects', 'message'];
        let currentSection = '';
  
        for (let section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom >= 0) {
              currentSection = section;
              break;
            }
          }
        }
        setActiveSection(currentSection);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className={`fixed w-full  shadow-md z-50  ${isScrolled ? 'bg-slate-900 bg-opacity-70' : 'bg-slate-900 bg-opacity-100'}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-3">
          <div className="relative">
 <svg
  height="50"
  width="50"
  className="transform transition-transform rounded-full duration-300 hover:scale-110"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: 'rgba(50, 50, 50, 0.8)', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: 'rgba(0, 0, 0, 0.8)', stopOpacity: 1 }} />
    </linearGradient>
    <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style={{ stopColor: 'rgba(255, 255, 255, 0.2)', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: 'rgba(0, 0, 0, 0.4)', stopOpacity: 1 }} />
    </radialGradient>
    <filter id="shadow" x="0" y="0" width="200%" height="200%">
      <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(0, 0, 0, 0.5)" />
    </filter>
  </defs>
  <circle cx="12" cy="12" r="12" fill="url(#grad1)" stroke="rgba(0, 0, 0, 0.3)" strokeWidth="2"/>
  <path
    d="M8.5 9l-3.5 3 3.5 3"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ filter: 'url(#shadow)' }}
  />
  <path
    d="M15.5 9l3.5 3-3.5 3"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ filter: 'url(#shadow)' }}
  />
  <path
    d="M12 16v-8"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ filter: 'url(#shadow)' }}
  />
</svg>



          </div>
          <span className="text-white text-sm font-bold lg:text-4xl hidden lg:block">
            M.F
          </span>
        </div>
        <div className='border border-cyan-400 bg-slate-800 shadow-lg p-2 space-x-5 rounded-full hidden sm:block'>
      <a
        href="#projects"
        className={`text-white text-md  ${activeSection === 'projects' ? 'active-link' : ''}`}
      >
        Projects
      </a>
      <a
        href="#message"
        className={`text-white text-md ${activeSection === 'message' ? 'active-link' : ''}`}
      >
        Contact
      </a>
     
    </div>


        <div className="flex items-center space-x-4">
            
           
        </div>
      </div>
    </div>
    
    
  );
};

export default Navbar;
