import React, { useState } from 'react';
import faqData from './Faqdata'; // Import des questions/réponses
import { plus, moins } from '../../../import/import';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='text-white bg-background py-10 min-h-screen relative px-8'>
      

      <h1 className='text-center text-white text-3xl font-bold'>FAQ – Questions fréquentes</h1>
      <p className='text-center text-white/70 font-thin text-lg my-3 leading-5'>
        Retrouvez les réponses à vos questions <br />
        sur l'utilisation de notre bibliothèque universitaire
      </p>

      <div className="relative max-w-2xl mx-auto mt-6 space-y-4 z-100">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-secondary rounded-lg p-4 cursor-pointer bg-[#0F172A]/40"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{item.question}</span>
              <img
                src={openIndex === index ? moins : plus}
                alt="Toggle"
                className="w-6 h-6 transition-transform duration-300"
              />
            </div>

            {/* La partie réponse avec animation de la hauteur */}
            <div
              className={`overflow-hidden  ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-white/80 mt-3">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
