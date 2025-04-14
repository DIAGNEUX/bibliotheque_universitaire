import React from 'react'
import Accueil from './Pages/AccueilPages/Accueil'
import AppRouter from './Routes/Router'
import Navbar from './Pages/AccueilPages/composants/Navbar'
import './Css/Style.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRouter/>
      </div>
    
  )
}

export default App