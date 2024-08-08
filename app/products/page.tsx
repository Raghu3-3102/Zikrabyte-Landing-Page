import React,{useState,useEffect} from 'react'
import { OurWork } from '../Components/Flow3/OurWork/OurWork'
import { Client } from '../Components/Flow3/part_2/Client'
import { Domain } from '../Components/Flow3/part_2/Domain'
import { Review } from '../Components/Flow3/part_2/Review'
import Products from '../Components/Flow3/Product'
import StatisticsCounter from '../Components/Flow3/StatisticsCounter/StatisticsCounter'

const ProductsPage = () => {
  return (
    <div>
      <Products />
      <Client />
      <Domain />
      <Review />
      <StatisticsCounter />
    </div>
  )
}

export default ProductsPage