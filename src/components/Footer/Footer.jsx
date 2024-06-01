import React from "react";

function Footer() {
  return (
    <div>
      <div className="text-white bg-cover bg-center bg-[url('https://previews.123rf.com/images/rahultiwari3190/rahultiwari31902003/rahultiwari3190200301230/143643245-cricket-horizontal-banner-batsman-championship-background-use-for-cover-poster-template-brochure.jpg')]">
        <div className="px-4 py-20 md:px-16 md:py-40">
          <h1 className="text-2xl md:text-4xl font-bold">
            Stay Updated With the Latest Sports News
          </h1>
          <p className="mt-2">
            Get the latest updates on sports, live cricket matches, and more.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mt-10">
            <a
              className="text-sm  border border-white hover:bg-blue-300 hover:text-black transition-all ease duration-300 rounded-md px-3 py-1"
              href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr"
            >
              Follow
            </a>
            <a
              className="text-sm border border-white hover:bg-blue-300 hover:text-black transition-all ease duration-300 rounded-md px-3 py-1"
              href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>

      <div className="text-center px-4 md:px-16">
        <div className="flex items-center justify-center">
          <img
            className="w-24 h-24 md:w-32 md:h-32 object-cover mt-16 rounded-md"
            src="https://scontent.fsxr1-1.fna.fbcdn.net/v/t39.30808-6/439493424_423369597114282_7360207015460433435_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ec-4ecu0N0sQ7kNvgHq_Gkz&_nc_ht=scontent.fsxr1-1.fna&oh=00_AYDZpzOBN8oOkORUtFtccPAvkEgrxdZb5LLMqYQ_afD9MA&oe=665E32D4"
            alt="Kashmir Sports Zone"
          />
        </div>

        <h1 className="font-bold text-2xl md:text-4xl pt-2">Kashmir Sports Zone</h1>

        <div className="flex items-center justify-center gap-6 md:gap-10 pt-5">
          <a className="text-2xl md:text-3xl" href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr">
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a className="text-2xl md:text-3xl" href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr">
            <i className="ri-youtube-fill"></i>
          </a>
          <a className="text-2xl md:text-3xl" href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr">
            <i className="ri-instagram-line"></i>
          </a>
        </div>

        <div className="w-full px-4 pt-4">
          <div className="border-t-2 border-black"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-5 font-bold p-4 md:p-10 text-center">
          <div>
            <p>© 2024 Kashmir Sports Zone. All rights reserved.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 pt-4 md:pt-0">
            <a href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr">About Us</a>
            <a href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr">Contact Us</a>
            <a href="https://www.facebook.com/sportzone1234/?paipv=0&eav=Afb7UVI_WY0GnFr1FwFgq6oHjapyBxWImyanbkZin7ojSY1BGHlsc3d36yDDfNtnED8&_rdr">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
