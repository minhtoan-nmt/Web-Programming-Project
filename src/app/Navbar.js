'use client';
import { useRouter, usePathname, useSearchParams, redirect } from 'next/navigation';

import logo from "../../public/logo.png";
import Image from 'next/image';
import search from '../../public/search.svg';
import Cart from '../../public/cart.svg';
import NavCart from './_component/nav-cart';
import { IoIosMenu } from "react-icons/io";

import Header from '@/app/_comhome/Header';
import Link from "next/link";
import "./globals.css";
import { Suspense, useEffect, useState } from 'react';

export default function Navbar({token}) {
  const pathname = usePathname();
  const hiddenRoutes = ['/auth/login', '/auth/register', '/admin/'];
  const searchParams = useSearchParams();
  const [sidebar, setSidebar] = useState('off');
  const router = useRouter();

  if (hiddenRoutes.includes(pathname) || pathname.startsWith('/admin') || pathname.startsWith('/auth')) {
    return null; 
  }

  function handleSearch(data) {
    const params = new URLSearchParams(searchParams);
    const query = data.get("query");
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    redirect(`/product_page?${params.toString()}`)
  }

  return (
    <div className={(sidebar=="on" ? "flex flex-row" : undefined)}>
    <div className={'h-screen w-[250px] text-lg absolute bg-white p-5 ' + (sidebar=="off" && "hidden")}>
    <Link href={"/post"} ><p className='p-5 w-full rounded-lg hover:bg-gray-200 my-5 bg-blue-100'>Blog</p></Link>
      <Link href={"/faq"} ><p className='p-5 w-full rounded-lg hover:bg-gray-200 my-5 bg-blue-100'>FAQ</p></Link>
    </div>
     <div
      id="navbar"
      className={"flex flex-row justify-evenly items-center md:p-5 bg-gray-100 border-b-2 border-gray-300 h-[125px] " + (sidebar=="on" && "w-4/5 relative left-[250px]")}
    >
      <button className='cursor-pointer' onClick={() => sidebar=="on" ? setSidebar("off") : setSidebar("on")}>
        <IoIosMenu size={32}/>
      </button>
      <Link href="/home" className='hover:scale-115 transition duration-150 ease-in-out'><Image src={logo} alt="logo" width={60} height={61} /></Link>
      <h1 className="hidden md:block md:text-2xl font-bold hover:scale-115 transition duration-150 ease-in-out">
        <Link href="/product_page">Shop của bạn</Link>
      </h1>

      {/* Ô tìm kiếm */}
      <form action={handleSearch} className="border-2 hover:border-gray-400 flex align-middle rounded-xl md:w-[250px] lg:w-[500px] w-30">
        <button id="search" type='submit' className="p-3 hover:scale-115 transition duration-150 ease-in-out">
          <Image src={search} alt="Search icon" width={20} height={20} />
        </button>
        <input
          type="search"
          name='query'
          placeholder="Search ..."
          className="w-full md:h-[42px] p-4 border-none focus:outline-none"
        />
      </form>

      {/* Giỏ hàng */}
      {/* <div className="relative hover:scale-115 transition duration-150 ease-in-out">
        <Link href="/cart">
          <Image src={Cart} alt="Cart" width={38} height={34} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            2
          </span>
        </Link>
      </div> */}

      
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <NavCart />
      {/* </Suspense> */}

      <Header />
 
    </div>
    </div>
  );
}
