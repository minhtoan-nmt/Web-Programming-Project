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
        className="md:hidden fixed top-4 right-4 z-50 bg-white p-2 rounded-full shadow-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay khi mở sidebar mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar mobile dạng nổi */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white p-5 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <h2 className="text-base font-semibold text-gray-700 mb-4">Danh mục</h2>
        <ul className="space-y-3">
          {categories.map(({ name, icon }) => (
            <li
              key={name}
              className="flex items-center gap-3 p-2 rounded-lg hover:text-red-500 cursor-pointer"
              onClick={() => scrollToSection(name)}
            >
              <span>{icon}</span>
              <span className="whitespace-normal break-words">{name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Danh mục hiển thị dọc theo từng hàng */}
      <div className="w-full bg-white shadow-md p-4 flex flex-col gap-3">
        {categories.map(({ name, icon }) => (
          <div
            key={name}
            onClick={() => scrollToSection(name)}
            className="flex items-center gap-3 px-4 py-2 bg-white-100 rounded-md cursor-pointer hover:text-red-500"
          >
            <span className="text-lg">{icon}</span>
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
