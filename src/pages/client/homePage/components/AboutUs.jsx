import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 lg:py-24 mx-auto lg:flex  justify-between">

          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 ">
            <img className="object-cover object-center w-full h-full" src="https://res.cloudinary.com/dramj404v/image/upload/v1736004471/8-bit/public/ehdehkwbj8v11414yzgc.png" alt="stats" />
          </div>

          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10 ">
            <div className="w-full sm:p-4 px-4 mb-6">
              <p className="text-4xl font-bold py-5 border-b-2 my-3 w-1/2 border-indigo-500 ">Our Mission</p>
              <h1 className="title-font font-medium text-3xl mb-2 text-justify text-gray-900">
                To empower businesses with seamless, reliable, and future-ready web solutions that drive <span className="text-indigo-500">growth and success</span>.
              </h1>
              <div className="leading-relaxed">
                At 8 bit, we specialize in delivering top-notch web applications tailored to meet your business needs. With expertise in modern technologies and a commitment to excellence, we transform ideas into scalable and impactful digital solutions.
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;