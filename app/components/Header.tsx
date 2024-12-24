import Link from 'next/link';
import Image from 'next/image';
import { COLORS } from '../constants/colors';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow">
       <div>
       <Image src="/assets/logo-2.png" alt="Book Illustration" width={80} height={80} className="mx-auto w-[5rem] rounded-md" />
       {/* <img src="/assets/logo.png" alt="Book Illustration" className="mx-auto w-[5rem] rounded-md" /> */}
       </div>
      <nav className="space-x-6 text-black hover:text-red-950">
        <Link href="/">Home</Link>
        <Link href="/pages/aboutus">About</Link>
        <Link href="/pages/store">Store</Link>
        {/* <Link href="/pages/training">Training</Link> */}
        <Link href="/pages/blog">Blog</Link>
        <Link href="/pages/contact">Contact Us</Link>
      </nav>
      <button style={{ backgroundColor: COLORS.button }} className=" text-white px-4 py-2 mb-4 rounded-lg hover:text-red-950">Buy Book</button>
    </header>
  );
};

export default Header;
