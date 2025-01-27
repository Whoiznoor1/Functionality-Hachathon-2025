import React from 'react'
import Footer from '../components/Footer'
import FreeTrialSection from '../components/FreeTrialSection'
import Navbarbtn from '../components/Navbarbtn'
import Pricing from '../components/Pricing'
import ClientLogoSection from '../components/ClientLogoSection'
import Faqs from '../components/Faqs'

const Piercing = () => {
  return (
    <div>
        <Navbarbtn/>
        <Pricing/>
        <ClientLogoSection/>
        <Faqs/>
        <FreeTrialSection/>
        <Footer/></div>
  )
}

export default Piercing