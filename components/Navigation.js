"use client"

import 'src/app/globals.css'
import React, { useState } from 'react';

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="z-40 text-4xl flex gap-4 justify-between fixed top-8 inset-x-5 md:inset-x-8 flex-col md:flex-row">
      <div className="hidden md:flex justify-between w-full gap-6 md:gap-12 text-[#5B89FF]">
        <ul className="flex gap-6 md:gap-12 justify-between w-auto md:justify-start ">
          {/* <li><a href="/about">About</a></li> */}
          <li><a href="https://naturalmatter.shop/" target="_blank" rel="noreferrer">Shop</a></li>
          <li><a href="https://read.cv/lisasy" target="_blank" rel="noreferrer">Resume</a></li>
        </ul>
        <ul className="flex gap-6 md:gap-12 justify-between md:justify-start ">
          <li><a href="https://www.instagram.com/lisasystudio/" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="https://www.tiktok.com/@lisasystudio" target="_blank" rel="noreferrer">TikTok</a></li>
          <li><a href="mailto:hello@lisasy.com" target="_blank" rel="noreferrer">Email</a></li>
        </ul> 
      </div>
      <div className="md:hidden w-full">
        <button onClick={toggleMobileMenu} className="flex text-[#5B89FF] focus:outline-none">
          Menu
        </button>
        {isMobileMenuOpen && (
          <ul className="bg-[#5B89FF] min-h-[75vh] inset-x-0 text-[#321AC6] absolute p-10 flex flex-col justify-evenly">
            {/* <li className="flex-1 flex items-center"><a href="" className="flex-1">About</a></li> */}
            <li className="flex-1 flex items-center"><a href="https://naturalmatter.shop/" className="flex-1" target="_blank" rel="noreferrer">Shop</a></li>
            <li className="flex-1 flex items-center"><a href="https://read.cv/lisasy" className="flex-1" target="_blank" rel="noreferrer">Resume</a></li>
            <li className="flex-1 flex items-center"><a href="https://www.instagram.com/lisasystudio/" className="flex-1" target="_blank" rel="noreferrer">Instagram</a></li>
            <li className="flex-1 flex items-center"><a href="https://www.tiktok.com/@lisasystudio" className="flex-1" target="_blank" rel="noreferrer">TikTok</a></li>
            <li className="flex-1 flex items-center"><a href="mailto:hello@lisasy.com" className="flex-1" target="_blank" rel="noreferrer">Email</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
