import React from 'react';

const Contact = () => {
  return (
    <div className='bg-[#1d2534] text-white font-primary min-h-screen pt-16 pb-8' id='contact'>
      <section className="contact-us max-w-7xl mx-auto px-4" id="contact-us">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mb-8">Contact <span className="text-[#0ef]">Me!</span></h2>

        <form className="max-w-2xl mx-auto text-center mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 text-lg bg-[#2f3643] rounded-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 text-lg bg-[#2f3643] rounded-lg"
            />
            <input
              type="number"
              placeholder="Mobile Number"
              className="w-full p-4 text-lg bg-[#2f3643] rounded-lg"
            />
            <input
              type="text"
              placeholder="Email Subject"
              className="w-full p-4 text-lg bg-[#2f3643] rounded-lg md:mb-0 mb-4"
            />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="w-full p-4 text-lg bg-[#2f3643] mt-3 rounded-lg resize-none"
          ></textarea>
          <button
            type="text"
            placeholder="Full Name"
            className="mt-8 p-4 text-lg bg-[#0ef] text-black text-center rounded-[4rem] font-[600]"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
