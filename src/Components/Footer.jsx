
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500"
          style={{ color: '#BA55D3' }}>Muhammad Arfa</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              style={{ margin: "10px", fontSize: "20px" }}
              className="hover:text-purple-500 text-sm sm:text-base my-1 m-10"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/" },
            { icon: <FaTwitter />, link: "https://twitter.com/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/" },

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div>
          <br />
          <p className="text-sm text-gray-400 mt-6"
            style={{ marginTop: "6px" }}>
            © 2025 Muhammad Arfa. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
