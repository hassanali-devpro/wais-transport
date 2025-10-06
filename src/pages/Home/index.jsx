import React from 'react'
import Hero from '../../components/Hero'
import { HeroImages } from '../../constants/images'
import Counter from "../../components/counter"
import ServicesSection from "../../components/ServicesSection"
import ProjectSection from '../../components/ProjectSection'
import OurStory from "../../components/OurStory"
import Footer from "../../components/Footer"

const index = () => {
  return (
    <>
      <Hero
        title="Delivering On Time, Every Time"
        description="Your trusted partner for building materials supply and bulk transport across Dubai & the UAE."
        buttonText="Get a Qoute"
        pageLink = "/get-qoute"
        buttonText1="Contact Us"
        pageLink1 = "/contact"
        Hero={HeroImages}
        />
        <Counter />
        <ServicesSection />
        <ProjectSection />
        <OurStory />
        <Footer />

    </>
  )
}

export default index
