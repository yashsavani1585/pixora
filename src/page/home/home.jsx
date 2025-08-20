import React from 'react'
import BrandingSection from '../../components/BrandingSection/BrandingSection'
import ExpertsSection from '../../components/ExpertsSection/ExpertsSection'
import ServiceSection from '../../components/ServiceSection/ServiceSection'
import WhoWeHelp from '../../components/WhoWeHelp/WhoWeHelp'
import BusinessSolutions from '../../components/BusinessSolutions/BusinessSolutions'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import StepsToSuccess from '../../components/StepsToSuccess/StepsToSuccess'
import OurWorkSection from '../../components/StepsToSuccess/StepsToSuccess'

const Home = () => {
  return (
    <div>
      <BrandingSection />
      <ExpertsSection />
      <ServiceSection />
      <WhoWeHelp />
      <BusinessSolutions/>
      <WhyChooseUs/>
      <OurWorkSection />
    </div>
  )
}

export default Home
