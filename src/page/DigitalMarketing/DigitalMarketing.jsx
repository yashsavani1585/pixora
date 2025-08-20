import React from 'react'
import HeroSection2 from '../../components/HeroSection2/HeroSection2'
import ASOSEO from '../../components/ASOSEO/ASOSEO'
import PaidMarketing from '../../components/PaidMarketing/PaidMarketing'
import SocialMediaMarketing from '../../components/SocialMediaMarketing/SocialMediaMarketing'
import DigitalMarketing1 from '../../components/DigitalMarketing/DigitalMarketing'

const DigitalMarketing = () => {
  return (
    <div>
        <HeroSection2 />
        <DigitalMarketing1 />
        <ASOSEO/>
        <PaidMarketing/>
        <SocialMediaMarketing/>
    </div>
  )
}

export default DigitalMarketing