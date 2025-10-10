import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [form, setForm] = useState({
    email: "",
    mobile: "",
    name: "",
    lastName: "",
    message: "",
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
          last_name: form.lastName,
          email: form.email,
          mobile: form.mobile,
          message: form.message,
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
            lastName: "",
            message: "",
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
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-24"
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
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-[#F6F4F0] opacity-40 pointer-events-none"></div>

      {/* Back button */}
      <motion.button
        onClick={() => window.history.back()}
        whileHover={{ scale: 1.1 }}
        className="absolute top-6 left-6 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full text-gray-900 shadow-lg transition duration-300"
        title="Go Back"
      >
        <ArrowLeft size={20} />
      </motion.button>

      {/* Form container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative bg-white/30 backdrop-blur-md rounded-md shadow-xl w-full max-w-3xl p-6 md:p-8 lg:p-10 z-10"
      >
        <h2 className="text-3xl md:text-4xl italic font-medium text-gray-900 mb-6 text-center drop-shadow-lg">
          Let's Start a Conversation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm md:text-base">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-900 font-medium mb-1">First Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-2.5 rounded-lg bg-white/30 border border-white/50 text-gray-900 placeholder-gray-500 focus:outline-none"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full p-2.5 rounded-lg bg-white/30 border border-white/50 text-gray-900 placeholder-gray-500 focus:outline-none"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-900 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-2.5 rounded-lg bg-white/30 border border-white/50 text-gray-900 placeholder-gray-500 focus:outline-none"
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
                className="w-full p-2.5 rounded-lg bg-white/30 border border-white/50 text-gray-900 placeholder-gray-500 focus:outline-none"
                placeholder="+92 300 1234567"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-900 font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              required
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-white/30 border border-white/50 text-gray-900 placeholder-gray-500 focus:outline-none resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 rounded-sm cursor-pointer shadow-lg transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactPage;
