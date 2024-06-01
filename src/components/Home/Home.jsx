import React from 'react';

function Home() {
  return (
    <div>
      <div>
        <img
          className="w-full h-[300px] md:h-[450px] object-cover"
          src="https://images.unsplash.com/photo-1631194758628-71ec7c35137e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cricket"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 px-4 md:px-8 lg:px-16">
        <div className="text-2xl md:text-4xl p-4 md:p-12 font-bold leading-tight mb-6 md:mb-0">
          Stay Updated with the <br className="hidden md:block" /> Latest Sports News and <br className="hidden md:block" />
          Live Events <i className="ri-arrow-right-circle-fill ml-2"></i>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left">
          <p>
            Kashmir Sports Zone is your go-to source for the latest sports<br className="hidden md:block" /> updates, live
            cricket matches, and more. Join us to stay informed<br className="hidden md:block" /> and never miss a moment of the action.
          </p>
          <div className="mt-6">
            <a
              className="border border-black hover:bg-black hover:text-white transition-all ease duration-300 rounded-md px-3 py-1"
              href=""
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
