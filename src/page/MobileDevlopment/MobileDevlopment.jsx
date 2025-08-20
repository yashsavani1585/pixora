import React from 'react'
import HeroSection1 from '../../components/HeroSection1/HeroSection1'
import MobileAppSection from '../../components/MobileAppSection/MobileAppSection'
import AndroidAppSection from '../../components/AndroidAppSection/AndroidAppSection'
import FlutterAppDevelopment from '../../components/FlutterAppDevelopment/FlutterAppDevelopment'
import CrossPlatformAppDevelopment from '../../components/CrossPlatformAppDevelopment/CrossPlatformAppDevelopment'

const MobileDevlopment = () => {
  return (
    <div>
        <HeroSection1 />
        <MobileAppSection />
        <AndroidAppSection />
        <FlutterAppDevelopment />
        <CrossPlatformAppDevelopment />
    </div>
  )
}

export default MobileDevlopment