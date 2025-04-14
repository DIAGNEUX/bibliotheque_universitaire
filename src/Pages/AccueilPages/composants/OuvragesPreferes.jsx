import React from 'react'
import { Ouvrage1 , Ouvrage2 , Ouvrage3 , Ouvrage4 , Ouvrage5 , Ouvrage6 } from '../../../import/import'

const OuvragesPreferes = () => {
    const LesOuvragespref = [
        {id: 1, nom: "Lorsque le nuit tombe", auteur: "Jules Verne", img:Ouvrage1 },
        {id: 2, nom: "Personne ne doit savoir", auteur: "Jules Verne", img:Ouvrage2 },
        {id: 3, nom: "Qui est Napoleon", auteur: "Jules Verne", img:Ouvrage3 },
        {id: 4, nom: "Entretien avec un cadavre", auteur: "Jules Verne", img:Ouvrage4 },
        {id: 5, nom: "Femme de menage", auteur: "Jules Verne", img:Ouvrage5 },
        {id: 6, nom: "Le fils de la nuit", auteur: "Jules Verne", img:Ouvrage6 },
    ]
  return (
    <div className='bg-background py-2 text-white'>
        <h1 className='text-center text-3xl font-bold'>Découvrez les ouvrages préférés <br /> de nos étudiants</h1>

        <div className='flex items-center justify-center px-4'>
            {LesOuvragespref.map((item) => (
                <div className='flex flex-col items-center justify-center m-4  w-1/5' key={item.id} >
                    <img src={item.img} alt="" className=' w-60 h-64' />
                    <div className='flex flex-col h-20 relative'>
                    <p className='text-lg font-bold leading-5'>{item.nom}</p>
                    <p className='font-thin text-[#D6E0FF]'>{item.auteur}</p>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default OuvragesPreferes