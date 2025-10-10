import React from "react";
import ceoImg from "/ceo.png";

const index = () => {
  return (
    <section className="w-full px-[10%] py-12 bg-[#F8F6F2]">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={ceoImg}
            alt="CEO of Mir Wais Transport LLC"
            className="rounded-2xl shadow-md w-64 h-64 object-cover"
          />
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Message from the CEO
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At <b>Mir Wais Transport LLC</b>, we take pride in being part of <b>Dubai’s growth story</b> — 
            supporting its dynamic <b>infrastructure and development projects</b> with <b>dedication</b>, 
            <b>reliability</b>, and <b>precision</b>. Our modern <b>Volvo fleet</b> and experienced team ensure
            every delivery reflects our values of <b>safety</b>, <b>transparency</b>, and <b>excellence</b>.
            <br />
            <br />
            As we continue to expand our operations, our goal remains simple:
            to be the UAE’s most <b>trusted name</b> in <b>transport and materials supply</b>,
            where every client is a <b>long-term partner in success</b>.
          </p>
          <p className="text-gray-700 font-medium mt-6">
            — <b>Mir Wais</b>
            <br />
            <span className="text-sm text-gray-500">
              CEO, <b>Mir Wais Transport LLC</b>
            </span>
          </p>
        </div>
      </div>

      {/* ✅ Mission and Vision Section */}
      <div className="space-y-8 md:ml-8 ">
        <div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">Mission</h3>
          <p className="text-gray-600">
            To deliver <b>reliable</b>, <b>on-time</b> bulk transport and building materials supply across 
            <b> Dubai and the UAE</b> — exceeding client expectations through 
            <b> operational excellence</b>, <b>safety</b>, and <b>unwavering commitment</b>.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">Vision</h3>
          <p className="text-gray-600">
            To be the UAE’s most <b>trusted partner</b> for <b>construction materials</b> and 
            <b> heavy transport</b>, combining a modern <b>Volvo fleet</b> with 
            <b> client-first service</b>, <b>sustainability</b>, and 
            <b> transparent performance</b>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default index;
