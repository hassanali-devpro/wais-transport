import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaComments
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#222223] text-[#F6F4F0]">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Mirwais Transport
                        </h2>
                        <p className="text-sm leading-relaxed">
                            OFFICE #302, KFC Building, Near Al Khail Mall, Al Quoz 3, Dubai —
                            PO Box 124477
                        </p>
                        <p className="mt-3 text-sm">
                            <strong>Phone:</strong>{" "}
                            <a href="tel:+97143453917" className="hover:text-white">
                                +971 4 3453917
                            </a>
                        </p>
                        <p className="text-sm">
                            <strong>Mobile:</strong>{" "}
                            <a
                                href="https://wa.me/971505750546"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                +971 50 5750546
                            </a>
                        </p>
                        <p className="text-sm">
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:info@mirwaistransport.ae"
                                className="hover:text-white"
                            >
                                info@mirwaistransport.ae
                            </a>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Quick Links
                        </h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/" className="hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-white">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/products" className="hover:text-white">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-white">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Our Services
                        </h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/bulk-transport" className="hover:text-white">
                                    Bulk Transport
                                </a>
                            </li>
                            <li>
                                <a href="/building-materials" className="hover:text-white">
                                    Building Materials Supply
                                </a>
                            </li>
                            <li>
                                <a href="/logistics" className="hover:text-white">
                                    Logistics Solutions
                                </a>
                            </li>
                            <li>
                                <a href="/fleet-management" className="hover:text-white">
                                    Fleet Management
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social + Contact Shortcuts */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Connect With Us
                        </h2>

                        {/* Social Media */}
                        <div className="flex space-x-4 mb-6">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-700 rounded-full hover:bg-blue-600"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-700 rounded-full hover:bg-pink-500"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-700 rounded-full hover:bg-blue-500"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-700 rounded-full hover:bg-sky-400"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-700 rounded-full hover:bg-red-600"
                            >
                                <FaYoutube />
                            </a>
                        </div>

                        {/* Direct Contact Icons */}
                        <div className="flex space-x-4">
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/971505750546"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-green-600 rounded-full hover:bg-green-700"
                            >
                                <FaWhatsapp className="text-white text-lg" />
                            </a>

                            {/* Phone Call */}
                            <a
                                href="tel:+971505750546"
                                className="p-3 bg-blue-600 rounded-full hover:bg-blue-700"
                            >
                                <FaPhoneAlt className="text-white text-lg" />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:info@mirwaistransport.ae"
                                className="p-3 bg-yellow-600 rounded-full hover:bg-yellow-700"
                            >
                                <FaEnvelope className="text-white text-lg" />
                            </a>

                            {/* SMS / Messaging */}
                            <a
                                href="sms:+971505750546"
                                className="p-3 bg-red-600 rounded-full hover:bg-red-700"
                            >
                                <FaComments className="text-white text-lg" />
                            </a>
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>
                        © {new Date().getFullYear()} Mirwais Transport. All Rights
                        Reserved.
                    </p>
                    <p>
                        Designed & Developed by{" "}
                        <a
                            href="https://einexsolution.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white font-semibold"
                        >
                            Einex Solutions Ltd
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
