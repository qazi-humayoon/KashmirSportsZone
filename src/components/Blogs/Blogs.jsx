import React from "react";

function Blogs() {
  return (
    <div>
      <div className="text-center pt-20 md:pt-36 px-4">
        <p className="font-bold mb-2 text-xl">Blogs</p>
        <h1 className="font-bold text-3xl md:text-5xl mb-4">Stay Updated With Sports</h1>
        <p>Get the latest updates on sports and live cricket matches.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around pt-10 flex-wrap gap-6 px-4 md:px-8 lg:px-16">
        <div className="max-w-sm bg-white border border-black rounded-md shadow">
          <a href="#">
            <img
              className="rounded-t-md"
              src="https://images.pexels.com/photos/5519470/pexels-photo-5519470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="The Impact of Cricket"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                The Impact of Cricket
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">
              Discover how cricket has influenced society and shaped communities.
            </p>
            <a
              href="https://wp.shaktiwebsolutions.com/the-impact-of-cricket-on-indian-society-and-culture/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-black rounded-md shadow">
          <a href="#">
            <img
              className="rounded-t-md"
              src="https://images.pexels.com/photos/7915228/pexels-photo-7915228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="The Rise of E-Sports"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                The Rise of E-Sports
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">
              Explore the evolution and popularity of electronic sports.
            </p>
            <a
              href="https://medium.com/@yash_gupta/exploring-the-rise-of-esports-the-competitive-gaming-phenomenon-e1a743e2dc1a"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-black rounded-md shadow">
          <a href="#">
            <img
              className="rounded-t-md"
              src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="The Importance of Teamwork"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                The Importance of Teamwork
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">
              Learn how teamwork plays a crucial role in achieving success in sports.
            </p>
            <a
              href="https://blog.pitchero.com/the-benefits-of-teamwork-in-sport-600"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
