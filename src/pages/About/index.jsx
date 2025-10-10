import React from 'react'
import Hero from '../../components/Hero'
import { HeroImages, Projects } from '../../constants/images'
import Vission from "../../components/Vission"
import ProjectSection from '../../components/ProjectSection'
import OurStory from "../../components/OurStory"
import FAQ from "../../components/FAQ"
import Footer from "../../components/Footer"

const index = () => {

  const fleetData = [
    {
      title: "6x4 Fleet (2024–2025 Models)",
      image: HeroImages.hero1,
      details: [
        "Powerful 6x4 configuration",
        "High payload capacity",
        "Exceptional fuel efficiency",
        "Advanced safety technologies",
      ],
    },
    {
      title: "Al Shirawi Tipper Trailers",
      image: HeroImages.hero4,
      details: [
        "Durable construction for heavy-duty loads",
        "Optimized for aggregates and sand transport",
        "Low maintenance and high uptime",
        "Perfect compatibility with 6x4 trucks",
      ],
    },
    {
      title: "Fleet Value & Performance",
      image: HeroImages.hero2,
      details: [
        "Consistent high performance across all routes",
        "Reliable service uptime and support",
        "Fuel-efficient engines for sustainability",
        "Safety-first technology and monitoring",
      ],
    },
  ];

  const faqs = [
  {
    question: "Which materials do you supply in Dubai and across the UAE?",
    answer:
      'We supply dune (sweet) sand, washed sand, black sand, gabbro aggregates (¾", ⅜", 3/16"), road base, sub base, natural gravel (3/8", ¾", 20–40mm, 50–100mm), limestone, pebble/river stones, and decorative aggregates—delivered from RAK/Fujairah crushers to your site.',
  },
  {
    question: "What areas do you cover and how fast can you deliver?",
    answer:
      "We deliver across Dubai, Abu Dhabi, Sharjah, Al Ain, and the wider UAE. For most orders placed before noon, next-day delivery is typical; urgent same-day slots may be available subject to dispatch and site access.",
  },
  {
    question: "Minimum order quantity and how is pricing calculated?",
    answer:
      "Minimums depend on material and distance (usually per tipper load or per ton). Pricing is based on material type, quantity, haul distance, site access, and offloading requirements. Get an instant estimate via Request a Delivery Quote.",
  },
  {
    question: "Do you handle loading/unloading and site compliance?",
    answer:
      "We load at the crusher and deliver to your site. Offloading is typically tipper discharge; please ensure safe site access, traffic permits (if required), and a level unloading area. We comply with UAE transport regulations and local Dubai Municipality guidelines.",
  },
  // {
  //   question: "Do you compliance documents and quality certificates?",
  //   answer:
  //     "Yes. On request we can share crusher source details, material spec sheets, and test reports (where available) for gabbro aggregates, road base, and sands, aligned with UAE project requirements.",
  // },
  {
    question: "Do you offer debris/waste collection and approved disposal?",
    answer:
      "Yes. We provide construction debris & concrete waste collection with Dubai Municipality–approved disposal. Share volumes, site access, and timing to schedule pickup.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfer and approved credit terms for repeat clients. First orders are typically advance or COD. Invoices include material, transport, and any permits/handling as applicable.",
  },
];

  return (
    <>
      <Hero
        title="Who we are"
        description="Your trusted partner for building materials supply and bulk transport across Dubai & the UAE."
        buttonText="Get a Qoute"
        pageLink="/get-qoute"
        buttonText1="Contact Us"
        pageLink1="/contact"
        Hero={HeroImages}
      />
      <OurStory />
      <Vission />
      <ProjectSection
        projects={fleetData}
        title="Building Trust Through Every Fleet Movement"
        description="Our 6x4 fleet, equipped with Al Shirawi tippers, delivers exceptional performance, payload capacity, and efficiency — ensuring reliability across every project in the UAE."
        showLimited={false}
      />
      <FAQ faqs={faqs} title="Frequently Asked Questions" />
      <Footer />

    </>
  )
}

export default index
