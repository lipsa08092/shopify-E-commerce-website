import React from 'react'
import HeroSection from '../../Components/Home/HeroSection';
import FlashSales from "../../Components/Home/FlashSales";
import Category from "../../Components/Home/Category";
import BestSelling from "../../Components/Home/BestSelling";
import Banner from '../../Components/Home/Banner';
import ExploreProducts from '../../Components/Home/ExploreProducts';
import NewArrival from '../../Components/Home/NewArrival';
import FastDelivery from '../../Components/Home/FastDelivery';

function Home() {
  return (
    <div>
      <HeroSection/>
      <FlashSales/>
      <Category/>
      <BestSelling/>
      <Banner/>
      <ExploreProducts/>
      <NewArrival/>
      <FastDelivery/>
    </div>
  )
}

export default Home
