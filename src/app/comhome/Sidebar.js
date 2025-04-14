"use client";
import { FaTshirt, FaLaptop, FaHome, FaDumbbell, FaHeartbeat, FaBook, FaAppleAlt, FaNewspaper } from "react-icons/fa";

const categories = [
  { name: "Thời trang", icon: <FaTshirt /> },
  { name: "Điện tử", icon: <FaLaptop /> },
  { name: "Gia dụng", icon: <FaHome /> },
  { name: "Thể thao", icon: <FaDumbbell /> },
  { name: "Sức khỏe", icon: <FaHeartbeat /> },
  { name: "Học tập", icon: <FaBook /> },
  { name: "Thực phẩm", icon: <FaAppleAlt /> },
  { name: "Bài báo", icon: <FaNewspaper /> }
];

const Sidebar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="w-1/5 p-5 border-r border-gray-200 bg-gray-50 min-h-screen">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Danh mục sản phẩm</h2>
      <ul className="space-y-3">
        {categories.map(({ name, icon }) => (
          <li
            key={name}
            className="flex items-center gap-3 p-2 text-gray-700 rounded-lg hover:bg-red-500 hover:text-white cursor-pointer transition-all"
            onClick={() => scrollToSection(name)}
          >
            {icon} <span className="text-sm font-medium">{name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
