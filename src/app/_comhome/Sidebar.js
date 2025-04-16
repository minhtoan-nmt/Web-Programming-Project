"use client";

import { useState } from "react";
import {
  FaTshirt,
  FaLaptop,
  FaHome,
  FaDumbbell,
  FaHeartbeat,
  FaBook,
  FaAppleAlt,
  FaNewspaper,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const categories = [
  { name: "Thời trang", icon: <FaTshirt /> },
  { name: "Điện tử", icon: <FaLaptop /> },
  { name: "Gia dụng", icon: <FaHome /> },
  { name: "Thể thao", icon: <FaDumbbell /> },
  { name: "Sức khỏe", icon: <FaHeartbeat /> },
  { name: "Học tập", icon: <FaBook /> },
  { name: "Thực phẩm", icon: <FaAppleAlt /> },
  { name: "Bài báo", icon: <FaNewspaper /> },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); 
  };

  return (
    <>
      {/* Nút mở sidebar trên mobile */}
      <button
        className="sm:hidden fixed top-4 right-4 z-50 bg-white p-2 rounded-full shadow-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

  
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 sm:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-64 bg-gray-50 p-5
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          sm:translate-x-0 sm:static sm:block
          min-h-screen
        `}
      >
        <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4 whitespace-nowrap">
          Danh mục sản phẩm
        </h2>
        <ul className="space-y-3">
          {categories.map(({ name, icon }) => (
            <li
              key={name}
              className="flex items-center gap-3 p-2 rounded-lg text-black hover:text-red-500 transition-all duration-500 cursor-pointer"
              onClick={() => scrollToSection(name)}
            >
              <span className="w-6 h-6 text-lg flex items-center justify-center">
                {icon}
              </span>
              <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
