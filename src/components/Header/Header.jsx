import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='shadow sticky top-0 z-50 bg-white'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Logo and Title */}
        <div className='flex items-center gap-4 md:gap-8'>
          <img className='w-10 h-10 rounded-md' src="https://scontent.fsxr1-1.fna.fbcdn.net/v/t39.30808-6/439493424_423369597114282_7360207015460433435_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ec-4ecu0N0sQ7kNvgHq_Gkz&_nc_ht=scontent.fsxr1-1.fna&oh=00_AYDZpzOBN8oOkORUtFtccPAvkEgrxdZb5LLMqYQ_afD9MA&oe=665E32D4" alt="" />
          <a className='font-bold md:text-2xl font-sans' href="https://scontent.fsxr1-1.fna.fbcdn.net/v/t39.30808-6/439493424_423369597114282_7360207015460433435_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ec-4ecu0N0sQ7kNvgHq_Gkz&_nc_ht=scontent.fsxr1-1.fna&oh=00_AYDZpzOBN8oOkORUtFtccPAvkEgrxdZb5LLMqYQ_afD9MA&oe=665E32D4">Kashmir Sports Zone</a>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-md'
          onClick={toggleMenu}
        >
          <svg
            className={`h-6 w-6 text-gray-700 ${isOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11V16H4Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className={`h-6 w-6 text-gray-700 ${isOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        {/* Desktop Menu */}
        <div className='hidden md:flex items-center space-x-6'>
          <nav className='flex space-x-4'>
            <a className='hover:underline' href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr">About Us</a>
            <a className='hover:underline' href="#">Live Matches</a>
            <a className='hover:underline' href="#">News Updates</a>
            <a className='hover:underline' href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr">More</a>
          </nav>
          <div className='flex items-center space-x-4'>
            <a className='border border-black hover:bg-black hover:text-white transition-all ease duration-300 rounded-md px-3 py-1' href="#">Sign Up</a>
            <a className='border border-black hover:bg-black hover:text-white transition-all ease duration-300 rounded-md px-3 py-1' href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr">Learn More</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
      >
        <nav className='px-4 py-2 flex flex-col space-y-2'>
          <a className='hover:underline' href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr">About Us</a>
          <a className='hover:underline' href="#">Live Matches</a>
          <a className='hover:underline' href="#">News Updates</a>
          <a className='hover:underline' href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr">More</a>
          <a className='border border-black hover:bg-black hover:text-white transition-all ease duration-300 rounded-md px-3 py-1' href="#">Sign Up</a>
          <a className='border border-black hover:bg-black hover:text-white transition-all ease duration-300 rounded-md px-3 py-1' href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr">Learn More</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
