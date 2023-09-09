import React from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

const Footer = () => {
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15); // 500 milliseconds for scrolling
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <div>
      <footer className="footer max-w-full flex flex-col-reverse md:flex-row justify-between gap-[2rem] bg-[#2f3643] text-white font-primary pt-[2rem] pb-[2rem]">
        <div className="footer-text max-w-7xl mx-8 text-[1.2rem] text-center md:text-left">
          <p className="text-center md:mx-auto">Copyright &copy; 2023 by Arnav | All Rights Reserved</p>
        </div>

        <div className="footer-iconTop mx-8 text-[1.2rem] w-[2rem] h-8 ml-48 md:mr-40 text-center items-center md:text-right">
          <p href="#home" className="cursor-pointer justify-center items-center" onClick={scrollToTop}>
            <BsFillArrowUpSquareFill className="w-[2rem] h-8 rounded-sm text-[#0ef]" />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
