import React from 'react'
import HeroSection from './composants/HeroSection'
import Leschiffres from './composants/Leschiffres'
import Howitworks from './composants/howitworks'
import Categorie from './composants/Categorie'
import OuvragesPreferes from './composants/OuvragesPreferes'
import Faq from './composants/Faq'
import Footer from './composants/Footer'

const Accueil = () => {
  return (
    <div >
      <HeroSection/>
      <Leschiffres/>
      <Howitworks/>
      <Categorie/>
      <OuvragesPreferes/>
      <Faq/>
      <Footer/>

    </div>
  )
}

export default Accueil