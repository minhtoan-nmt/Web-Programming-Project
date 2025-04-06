"use client"; 

import { useState } from "react";
import Image from "next/image";
import { FaUser, FaBoxOpen, FaSignOutAlt } from "react-icons/fa";

export default function Header({ userIcon }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
     {/* Avatar User + Dropdown */}
<button onClick={() => setIsOpen(!isOpen)}> 

  <Image  src="/image/hom/banner/user.png"   alt="user" width={38} height={34} />
 </button>

{/* <button onClick={() => setIsOpen(!isOpen)}>
  <FaUser className="text-2xl" />
</button> */}

    {/* Dropdown Menu */}
{isOpen && (
  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-3 z-50">
    <ul className="space-y-2">
      <li className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded cursor-pointer">
        <FaUser /> Quản lý tài khoản
      </li>
      <li className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded cursor-pointer">
        <FaBoxOpen /> Lịch sử đơn hàng
      </li>
      <li className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded cursor-pointer">
        <FaSignOutAlt /> Đăng xuất
      </li>
    </ul>
  </div>
)}
    </div>
  );
}
