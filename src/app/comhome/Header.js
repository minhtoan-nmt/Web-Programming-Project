"use client";

import { useState } from "react";
import Image from "next/image";
import { FaUser, FaBoxOpen, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Avatar User + Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 rounded-full hover:ring-2 hover:ring-blue-400 transition"
      >
        <Image
          src="/image/hom/banner/user.png"
          alt="user"
          width={36}
          height={36}
          className="rounded-full object-cover"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 sm:w-52 bg-white rounded-lg shadow-md p-3 z-50 text-sm sm:text-base">
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer transition text-xs sm:text-sm md:text-base">
              <FaUser className="shrink-0" /> <span className="truncate">Quản lý tài khoản</span>
            </li>
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer transition text-xs sm:text-sm md:text-base">
              <FaBoxOpen className="shrink-0" /> <span className="truncate">Lịch sử đơn hàng</span>
            </li>
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer transition text-xs sm:text-sm md:text-base">
              <FaSignOutAlt className="shrink-0" /> <span className="truncate">Đăng xuất</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
