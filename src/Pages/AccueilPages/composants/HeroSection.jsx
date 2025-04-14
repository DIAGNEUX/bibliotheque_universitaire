import React, { useState, useEffect } from 'react';
import { bg1, bg2, bg3, bg4, bg5 } from '../../../import/import';
import Navbar from './Navbar';
import Search from './Search';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInHeroSection, setIsInHeroSection] = useState(false);

  // Capturer la position de la souris
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      setMousePosition({ x, y });
    };

    // Ajouter l'événement mousemove
    window.addEventListener('mousemove', handleMouseMove);

    // Nettoyage de l'événement
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculer les mouvements des images en fonction de la souris
  const getPosition = (imageIndex) => {
    if (!isInHeroSection) return {}; // Si on n'est pas dans la section Hero, pas de mouvement

    const { x, y } = mousePosition;
    const moveX = (x - window.innerWidth / 2) / 50 * (imageIndex % 2 === 0 ? 1 : -1);
    const moveY = (y - window.innerHeight / 2) / 50 * (imageIndex % 2 === 0 ? 1 : -1);

    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
      transition: 'transform 0.1s ease-out', // Animation douce pour le mouvement
    };
  };

  // Détecter l'entrée et la sortie de la section
  const handleMouseEnter = () => {
    setIsInHeroSection(true); // Quand la souris entre dans la section, on active l'animation
  };

  const handleMouseLeave = () => {
    setIsInHeroSection(false); // Quand la souris quitte la section, on arrête l'animation
  };

  return (
    <div
      className='relative bg-primary w-full h-screen overflow-hidden'
      onMouseEnter={handleMouseEnter} // Quand la souris entre dans HeroSection
      onMouseLeave={handleMouseLeave} // Quand la souris quitte HeroSection
    >
      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-50 font-bold">
        <h1 className='text-6xl '><span className='text-secondary '>Empruntez</span> et <span className='text-secondary'>Explorez</span> des livres <br />dans notre bibliothèque </h1>
        <div className='flex justify-center'>
          <Search/>
        </div>
      </div>
      <div className="absolute w-60 h-60 inset-0 left-0 top-0 flex items-center justify-center">
        <div className="w-52 h-52 bg-white/80 opacity-30 blur-[150px] rounded-full"></div>
      </div>

      {/* Image background moving */}
      <div className="absolute w-full bottom-[-120px] flex items-center justify-center gap-8">
      <div className='mb-32' style={getPosition(3)}>
          <img src={bg4} alt="" className='w-40 sm:w-44 md:w-48 lg:w-50 xl:w-52 max-h-68 object-cover rounded-lg' />
        </div>
        <div className='mb-16' style={getPosition(1)}>
          <img src={bg2} alt="" className='w-40 sm:w-44 md:w-48 lg:w-50 xl:w-52 max-h-68 object-cover rounded-lg' />
        </div>
        <div className='mb-0' style={getPosition(0)}>
          <img src={bg1} alt="" className='w-40 sm:w-44 md:w-48 lg:w-50 xl:w-52 max-h-68 object-cover rounded-lg' />
        </div>
       
        <div className='mb-16' style={getPosition(2)}>
          <img src={bg3} alt="" className='w-40 sm:w-44 md:w-48 lg:w-50 xl:w-52 max-h-68 object-cover rounded-lg' />
        </div>
       
        <div className='mb-32' style={getPosition(4)}>
          <img src={bg5} alt="" className='w-40 sm:w-44 md:w-48 lg:w-50 xl:w-52 max-h-68 object-cover rounded-lg' />
        </div>
      </div>

      <div className="absolute w-full bg-gradient-primary opacity-50 z-100 h-screen inset-0 left-0 top-0"></div>
    </div>
    
  );
};

export default HeroSection;
