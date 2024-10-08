'use client'
import { useState } from 'react';
import './styles.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      toggleMenu();
    }
  };

  // Function to determine if a link is active
  const isActive = (path: string) => pathname === path ? 'text-white bg-gray-300' : 'text-white';

  return (
    <>
      <nav className="p-4 fixed top-0 left-0 w-full z-50 shadow-lg border-b-2 border-pink-400 bg-customPink">
        <div className="container mx-auto flex justify-between items-center">

          <div className="text-2xl font-bold">
            <Link href="/">    
              <Image
                src={'/logox.jpg'}
                width={40}
                height={50}
                alt=''
              />
            </Link>
          </div>

          {/* Menu Toggle Button (for mobile) */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className={`lg:flex lg:items-center lg:space-x-6 absolute lg:relative top-full left-0 w-full lg:w-auto bg-customPink ${isOpen ? 'block' : 'hidden'} shadow-lg border-t-2 border-pink-400 lg:border-none`}>
            <Link href="/" className={`block px-4 py-2 text-lg hover:bg-gray-700 lg:text-xl lg:px-6 lg:py-3 ${isActive('/')}`} onClick={handleLinkClick}>Inicio</Link>
            <Link href="/acerca" className={`block px-4 py-2 text-lg hover:bg-gray-700 lg:text-xl lg:px-6 lg:py-3 ${isActive('/acerca')}`} onClick={handleLinkClick}>Acerca</Link>
            <Link href="/tratamiento" className={`block px-4 py-2 text-lg hover:bg-gray-700 lg:text-xl lg:px-6 lg:py-3 ${isActive('/tratamiento')}`} onClick={handleLinkClick}>Tratamientos</Link>
            <Link href="/pregunta" className={`block px-4 py-2 text-lg hover:bg-gray-700 lg:text-xl lg:px-6 lg:py-3 ${isActive('/pregunta')}`} onClick={handleLinkClick}>Preguntas</Link>
            <Link href="/galeria" className={`block px-4 py-2 text-lg hover:bg-gray-700 lg:text-xl lg:px-6 lg:py-3 ${isActive('/galeria')}`} onClick={handleLinkClick}>Galería</Link>
          </div>
        </div>
      </nav>

      {/* Add margin to content below the navbar */}
      <div className="pt-16">
        {/* Main content goes here */}
      </div>
    </>
  );
}
