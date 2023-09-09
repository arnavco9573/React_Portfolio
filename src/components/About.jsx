import React from 'react';

const About = () => {
  return (
    <div className='max-w-full flex justify-center items-center gap-[2rem] bg-[#2f3643] text-white font-primary min-h-screen pt-[5rem] pb-[2rem] ' id="about">
      <section className="about max-w-[1300px] mx-4 md:mx-0">
        <div className="about-content">
          <h2 className="heading text-center text-[3.5rem] md:text-4xl lg:text-5xl xl:text-6xl mb-4">About <span className='text-[#0ef]'>Me</span></h2>
          <h3 className='leading-[3.5rem] text-[2.6rem] md:text-3xl lg:text-4xl xl:text-5xl mb-6 ml-2'>Frontend developer</h3>
          <p className='text-[15px] md:text-xl lg:text-2xl xl:text-[2xl] mx-2 mb-4'>
            Greetings👋! I am a dedicated Web Developer presently enrolled at Delhi Technical Campus🎓. My journey within the realm of web development was initiated by mastering the fundamental building blocks - HTML, CSS, and Bootstrap - which I proficiently employ to design visually captivating and user-centric interfaces. 🎨
            However, my expertise extends beyond the basics. I have adeptly harnessed the capabilities of ⚛️ React.js to infuse dynamism and interactivity into web elements, thereby elevating user experiences and crafting seamless web applications. 💡
            I do not merely settle for conventional practices - I have enthusiastically embraced the cutting-edge realm of 🚀 Tailwind CSS to expedite my development workflow and generate contemporary, responsive designs that seamlessly adapt across an array of devices.
          </p>

          <a href="/" className="btn mb-8 inline-block rounded-full px-4 py-3 bg-[#0ef] shadow-lg text-[#2f3643] text-lg md:text-xl lg:text-[32px] xl:text-[18px] font-semibold tracking-wide hover:shadow-xl transition-transform hover:scale-105">Read More</a>
        </div>
      </section>
    </div>
  );
}

export default About;
