import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import WebDevelopment from '../../components/WebDevelopment/WebDevelopment'
import Ecommerce from '../../components/Ecommerce/Ecommerce'
import CMS from '../../components/CMS/CMS'
import CRM from '../../components/CRM/CRM'
import CustomDevelopment from '../../components/CustomDevelopment/CustomDevelopment'

const WebDevelopmentPage = () => {
  return (
    <div>
      <HeroSection />
      <WebDevelopment />
      <Ecommerce />
      <CMS />
      <CRM />
      <CustomDevelopment />
    </div>
  )
}

export default WebDevelopmentPage
