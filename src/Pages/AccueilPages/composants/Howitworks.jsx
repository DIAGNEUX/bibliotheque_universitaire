import React from 'react';
import { dot, noise, pixel, click, bgrecherchelivre ,bgseconnecter ,Emprunt} from '../../../import/import';

const Howitworks = () => {
  return (
    <div className='bg-[#080B17] py-2'>
      <h1 className='text-white text-center text-3xl font-bold mb-6'>Comment ça marche</h1>
      <div className='flex gap-5 py-5 px-12'>

        {/* le div se connecter */}
        <div
        className="overflow-hidden relative w-1/3 h-72 rounded-lg bg-cover bg-center flex flex-col "
        style={{ backgroundImage: `url(${dot})`,border: '1px solid #343434',  }}
        >
            <div className="relative h-3/4 ">
                <div className='flex w-full h-full justify-center items-center'>
                  <img src={bgseconnecter}  alt="" />
                </div>
            </div>
            <div className="relative h-1/4 px-2">
            <p className='text-white fon'><b className='text-white text-1xl font-bold '>Creer un compte.</b> <span className='font-thin text-white/50 '> Inscrivez-vous en quelques clics
            pour accéder à toutes nos ressources</span></p>
            </div>
        </div>


        {/* rechercher un livre */}
        <div
        className="overflow-hidden relative w-1/3 h-72 rounded-lg bg-cover bg-center flex flex-col "
        style={{ backgroundImage: `url(${noise})`,border: '1px solid #343434',  }}
        >
            <div className="relative h-3/4 p-5 " >
                <div className=' flex w-full h-full justify-center items-center'>
                  <img src={bgrecherchelivre} alt="" />
                </div>
            </div>
            <div className="relative h-1/4 px-2">
            <p className='text-white fon'><b className='text-white text-1xl font-bold '>Recherchez un livre.</b> <span className='font-thin text-white/50 '>Utilisez notre moteur de recherche pour explorer notre bibliothèque.</span></p>
            </div>
        </div>


        {/* last */}
        <div
        className="overflow-hidden relative w-1/3 h-72 rounded-lg bg-cover bg-center flex flex-col "
        style={{ backgroundImage: `url(${pixel})`,border: '1px solid #343434',  }}
        >
            <div className="relative h-3/4 ">
                <div className='flex w-full h-full justify-center items-center'>
                  <img src={Emprunt}  alt="" />
                </div>
            </div>
            <div className="relative h-1/4 px-2">
            <p className='text-white fon'><b className='text-white text-1xl font-bold '>Empruntez facilement.</b>
            <span className='font-thin text-white/50 '> Réservez et empruntez un livre avec une date de retour prévue.</span></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
