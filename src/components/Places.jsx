import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5'
const Places = () => {
  return (
    <div className="py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Popular Places</h1>
        <button className="px-5 py-2 rounded border border-green-500 text-green-500">
          View All
        </button>
      </div>

      <div className="places py-10 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center">
        <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
          <div className="w-full h-[150px] md:h-[230px]">
            <img
              src="./image2.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-2 space-y-2">
            <div className="flex justify-between items-center">
              <h1>Moscow</h1>
              <p className="flex items-center space-x-2">
                <span className="text-red-500">
                  <AiFillStar />
                </span>
                <span>4.5</span>
              </p>
            </div>
            <p className="flex items-center space-x-2 text-green-500">
              <IoLocationOutline />{" "}
              <span>
                <b>Russia</b>
              </span>
            </p>
            <p>
              <span className="text-black-500">₹ 40,000</span>
            </p>
          </div>
        </div>
        <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
          <div className="w-full h-[150px] md:h-[230px]">
            <img
              src="./image1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-2 space-y-2">
            <div className="flex justify-between items-center">
              <h1>Rome</h1>
              <p className="flex items-center space-x-2">
                <span className="text-red-500">
                  <AiFillStar />
                </span>
                <span>4.2</span>
              </p>
            </div>
            <p className="flex items-center space-x-2 text-green-500">
              <IoLocationOutline />{" "}
              <span>
                <b>Itally</b>
              </span>
            </p>
            <p>
              <span className="text-black-500">₹ 45,000</span>
            </p>
          </div>
        </div>
        <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
          <div className="w-full h-[150px] md:h-[230px]">
            <img
              src="./image3.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-2 space-y-2">
            <div className="flex justify-between items-center">
              <h1>Dubai</h1>
              <p className="flex items-center space-x-2">
                <span className="text-red-500">
                  <AiFillStar />
                </span>
                <span>4.6</span>
              </p>
            </div>
            <p className="flex items-center space-x-2 text-green-500">
              <IoLocationOutline />{" "}
              <span>
                <b>UAE</b>
              </span>
            </p>
            <p>
              <span className="text-black-500">₹ 80,000</span>
            </p>
          </div>
        </div>
        <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
          <div className="w-full h-[150px] md:h-[230px]">
            <img
              src="./image4.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-2 space-y-2">
            <div className="flex justify-between items-center">
              <h1>Rio de jeneiro</h1>
              <p className="flex items-center space-x-2">
                <span className="text-red-500">
                  <AiFillStar />
                </span>
                <span>4.0</span>
              </p>
            </div>
            <p className="flex items-center space-x-2 text-green-500">
              <IoLocationOutline />{" "}
              <span>
                <b>Brazil</b>
              </span>
            </p>
            <p>
              <span className="text-black-500">₹ 35,000</span>
            </p>
          </div>
        </div>
        <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
          <div className="w-full h-[150px] md:h-[230px]">
            <img
              src="./image5.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-2 space-y-2">
            <div className="flex justify-between items-center">
              <h1>Madarid</h1>
              <p className="flex items-center space-x-2">
                <span className="text-red-500">
                  <AiFillStar />
                </span>
                <span>4.2</span>
              </p>
            </div>
            <p className="flex items-center space-x-2 text-green-500">
              <IoLocationOutline />{" "}
              <span>
                <b>Spain</b>
              </span>
            </p>
            <p>
              <span className="text-black-500">₹ 90,000</span>
            </p>
          </div>
        </div>
        <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
          <div className="w-full h-[150px] md:h-[230px]">
            <img
              src="./image7.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-2 space-y-2">
            <div className="flex justify-between items-center">
              <h1>Mumbai</h1>
              <p className="flex items-center space-x-2">
                <span className="text-red-500">
                  <AiFillStar />
                </span>
                <span>4.0</span>
              </p>
            </div>
            <p className="flex items-center space-x-2 text-green-500">
              <IoLocationOutline />{" "}
              <span>
                <b>India</b>
              </span>
            </p>
            <p>
              <span className="text-black-500">₹ 25,000</span>
            </p>
          </div>
        </div>
        <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
          <div className="w-full h-[150px] md:h-[230px]">
            <img
              src="./image8.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-2 space-y-2">
            <div className="flex justify-between items-center">
              <h1>Vietnam</h1>
              <p className="flex items-center space-x-2">
                <span className="text-red-500">
                  <AiFillStar />
                </span>
                <span>4.8</span>
              </p>
            </div>
            <p className="flex items-center space-x-2 text-green-500">
              <IoLocationOutline />{" "}
              <span>
                <b>Hanoi</b>
              </span>
            </p>
            <p>
              <span className="text-black-500">₹ 42,000</span>
            </p>
          </div>
        </div>
        <div className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
          <div className="w-full h-[150px] md:h-[230px]">
            <img
              src="./image10.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-2 space-y-2">
            <div className="flex justify-between items-center">
              <h1>London</h1>
              <p className="flex items-center space-x-2">
                <span className="text-red-500">
                  <AiFillStar />
                </span>
                <span>4.5</span>
              </p>
            </div>
            <p className="flex items-center space-x-2 text-green-500">
              <IoLocationOutline />{" "}
              <span>
                <b>UK</b>
              </span>
            </p>
            <p>
              <span className="text-black-500">₹ 65,000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Places