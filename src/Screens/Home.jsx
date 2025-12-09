import React from 'react'
import HeroSection from '../Components/Home/HeroSection';
import FlashSales from "../Components/Home/FlashSales";
import Category from "../Components/Home/Category";
import BestSelling from "../Components/Home/BestSelling";
function Home() {
  return (
    <div>
      <HeroSection/>
      <FlashSales/>
      <Category/>
      <BestSelling/>
    </div>
  )
}

export default Home
