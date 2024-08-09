import React from 'react'
import { OurWork } from '../Components/Flow3/OurWork/OurWork'
import { Client } from '../Components/Flow3/part_2/Client'
import { Domain } from '../Components/Flow3/part_2/Domain'
import { Review } from '../Components/Flow3/part_2/Review'

const ProductsPage = () => {
  return (
    <div>
      {/* <OurWork /> */}
      <Client />
      <Domain />
      <Review />
    </div>
  )
}

export default ProductsPage