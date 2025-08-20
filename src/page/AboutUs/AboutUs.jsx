import React from 'react'
import AboutSection from '../../components/AboutSection/AboutSection'
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre'
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo'
import HowWeGrow from '../../components/HowWeGrow/HowWeGrow'
import OurJourney from '../../components/OurJourney/OurJourney'
import OurMission from '../../components/OurMission/OurMission'
import OurVision from '../../components/OurVision/OurVision'
import OurServices from '../../components/OurServices/OurServices'

const AboutUs = () => {
  return (
    <div>
        <AboutSection/>
        <WhoWeAre />
        <WhatWeDo/>
        <HowWeGrow />
        <OurJourney />
        <OurMission />
        <OurVision />
        <OurServices />
    </div>
  )
}

export default AboutUs