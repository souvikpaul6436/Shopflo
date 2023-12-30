import React from 'react'
import {AiOutlineInstagram, AiOutlineYoutube, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="w-full py-10 bg-gray-950 text-gray-200">
      <div className="w-1/2 m-auto flex flex-col justify-center items-center space-y-10">
        <h1 className="text-5xl font-adora">shopflo travel </h1>
        <div>
          <ul className="flex space-x-5">
            <li>Home</li>
            <li>Places</li>
            <li>Trips</li>
            <li>About</li>
            <li>Connect Us</li>
          </ul>
        </div>
        <div className="flex items-center space-x-10">
          <AiOutlineTwitter size={"2rem"} />
          <AiOutlineInstagram size={"2rem"} />
          <AiOutlineLinkedin size={"2rem"} />
        </div>
      </div>
    </div>
  );
}

export default Footer