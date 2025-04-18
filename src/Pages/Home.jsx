import React from 'react'
import Hero from '../Components/Hero'
import PhoneContainer from '../Components/PhoneContainer'
import { useLoaderData } from 'react-router-dom'
const Home = () => {
    const data = useLoaderData()
  return (
    <div>
        <Hero />
        <PhoneContainer phones = {data} />
    </div>
  )
}

export default Home