import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Leschiffres = () => {
  const { ref, inView } = useInView({ triggerOnce: true }); // Détecte quand l'élément est visible

  return (
    <div ref={ref} className="bg-[#080B17] text-white py-4">
      <div className="container items-center gap-3 flex flex-row mx-auto text-center">
        <h2 className="text-3xl min-w-96 text-left px-3 font-bold ">Nos Statistiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Nombre de livres */}
          <div>
            <h3 className="text-5xl font-bold text-secondary">
            +{inView && <CountUp start={0} end={10000} duration={4} />}
            </h3>
            <p className="text-lg mt-2 font-thin text-white/50 ">Livres disponibles</p>
          </div>

          {/* Nombre d'étudiants inscrits */}
          <div>
            <h3 className="text-5xl font-bold text-secondary ">
            +{inView && <CountUp start={0} end={5000} duration={4} />}
            </h3>
            <p className="text-lg mt-2 font-thin text-white/50">Étudiants inscrits</p>
          </div>

          {/* Nombre d'emprunts mensuels */}
          <div>
            <h3 className="text-5xl font-bold text-secondary">
              +{inView &&  <CountUp start={0} end={1000} duration={4} />}
            </h3>
            <p className="text-lg mt-2 font-thin text-white/50">Emprunts mensuels</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leschiffres;
