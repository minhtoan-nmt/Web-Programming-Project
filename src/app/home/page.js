import Link from "next/link";
import Header from "@/app/comhome/Header";
import Sidebar from "@/app/comhome/Sidebar";
import Banner from "@/app/comhome/Banner";
import ProductList from "@/app/comhome/ProductList";

export default function Home() {
  return (
    <div className="min-h-screen pt-12"> {/* padding top để tránh che bởi nav */}
      {/* Navigation Bar */}
      <nav className="w-full bg-gray-100 text-black text-sm py-2 px-4 sm:px-6 flex justify-end items-center gap-4 sm:gap-6 fixed top-0 left-0 right-0 z-50">
        <Link href="/login" className="hover:text-blue-400 transition">
          Đăng nhập
        </Link>
        <Link href="/register" className="hover:text-blue-400 transition">
          Đăng ký
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row">
        {/* Sidebar: Ẩn trên mobile, hiện từ md trở lên */}
        <div className="hidden md:block md:w-1/5">
          <Sidebar />
        </div>

        {/* Main Section */}
        <section className="w-full md:w-4/5 p-4">
          <Banner />
          <ProductList />
        </section>
      </main>
    </div>
  );
}
