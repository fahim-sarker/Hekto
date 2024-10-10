import React from 'react'
import Banner from "../components/Banner"
import Feature from "../components/Feature"
import Leatest from "../components/Leatest"
import Shopex from "../components/Shopex"
import Unique from "../components/Unique"
import Trending from "../components/Trending"
import Discount from "../components/Discount"
import Top from "../components/Top"
import News from "../components/News"
import Blog from "../components/Blog"

const Home = () => {
  return (
    <>
      <Banner/>
      <Feature/>
      <Leatest/>
      <Shopex/>
      <Unique/>
      <Trending/>
      <Discount/>
      <Top/>
      <News/>
      <Blog/>
    </>
  )
}

export default Home
