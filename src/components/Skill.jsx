import React from 'react';

const Skill = ({ items }) => {
  return (
    <div className='max-w-full flex justify-center items-center gap-[2rem] bg-[#1d2534] text-white font-primary min-h-screen pt-[6rem] pb-[2rem]' id='skills'>
      <section className='max-w-[1300px] mb-10 '>
        <h2 className="heading mb-8 text-[3rem] text-center">My <span className='text-[#0ef]'>Skills</span></h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="skills-box bg-[#2f3643] px-8 py-6 border rounded-[1.5rem] border-[#1d2534] hover:border-[#0ef] transition-all duration-300 text-center flex flex-col justify-center items-center mx-4 md:mx-0 mb-8"> {/* Added mx-4 for mobile margin */}
              <div className='text-[5rem] text-[#0ef]'>{item.img}</div>
              <h3 className='text-2xl xl:text-3xl font-semibold mb-2'>{item.tag}</h3>
              <p className='text-lg xl:text-[1.2rem] mb-4'>
                {item.about}
              </p>
              <a href={item.certi} className="btn rounded-full px-4 py-3 bg-[#0ef] shadow-lg text-[#2f3643] text-lg font-semibold tracking-wide hover:shadow-xl transition-transform hover:scale-105 mb-10">Read More</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skill;
