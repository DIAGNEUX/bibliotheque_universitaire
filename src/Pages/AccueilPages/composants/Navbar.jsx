import React, { useState, useEffect } from 'react';
import { logo } from '../../../import/import';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Active l'effet après 50px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-[999] flex justify-between items-center py-3 px-4  backdrop-blur-md transition-all duration-300 
      ${isScrolled ? 'w-[60%] mt-1 bg-background/80 shadow-lg rounded-full py-1 px-6' : 'w-full'}`}>

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img className="w-10 h-10" src={logo} alt="" />
        <div className="flex flex-col leading-none text-white">
          <p className="text-md font-bold">Bibliothèque</p>
          <p className="text-md font-bold">Paris</p>
        </div>
      </div>

      {/* Menu */}
      <ul className="flex gap-4 text-white/80">
        <li><Link to="/" className="hover:text-white transition">Accueil</Link></li>
        <li><Link to="/Catalogue" className="hover:text-white transition">Catalogue</Link></li>
        <li><Link to="/Services" className="hover:text-white transition">Services</Link></li>
        <li><Link to="/Contact" className="hover:text-white transition">Contact</Link></li>
      </ul>

      {/* Bouton */}
      <button className="bg-secondary font-semibold text-white py-2 px-4 rounded">Se connecter</button>
    </div>
  );
};

export default Navbar;
