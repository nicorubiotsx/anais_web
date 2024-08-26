'use client'
import { useState } from 'react';
import './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-black text-white p-4 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
        
          <div className="text-2xl font-bold">
            <Link href="/">MiLogo</Link>
          </div>

          {/* Menu Toggle Button (for mobile) */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className={`lg:flex lg:items-center lg:space-x-6 absolute lg:relative top-full left-0 w-full bg-black lg:bg-transparent lg:flex-row ${isOpen ? 'block' : 'hidden'}`}>
            <Link href="/inicio" className="text-pink-400 block px-3 py-2 text-lg hover:bg-gray-700">Inicio</Link>
            <Link href="/acerca" className="text-pink-400 block px-3 py-2 text-lg hover:bg-gray-700">Acerca</Link>
            <Link href="/tratamientos" className="text-pink-400 block px-3 py-2 text-lg hover:bg-gray-700">Tratamientos</Link>
            <Link href="/preguntas" className="text-pink-400 block px-3 py-2 text-lg hover:bg-gray-700">Preguntas</Link>
            <Link href="/galeria" className="text-pink-400 block px-3 py-2 text-lg hover:bg-gray-700">Galería</Link>
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
