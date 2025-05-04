'use client';

import Link from "next/link";
import Sidebar from "@/app/_comhome/Sidebar";
import Banner from "@/app/_comhome/Banner";
import ProductList from "@/app/_comhome/ProductList";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation bar */}
      {/* <nav className="w-full bg-gray-100 text-black text-sm py-2 px-4 sm:px-6 fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-end items-center gap-4 sm:gap-6">
          <Link href="/auth/login" className="hover:text-blue-500 transition">
            Đăng nhập
          </Link>
          <Link href="/auth/register" className="hover:text-blue-500 transition">
            Đăng ký
          </Link>
        </div>
      </nav> */}

      {/* Main content */}
      <main className="pt-14 sm:pt-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row">
        <section
         className="hidden md:block"
         >
          <Sidebar />
        </section>
        <section className="w-full md:w-4/5 lg:w-5/6 xl:w-5/6 p-3 sm:p-4 md:p-6 pl-4 sm:pl-6 md:pl-0">
            <Banner />
            <ProductList />
          </section>
        </div>
      </main>
    </div>
  );
}
