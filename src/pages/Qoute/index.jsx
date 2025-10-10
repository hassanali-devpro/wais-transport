import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import emailjs from "@emailjs/browser";

const Qoute = () => {
  const [form, setForm] = useState({
    email: "",
    mobile: "",
    name: "",
    company: "",
    material: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_rotm054";
    const templateID = "template_nolx6ft";
    const publicKey = "BUd-t250mBH3OnOlg";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          first_name: form.name,
          company: form.company,
          email: form.email,
          mobile: form.mobile,
          material: form.material,
          address: form.address,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully!");
          setForm({
            email: "",
            mobile: "",
            name: "",
            company: "",
            material: "",
            address: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error.text);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-12"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(10, 25, 47, 0.20), 
            rgba(10, 25, 47, 0.05)
          ),
          url('/flat.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#F6F4F0] opacity-40 pointer-events-none"></div>

      {/* Back Button */}
      <motion.button
        onClick={() => window.history.back()}
        whileHover={{ scale: 1.1 }}
        className="absolute top-4 left-4 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2.5 rounded-full text-gray-900 shadow-md transition duration-300"
        title="Go Back"
      >
        <ArrowLeft size={18} />
      </motion.button>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/30 backdrop-blur-md rounded-md shadow-xl w-full max-w-2xl p-5 md:p-6 lg:p-8 z-10"
      >
        <h2 className="text-2xl md:text-3xl italic font-medium text-gray-900 mb-4 text-center drop-shadow-sm">
          Request a Delivery Quote?
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm md:text-base">
          {/* Name + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-gray-900 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full h-10 p-2 rounded-md bg-white/40 border border-white/50 text-gray-900 placeholder-gray-500 focus:outline-none"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-medium mb-1">Company</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                className="w-full h-10 p-2 rounded-md bg-white/40 border border-white/50 text-gray-900 placeholder-gray-500 focus:outline-none"
                placeholder="ABC Enterprises"
              />
            </div>
          </div>

          {/* Email + Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-gray-900 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full h-10 p-2 rounded-md bg-white/40 border border-white/50 text-gray-900 placeholder-gray-500 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-medium mb-1">Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                className="w-full h-10 p-2 rounded-md bg-white/40 border border-white/50 text-gray-900 placeholder-gray-500 focus:outline-none"
                placeholder="+971 50 123 4567"
              />
            </div>
          </div>

          {/* Material */}
          <div>
            <label className="block text-gray-900 font-medium mb-1">Material</label>
            <select
              name="material"
              value={form.material}
              onChange={handleChange}
              required
              className="w-full h-10 p-2 rounded-md bg-white/40 border border-white/50 text-gray-900 focus:outline-none cursor-pointer"
            >
              <option value="">Select Material</option>
              <option value="Dune (Sweet) Sand">Dune (Sweet) Sand</option>
              <option value="White Washed Sand">White Washed Sand</option>
              <option value="Black Sand">Black Sand</option>
              <option value="Gabbro Aggregates">Gabbro Aggregates</option>
              <option value="Gravel">Gravel</option>
              <option value="Road Base">Road Base</option>
              <option value="Sub Base">Sub Base</option>
              <option value="Limestone">Limestone</option>
              <option value="Pebbles / River Stones">Pebbles / River Stones</option>
              <option value="Diesel">Diesel</option>
              <option value="Debris">Debris</option>
              <option value="Rubble">Rubble</option>
              <option value="Slabs">Slabs</option>
              <option value="Blocks">Blocks</option>
              <option value="Bulk Transport">Bulk Transport</option>
              <option value="Waste Collection">Waste Collection</option>
              <option value="On-site Fuel Supply">On-site Fuel Supply</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-gray-900 font-medium mb-1">Delivery Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows="2"
              required
              placeholder="Enter delivery location..."
              className="w-full p-2 rounded-md bg-white/40 border border-white/50 text-gray-900 placeholder-gray-500 focus:outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2.5 rounded-sm cursor-pointer shadow-md transition-all duration-300 text-sm"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Qoute;
