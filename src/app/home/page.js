import Link from "next/link";
import Header from "@/app/comhome/Header";
import Sidebar from "@/app/comhome/Sidebar";
import Banner from "@/app/comhome/Banner";
import ProductList from "@/app/comhome/ProductList";

export default function Home() {
  return (
    <div className="min-h-screen">

      <nav className="w-full bg-gray-100 text-black text-sm py-2 px-6 flex justify-end items-center gap-6 fixed top-0 left-0 right-0 z-50">
  <Link href="/login" className="hover:text-blue-400 transition">
    Đăng nhập
  </Link>
  <Link href="/register" className="hover:text-blue-400 transition">
    Đăng ký
  </Link>
</nav>

    

      <main className="flex">
        <Sidebar />
        <section className="w-4/5 p-4">
          <Banner />
          <ProductList />
        </section>
      </main>
    </div>
  );
}
