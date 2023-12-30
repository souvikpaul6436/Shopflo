import React from "react";

const Hero = () => {
  const handleClick = () => {
    console.log("Button Clicked!");
  };
  
  return (
    <div className="py-10">
      <div className="w-full h-[500px] rounded-md bg-[url('./back2.jpg')] bg-cover">
        <div className="w-full md:w-4/5 lg:w-1/2 2xl:w-1/4 bg-gradient-to-r from-gray-700 h-full flex flex-col justify-center space-y-5 p-5 text-white rounded-md">
          <h1 className="text-3xl md:text-5xl font-bold">
            Travel & Explore With Us
          </h1>
          <p className="text-sm md:text-base">
            Explore the world with us! Join our journey, discover new horizons,
            and create unforgettable memories. Let curiosity be your guide, and
            let's make every moment an adventure! 🌍✈️ #ExploreWithUs
          </p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="search place"
              className="px-5 py-2 bg-white rounded-l-md text-gray-500 outline-0"
            />
            <button
              className="px-5 py-2 bg-green-500 font-bold rounded-r-md"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
