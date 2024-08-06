import React from 'react'
import { OurWork } from '../Components/Flow3/OurWork/OurWork'
import { Crm } from '../Components/Flow3/CRM/Crm'
import { Achievements } from '../Components/Flow3/Achievements/Achievements'
import { Awards } from '../Components/Flow3/Awards/Awards'
import { ProductsCta } from '../Components/Flow3/ProductsCta/ProductsCta'

const ServicesPage = () => {
  return (
    <div>
      <OurWork />
      {/* <Crm /> */}
      <Achievements />
      <Awards />
      <ProductsCta />
    </div>
  )
}

export default ServicesPage