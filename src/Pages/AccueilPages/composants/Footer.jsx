import React from 'react'
import { logo, facebook,twitter,tiktok,youtube,email,phone,location} from '../../../import/import'

const Footer = () => {
  return (
    <div className='relative bg-[#080B17] text-white flex justify-between p-5'>
  {/* Gradient en arrière-plan */}
  <div className="absolute w-full h-full bg-gradient-footer opacity-50 inset-0 left-0 top-0 z-0"></div>

  <div className=' flex flex-col items-start justify-start z-50'>
      <div className='flex gap-2 justify-center items-center'>
          <img className='w-16 h-16' src={logo} alt="" />
          <div className='flex flex-col leading-none text-white'>
              <p className='text-md font-bold'>Bibliotheque</p>
              <p className='text-md font-bold'>Paris</p>
          </div>
      </div>
      <div>
          <ul>
              <li className='flex items-center gap-2'><img src={location} alt="" /> 12 rue de la paix </li>
              <li className='flex items-center gap-2'><img src={phone} alt="" /> 01 23 45 67 89</li>
              <li className='flex items-center gap-2'><img src={email} alt="" />contact@bibliotheque-univ.fr</li>
          </ul>
      </div>
  </div>
  <div className=' z-50'>
      <h3 className='text-xl font-bold'>Navigation</h3>
      <div>
          <ul>
              <li>Accueil</li>
              <li>Catalogue</li>
              <li>Services</li>
              <li>Faq</li>
          </ul>
      </div>
  </div>
  <div className=' z-50'>
      <h3 className='text-xl font-bold'>Connectez-vous avec nous</h3>
      <div>
          <ul className='flex gap-2'>
              <li><img src={facebook} alt="" /></li>
              <li><img src={twitter} alt="" /></li>
              <li><img src={tiktok} alt="" /></li>
              <li><img src={youtube} alt="" /></li>
          </ul>
      </div>
  </div>
</div>

  )
}

export default Footer