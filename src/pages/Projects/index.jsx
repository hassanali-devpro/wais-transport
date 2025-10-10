import React from "react";
import Hero from "../../components/Hero";
import { Projects } from "../../constants/images";
import ProjectSection from "../../components/ProjectSection";
import Footer from "../../components/Footer";

const Index = () => {
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
    {
      title: "Sustainable City (Dubai Land)",
      image: Projects.sustainable,
      details: ["Road base", "Aggregates"],
    },
    {
      title: "JVC, Palm Jumeirah, Nad Al Sheba, Meydan",
      image: Projects.jvc,
      details: ["Dune sand", "Aggregates", "Black & white sand"],
    },
    {
      title: "Multiple ADNOC Stations (Sharjah, Abu Dhabi, Al Ain, Kalba)",
      image: Projects.ANDOC,
      details: ["Road base", "Aggregates"],
    },
    {
      title: "New Presidential Palace, Abu Dhabi (Corniche)",
      image: Projects.watan,
      details: ["40–80mm beige stone (Oman)"],
    },
    {
      title:
        "Dragon Mart Extension, Balhasa Projects, Al Jaddaf, Business Bay, Tecom",
      image: Projects.dragonMart,
      details: ["Materials supply"],
    },
  ];

  return (
    <>
      <Hero
        title="Building Trust Through Every Project"
        description="From concept to completion, we power successful projects across the UAE with reliability and precision."
        buttonText="Get a Quote"
        pageLink="/get-qoute"
        buttonText1="Contact Us"
        pageLink1="/contact"
        Hero={Projects}
      />

      <ProjectSection projects={projectData}
        title="Building Trust Through Every Project"
        description="We have successfully delivered essential construction and infrastructure materials across the UAE — supporting many landmark developments with reliability and precision."
        showLimited={false} />

      <Footer />
    </>
  );
};

export default Index;
