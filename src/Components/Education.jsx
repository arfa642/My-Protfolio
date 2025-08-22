import { education } from '../constantData'
import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {education.map((institution, index) => (
          <div
            key={institution.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
     
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={institution.img}
                alt={institution.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-26 h-26  rounded-md overflow-hidden">
                  <img
                    src={institution.img}
                    alt={institution.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {institution.degree}
                    </h3>
                    <h4 className="text-xl sm:text-sm text-white">
                      {institution.school}
                    </h4>
                    <h4 className="text-xl sm:text-sm text-white">
                      Grade: {institution.grade}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{institution.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{institution.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
