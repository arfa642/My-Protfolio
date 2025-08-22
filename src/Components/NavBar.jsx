import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuItems = (item) => {
    setActiveSection(item);
    setIsOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" }
  ]

  return (
    <nav className={`fixed  top-0 w-full z-50 transition duration-300 px-[5vw] md:px-[7vw] lg:px-[20vw] 
       ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className= '  text-white py-4 flex justify-between items-center'>
        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-[#8245ec]' >&lt;</span>
          <span className='text-white' >Muhammad</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white' >Arfa</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        <ul className='hidden md:flex space-x-8 text-gray-300 items-center m-2'>
          {menuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] 
              ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
              <button onClick={() => handleMenuItems(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        <div className='hidden md:flex space-x-4'>
          <a href="https://github.com/arfa642"
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={24} className='text-gray-300 hover:text-[#8245ec] transition-colors duration-300' />
          </a>
          <a href="https://www.linkedin.com/"
            target='_blank'
            rel='noopener noreferrer'

          >
            <FaLinkedin className='text-gray-300 hover:text-[#8245ec] transition-colors duration-300' size={24} />
          </a>
        </div>

        <div className='md:hidden' >
          {isOpen ? (
            <FiX
              onClick={() => setIsOpen(false)}
              className="text-[#8245ec] cursor-pointer"
              size={28}
            />
          ) : (
            <FiMenu
              onClick={() => setIsOpen(true)}
              className='text-gray-300 hover:text-[#8245ec] transition-colors duration-300 cursor-pointer '
              size={28}
            />
          )}
        </div>


        {
          isOpen &&
          (
            <div className='absolute top-16 left-1/2  transform -translate-x-1/2 w-4/5 bg-[#050414] opacity-80 backdrop-filter backdrop-blur-lg z-50 roundrd-lg shadow-lg '   >
              <ul className='flex flex-col text-gray-300 items-center space-y-4 py-4'>
                {menuItems.map((item) => (
                  <li key={item.id} className={`cursor-pointer hover:text-white
              ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                    <button onClick={() => handleMenuItems(item.id)}>{item.label}</button>
                  </li>
                ))}
                <div className='flex space-x-4' >
                  <a href="https://github.com/arfa642"
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaGithub size={24} className='text-gray-300 hover:text-[#8245ec] transition-colors duration-300' />
                  </a>
                  <a href="https://www.linkedin.com/"
                    target='_blank'
                    rel='noopener noreferrer'

                  >
                    <FaLinkedin className='text-gray-300 hover:text-[#8245ec] transition-colors duration-300' size={24} />
                  </a>
                </div>
              </ul>
            </div>
          )

        }


      </div>
    </nav>
  )
}

export default NavBar