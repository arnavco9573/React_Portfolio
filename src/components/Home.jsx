import React from 'react';
import asset1 from '../assets/asset1.png';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import './animation.css';

const Home = () => {
  return (
    <section
      className="home font-primary flex flex-col md:flex-row justify-center items-center bg-[#1d2534] text-white min-h-screen pt-[4rem] pb-[2rem]"
      id="home"
    >
      <div className="home-content xl:ml-32 md:mx-12 mx-4"> {/* Added mx-4 for mobile margin */}
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2 ml-2">
          Hello, It's Me
        </h3>
        <h1 className="mb-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.3] font-bold">
          Arnav Sharma
        </h1>
        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 leading-[1.3] ">
          And I am a <span className="text-[#0ef]">Frontend developer</span>
        </h3>
        <p className="text-base md:text-lg lg:text-[18px] xl:text-[20px] mb-8">
          Web Developer 🌐 | Delhi Technical Campus Student 🎓 | HTML/CSS/Bootstrap UI | ⚛️ React.js | SQL 📊 | Tailwind CSS 🚀 |
        </p>
        <div className="text-left mb-3 flex-col">
          <div className="text-left mb-3 space-x-5">
            <a
              href="https://www.facebook.com/profile.php?id=100008554455445"
              className="social-media mb-2 inline-flex justify-center items-center w-[2.5rem] h-[2.5rem] border border-[#0ef] rounded-full text-2xl text-[#0ef] transition-transform hover:scale-110 hover:bg-[#0ef] hover:text-[#2f3643]"
            >
              <BiLogoFacebook />
            </a>
            <a
              href="https://twitter.com/arnavsharm098?t=YQjwAqiAnb4hm7Azz11JwQ&s=09"
              className="social-media mb-2 inline-flex justify-center items-center w-[2.5rem] h-[2.5rem] border border-[#0ef] rounded-full text-2xl text-[#0ef] transition-transform hover:scale-110 hover:bg-[#0ef] hover:text-[#2f3643]"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/arnav-sharma-212944257/"
              className="social-media mb-2 inline-flex justify-center items-center w-[2.5rem] h-[2.5rem] border border-[#0ef] rounded-full text-2xl text-[#0ef] transition-transform hover:scale-110 hover:bg-[#0ef] hover:text-[#2f3643]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/arnavco9573"
              className="social-media mb-2 inline-flex justify-center items-center w-[2.5rem] h-[2.5rem] border border-[#0ef] rounded-full text-2xl text-[#0ef] transition-transform hover:scale-110 hover:bg-[#0ef] hover:text-[#2f3643]"
            >
              <FiGithub />
            </a>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/1CWGvOAbM4VWbE0H2jMG-LuRgyXHEq3rF/view?usp=sharing"
              target='_blank'
              rel='noreferrer'
              className="btn mb-2 inline-block rounded-full px-4 py-3 bg-[#0ef] shadow-lg text-[#2f3643] text-lg md:text-xl lg:text-[32px] xl:text-[18px] font-semibold tracking-wide hover:shadow-xl transition-transform hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="home-img flex">
        <img
          src={asset1}
          alt=""
          className="w-full md:w-[200vw] animated-image lg:w-[25vw] xl:w-[35vw]"
        />
      </div>
    </section>
  );
};

export default Home;
