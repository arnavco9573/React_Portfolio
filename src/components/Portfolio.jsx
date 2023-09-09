import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import './Portfolio.css'; // Import the external CSS file
import { FiGithub } from 'react-icons/fi';

const Portfolio = ({ items }) => {
  return (
    <section className="portfolio bg-gray-800 text-white font-primary min-h-screen pt-16 pb-8">
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mb-4">
        Latest <span className="text-[#0ef]">Projects</span>
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div className="portfolio-box relative bg-white rounded-lg shadow-md overflow-hidden mx-4 md:mx-0"  key={item.id}>
            <img
              src={item.img}
              alt=""
              className="w-full md:w-auto transition-transform scale-100 hover:scale-110 opacity-90"
            />

            <div className="portfolio-layer absolute inset-0 bg-gradient-to-t from-opacity-0 to-[#0ef] flex flex-col justify-center items-center text-white text-center transition-opacity transform translate-y-full hover:translate-y-0 hover:opacity-100 duration-300 ease-in-out opacity-0">
              <h4 className="text-xl md:text-2xl text-black font-semibold">{item.name}</h4>
              <p className="text-sm md:text-base text-black font-medium">{item.desc}</p>
              <div className="mt-2">
                <a href={item.link} className="text-xl md:text-2xl"><BiLinkExternal /></a>
                <a href={item.glink} className="text-xl md:text-2xl ml-2"><FiGithub /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
