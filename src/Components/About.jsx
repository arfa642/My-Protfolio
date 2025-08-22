import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'
import myPic from '../../pics/myPic.jpg'


const About = () => {
  return (
    <section
      id='about'
     className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
     <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        <div className="md:text-left sm:text-center md:w-1/2 mt-8 md:mt-0">
       
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am</h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Muhammad Arfa</h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className='text-white' >I am a </span>

            <span className="text-[#8245ec]">
              <Typewriter
                words={['Web Developer', 'Graphic Designer', 'Programmer']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          <p className='text-base sm:text-lg md:text-lg  text-gray-400 mb-10 leading-relaxed mt-8' >
            I am a passionate Frontend Developer skilled in HTML, CSS, JavaScript, React, and Tailwind CSS.
            As Co-Founder at Axcend, I build responsive, user-friendly apps, with experience in APIs,
            JSON Server, and backend integration, aiming to become full-stack.
          </p>
         
          <a href=" https://docs.google.com/document/d/1S67T6UDoahVdZrA222I9OrUhVb4zeSdJ/edit?usp=sharing&ouid=103583360578164490778&rtpof=true&sd=true"
            target='_blank'
            rel='noopener noreferrer'

          >
            <button className='text-white inline-block py-3 px-8 rounded-full mt-5 font-bold text-lg transition duration-300 transform hover:scale-105  cursor-pointer '
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: ' 0 0 2px #8245ec ,0 0 2px #8245ec, 0 0 40px #8245ec',
                borderRadius: '30px'
              }}> DOWNLOAD RESUME </button>
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end ml-5">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={myPic}
              alt="myPic"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>






      </div>

    </section>
  )
}

export default About
