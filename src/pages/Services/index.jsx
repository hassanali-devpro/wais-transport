import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { HeroImages } from "../../constants/images";
import { motion } from "framer-motion";
import FAQ from "../../components/FAQ";
import buildingImg from "../../assets/images/truck1.jpg";
import roadImg from "../../assets/images/truck2.png";
import transportImg from "../../assets/images/truck3.png";
import debrisImg from "../../assets/images/truck4.jpg";
import dieselImg from "../../assets/images/truck1.jpg";

const services = [
  {
    title: "Building Materials Supply",
    description: (
      <>
        <p className="mb-2">
          Supplying premium materials for construction, landscaping, and
          infrastructure projects across the UAE.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>
            <strong>Dune (Sweet) Sand:</strong> Fine red sand for landscaping,
            underground works, and interlock bedding.
          </li>
          <li>
            <strong>White Washed Sand:</strong> Clean sand for plastering and
            decorative use.
          </li>
          <li>
            <strong>Black Sand:</strong> Coarse base layers with strong
            compaction.
          </li>
          <li>
            <strong>Aggregates (Gabbro – RAK/Fujairah):</strong> Multiple sizes
            for concrete, road base, and blocks.
          </li>
        </ul>
      </>
    ),
    image: buildingImg,
  },
  {
    title: "Road & Concrete Base",
    description: (
      <>
        <p className="mb-2">
          High-quality graded materials for durable road and concrete base
          construction.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>
            <strong>Road Base & Sub Base:</strong> Compact layers ensuring
            stability and drainage.
          </li>
          <li>
            <strong>Natural Gravel:</strong> 3/8", ¾", 20–40mm for concrete,
            drainage, and erosion control.
          </li>
          <li>
            <strong>Limestone:</strong> Strong foundation and road base use.
          </li>
          <li>
            <strong>Pebble / River Stone:</strong> Decorative and landscape
            applications.
          </li>
        </ul>
      </>
    ),
    image: roadImg,
  },
  {
    title: "Bulk & Aggregate Transport",
    description: (
      <>
        <p className="mb-2">
          Reliable, on-time heavy transport from crusher to construction site.
        </p>
        <p className="text-sm text-gray-700">
          Fleet includes Volvo FH 460 trucks with high-capacity tipper trailers,
          ensuring compliance, safety, and uptime.
        </p>
      </>
    ),
    image: transportImg,
  },
  {
    title: "Debris & Waste Collection",
    description: (
      <>
        <p className="mb-2">
          Dubai Municipality–approved waste removal and site clearance service.
        </p>
        <p className="text-sm text-gray-700">
          Fast, compliant removal of debris, slabs, blocks, and rubble — ensuring
          clean and safe project sites.
        </p>
      </>
    ),
    image: debrisImg,
  },
  {
    title: "Diesel Supply",
    description: (
      <>
        <p className="mb-2">
          On-site diesel delivery for heavy machinery and vehicles.
        </p>
        <p className="text-sm text-gray-700">
          Ensuring uninterrupted operations with compliant handling and timely
          supply.
        </p>
      </>
    ),
    image: dieselImg,
  },
];

export const faqs = [
  {
    question: "What is the difference between dune sand and washed sand?",
    answer:
      "Dune (sweet) sand is naturally occurring, fine and reddish, ideal for landscaping, backfilling, and interlock bedding, but not recommended for structural concrete. Washed sand is bright white, screened and cleaned, perfect for plastering, playgrounds, and decorative uses.",
  },
  {
    question: "Is washed sand safe for children’s play areas?",
    answer:
      "Yes. Our washed sand is screened and free from contaminants, making it suitable for playgrounds, beaches and landscaping.",
  },
  {
    question: "What specifications do your road base materials meet?",
    answer:
      "We supply UAE municipality–approved road base and sub base aggregates sourced from Fujairah and RAK crushers, meeting AASHTO and ASTM standards for compaction and drainage.",
  },
  {
    question: "Are gabbro aggregates stronger than limestone?",
    answer:
      "Yes. RAK and Fujairah gabbro aggregates have higher density and compressive strength, making them ideal for high-strength concrete, precast elements and heavy-duty road layers.",
  },
  {
    question: "Do you provide official disposal certificates?",
    answer:
      "Absolutely. After debris collection, we issue a Dubai Municipality–approved disposal certificate, confirming legal and environmentally responsible waste handling.",
  },
];


const Index = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        title="Driving Success Through Reliable Services"
        description="Delivering excellence across the UAE with dependable transport, aggregate supply, and logistics services — from initial planning to final execution, we make every project seamless and successful."
        buttonText="Get a Quote"
        pageLink="/get-qoute"
        buttonText1="Contact Us"
        pageLink1="/contact"
        Hero={HeroImages}
      />

      {/* SERVICES SECTION */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-b from-[#F6F4F0] via-[#F8F6F2] to-[#F0ECE5]">
        {/* Decorative Background Blobs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-40"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gray-300 rounded-full blur-3xl opacity-30"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Our Services
          </h2>

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center mb-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full mb-6 md:mb-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-lg w-full h-[320px] object-cover"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full md:px-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <div className="text-gray-600 leading-relaxed text-base">
                  {service.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FAQ faqs={faqs} title="Service-Specific FAQs"/>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Index;
