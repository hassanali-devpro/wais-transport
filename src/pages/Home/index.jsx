import React from 'react'
import Hero from '../../components/Hero'
import { HeroImages, Projects } from '../../constants/images'
import Counter from "../../components/counter"
import ServicesSection from "../../components/ServicesSection"
import ProjectSection from '../../components/ProjectSection'
import OurStory from "../../components/OurStory"
import Footer from "../../components/Footer"

const projectData = [
  {
    title: "Container Terminal 2 & 4, Abu Dhabi",
    image: Projects.hero0,
    details: [
      "Bulk aggregate delivery",
      "On-time logistics",
      "Custom sand supply",
      "Materials supply",
    ],
  },
  {
    title: "Abu Dhabi Airport",
    image: Projects.airport,
    details: [
      "Runway base aggregates",
      "Washed sand",
      "Site delivery",
      "Sub base and road base",
    ],
  },
  {
    title: "Saudi German Hospital (Ajman, Sharjah, Dubai)",
    image: Projects.hospital,
    details: [
      "Structural fill",
      "Gravel",
      "On-site coordination",
      "Cement",
      "Black & white sand",
    ],
  },
];


const index = () => {
  return (
    <>
      <Hero
        title="Delivering On Time, Every Time"
        description="Your trusted partner for building materials supply and bulk transport across Dubai & the UAE."
        buttonText="Get a Qoute"
        pageLink="/get-qoute"
        buttonText1="Contact Us"
        pageLink1="/contact"
        Hero={HeroImages}
      />
      <Counter />
      <ServicesSection />
      <ProjectSection projects={projectData}
        title="Building Trust Through Every Project"
        description="We have successfully delivered essential construction and infrastructure materials across the UAE — supporting many landmark developments with reliability and precision."
        showLimited={true} />
      <OurStory />
      <Footer />

    </>
  )
}

export default index
