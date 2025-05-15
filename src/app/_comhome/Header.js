"use client";

import { useState } from "react";
import Image from "next/image";
import { FaUser, FaBoxOpen, FaSignOutAlt } from "react-icons/fa";
import { signOut } from "../_component/signOut";

export default function Header({ userIcon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Nút Avatar User */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 focus:outline-none hover:scale-115 transition duration-150 ease-in-out"
      >
        <Image
          src="/image/hom/banner/user.png"
          alt="user"
          width={38}
          height={34}
          className="rounded-full border border-gray-300"
        />
        {/* Hiển thị tên user ở md trở lên */}
        <span className="hidden md:inline text-sm font-medium text-gray-700">Tài khoản</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl p-3 z-50">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer transition">
              <FaUser className="text-gray-600" /> Quản lý tài khoản
            </li>
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer transition">
              <FaBoxOpen className="text-gray-600" /> Lịch sử đơn hàng
            </li>
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer transition">
              <button className="flex gap-2" type="button" onClick={() => {
                signOut()
              }}>
              <FaSignOutAlt className="text-gray-600" /> Đăng xuất
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
