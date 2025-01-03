"use client"
import Link from 'next/link';
import Image from 'next/image';
import { COLORS } from '../constants/colors';
import { useState } from 'react';
import { Button } from "@nextui-org/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-wrap justify-between items-center p-6 bg-white shadow">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/assets/logo-2.png" alt="Book Illustration" width={80} height={80} className="mx-auto w-[5rem] rounded-md" priority />
        </Link>
      </div>
      <div className="block lg:hidden">
        <Button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </Button>
      </div>
      <nav className={`lg:flex lg:items-center lg:space-x-6 text-black ${isOpen ? 'absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-8' : 'hidden'}`}>
        <div className="flex items-center justify-between w-full px-4">
          <Link href="/">
            <Image src="/assets/logo-2.png" alt="Book Illustration" width={24} height={24} className="w-6 h-6 rounded-md" priority />
          </Link>
          <Button onClick={() => setIsOpen(false)} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </Button>
        </div>
        <Link href="/" className="w-full text-center py-2">Home</Link>
        <Link href="/pages/aboutus" className="w-full text-center py-2">About</Link>
        <Link href="/pages/store" className="w-full text-center py-2">Store</Link>
        <Link href="/pages/training" className="w-full text-center py-2">Training</Link>
        <Link href="/pages/blog" className="w-full text-center py-2">Blog</Link>
        <Link href="/pages/contact" className="w-full text-center py-2">Contact</Link>
      </nav>
      <Button style={{ backgroundColor: COLORS.button }} className="hidden lg:block text-white px-4 py-2 rounded-lg hover:text-red-950">Buy Book</Button>
    </header>
  );
};

export default Header;