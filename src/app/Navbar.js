'use client';
import { usePathname } from 'next/navigation';

import logo from "../../public/logo.png";
import Image from 'next/image';
import search from '../../public/search.svg';
import Cart from '../../public/cart.svg';

import Header from '@/app/comhome/Header';
import Link from "next/link";
import "./globals.css";

export default function Navbar() {
  const pathname = usePathname();
  const hiddenRoutes = ['/auth/login', '/auth/register'];

  if (hiddenRoutes.includes(pathname)) {
    return null; 
  }

  return (
   
     <div
      id="navbar"
      className="flex flex-row justify-evenly items-center md:p-5 bg-gray-100 border-b-2 border-gray-300 h-[125px]"
    >
      <Link href="/home"><Image src={logo} alt="logo" width={60} height={61} /></Link>
      <h1 className="hidden md:block md:text-2xl font-bold">
        <Link href="/product_page">Shop của bạn</Link>
      </h1>

      {/* Ô tìm kiếm */}
      <form className="border-2 flex align-middle rounded-xl md:w-[250px] lg:w-[500px] w-30">
        <button id="search" className="p-3">
          <Image src={search} alt="Search icon" width={20} height={20} />
        </button>
        <input
          type="search"
          placeholder="Search ..."
          className="w-full md:h-[42px] p-4 border-none focus:outline-none"
        />
      </form>

      {/* Giỏ hàng */}
      <div className="relative">
        <Link href="/cart">
          <Image src={Cart} alt="Cart" width={38} height={34} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            2
          </span>
        </Link>
      </div>

      <Header />
 
    </div>
  );
}
