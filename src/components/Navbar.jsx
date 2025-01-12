import React from 'react';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600">
        <div className="container mx-auto flex  flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <div className="">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <div className="w-14 rounded-full">
                <img className='rounded-full' src="https://res.cloudinary.com/dramj404v/image/upload/v1735750603/ARK%20Limited/8-bit/ypsluowmp5v7lnimoso5.png" alt="" />
              </div>
            </a>
          </div>


          <div className="">
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-gray-900">About Us</a>
              <a className="mr-5 hover:text-gray-900">Services</a>
              <a className="mr-5 hover:text-gray-900">Case Studies</a>
              <a className="mr-5 hover:text-gray-900">Contact Us</a>
            </nav>
         </div>
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;