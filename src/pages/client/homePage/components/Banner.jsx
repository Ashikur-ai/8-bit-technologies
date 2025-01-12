import React from 'react';

const Banner = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 lg:py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-gray-900">Empowering Businesses with
              <br className="hidden lg:inline-block" />Cutting-Edge Web Solutions
            </h1>
            <p className="mb-8 text-xl leading-relaxed">
              Building scalable, modern, and innovative web applications for the future.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get in Touch</button>
              
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="animate-pulse object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/dramj404v/image/upload/v1735750603/ARK%20Limited/8-bit/ypsluowmp5v7lnimoso5.png" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;