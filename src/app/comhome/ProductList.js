"use client";
import { useState } from "react";
import Image from "next/image";
import { FaMale, FaFemale, FaChild, FaClock, FaPhone, FaLaptop,FaCamera, FaHeadphones, FaHome, FaSpotify, FaHeart, FaPepperHot, FaCookie, FaFish, FaBox  } from "react-icons/fa";
import { useRouter } from "next/router";
const onAddToCart = (product) => {
  console.log("Đã thêm vào giỏ hàng:", product);
};
const ProductList = () => {
  const categories = [
    { name: "Nam", icon: <FaMale size={32} className="text-blue-500" /> },
    { name: "Nữ", icon: <FaFemale size={32} className="text-pink-500" /> },
    { name: "Trẻ em", icon: <FaChild size={32} className="text-yellow-500" /> },
  ];
  const electronicCategories = [
    { name: "Điện thoại", icon: <FaPhone size={32} className="text-blue-500" /> },
    { name: "Máy tính", icon: <FaLaptop size={32} className="text-pink-500" /> },
    { name: "Đồng hồ", icon: <FaClock size={32} className="text-yellow-500" /> },
    { name: "Camera", icon: <FaCamera size={32} className="text-green-500" /> }, 
    { name: "Tai nghe", icon: <FaHeadphones size={32} className="text-purple-500" /> }, 
  ];
  const foodCategories = [
    { name: "Gia vị", icon: <FaPepperHot size={32} className="text-red-500" /> },
    { name: "Ăn vặt", icon: <FaCookie size={32} className="text-yellow-500" /> },
    { name: "Đồ sống", icon: <FaFish size={32} className="text-blue-500" /> },
    { name: "Đóng hộp", icon: <FaBox size={32} className="text-green-500" /> },
  ];
  

  const initialCount = 4;
  const [selectedCategory, setSelectedCategory] = useState("Nam"); 
  const [visibleCount, setVisibleCount] = useState(initialCount);
 //gia dungj
 const [selectedHouseholdCategory, setSelectedHouseholdCategory] = useState("Gia dụng");
const [householdVisibleCount, setHouseholdVisibleCount] = useState(initialCount);

  
 //
  const allProducts = [
    { id: 1, category: "Nam", name: "Áo Nam", price: 120000, image: "/image/hom/banner/ao1.avif" },
    { id: 2, category: "Nữ", name: "Váy Nữ", price: 130000, image: "/image/hom/banner/v2.webp" },
    { id: 3, category: "Trẻ em", name: "Áo Bé Gái", price: 90000, image: "/image/hom/banner/g1.avif" },
    { id: 4, category: "Nam", name: "Áo Nam", price: 140000, image: "/image/hom/banner/ao3.avif" },
    { id: 5, category: "Nữ", name: "Váy Nữ", price: 110000, image: "/image/hom/banner/v3.webp" },
    { id: 6, category: "Trẻ em", name: "Áo Bé Trai", price: 80000, image: "/image/hom/banner/t1.webp" },
    { id: 7, category: "Nam", name: "Áo Nam", price: 150000, image: "/image/hom/banner/ao5.webp" },
    { id: 8, category: "Nữ", name: "Giày Cao Gót", price: 160000, image: "/image/hom/banner/n4.jpg" },
    { id: 9, category: "Nam", name: "Áo Nam", price: 120000, image: "/image/hom/banner/ao2.webp" },
    { id: 10, category: "Nữ", name: "Váy Nữ", price: 130000, image: "/image/hom/banner/v1.avif" },
    { id: 11, category: "Trẻ em", name: "Áo Bé Gái", price: 90000, image: "/image/hom/banner/g1.avif" },
    { id: 12, category: "Nam", name: "Áo Nam", price: 140000, image: "/image/hom/banner/ao4.jpg" },
    { id: 13, category: "Nữ", name: "Áo Nữ", price: 110000, image: "/image/hom/banner/n2.webp" },
    { id: 14, category: "Trẻ em", name: "Áo Bé Trai", price: 80000, image:"/image/hom/banner/t2.webp" },
    { id: 15, category: "Nam", name: "Áo Nam", price: 150000, image: "/image/hom/banner/ao6.jpg" },
    { id: 16, category: "Nữ", name: "Giày Cao Gót", price: 160000, image: "/image/hom/banner/n3.jpg" },

    // điẹne tửtử
    { id: 17, category: "Điện thoại", name: "iPhone 13", price: 1000000, image: "/image/hom/banner/d1.jpg" },
    { id: 18, category: "Điện thoại", name: "iPhone 14", price: 1100000, image: "/image/hom/banner/d2.webp" },
    { id: 19, category: "Điện thoại", name: "iPhone 15", price: 1200000, image: "/image/hom/banner/d3.webp" },
    { id: 20, category: "Điện thoại", name: "iPhone 12", price: 900000, image: "/image/hom/banner/d4.png" },
    { id: 21, category: "Điện thoại", name: "iPhone 10", price: 700000, image: "/image/hom/banner/d5.webp" },
    { id: 22, category: "Máy tính", name: "MacBook Air 13-inch", price: 1800000, image: "/image/hom/banner/m2.webp" },
    { id: 23, category: "Máy tính", name: "MacBook Pro 16 inch M4", price: 2000000, image: "/image/hom/banner/m1.webp" },
    { id: 24, category: "Máy tính", name: "MacBook Air 14 inch", price: 1700000, image: "/image/hom/banner/m3.webp" },
    { id: 25, category: "Máy tính", name: "Laptop HP 15-FD0095WM", price: 1500000, image: "/image/hom/banner/m4.webp" },
    { id: 26, category: "Máy tính", name: "MacBook Pro 13 inch", price: 1500000, image: "/image/hom/banner/m5.webp" },
    { id: 27, category: "Đồng hồ", name: "Đồng Hồ Chính Hãng BABY-G BA-130-7A1", price: 1000000, image: "/image/hom/banner/h1.webp" },
    { id: 28, category: "Đồng hồ", name: "Đồng Hồ Nữ Chính Hãng CITIZEN Quartz EU6060-55D", price: 2000000, image: "/image/hom/banner/h2.webp" },
    { id: 29, category: "Đồng hồ", name: "Đồng Hồ Nam Chính Hãng CASIO G-SHOCK GA-110-1B", price: 10000000, image: "/image/hom/banner/h3.webp" },
    { id: 30, category: "Đồng hồ", name: "Đồng hồ Frederique Constant", price: 5000000, image: "/image/hom/banner/h4.webp" },
    { id: 31, category: "Đồng hồ", name: "Đồng hồ Hublot Big Bang Integral Titanium", price: 6000000, image: "/image/hom/banner/h5.webp" },

    { id: 32, category: "Camera", name: "Sony Alpha A7", price: 2000000, image: "/image/hom/banner/c1.webp" },
  { id: 33, category: "Camera", name: "Canon EOS R5", price: 3500000, image: "/image/hom/banner/c2.webp" },
  { id: 34, category: "Camera", name: "Nikon Z9", price: 4000000, image: "/image/hom/banner/c3.webp" },
  { id: 35, category: "Camera", name: "Fujifilm X-T5", price: 1800000, image: "/image/hom/banner/c4.webp" },
  { id: 36, category: "Tai nghe", name: "AirPods Pro", price: 250000, image: "/image/hom/banner/tai1.webp" },
  { id: 37, category: "Tai nghe", name: "Sony WH-1000XM5", price: 400000, image: "/image/hom/banner/tai2.webp" },
  { id: 38, category: "Tai nghe", name: "Bose QuietComfort", price: 350000, image: "/image/hom/banner/tai3.webp" },
  { id: 39, category: "Tai nghe", name: "JBL Tune 760NC", price: 180000, image: "/image/hom/banner/tai4.webp" },
// gai dung
{ id: 40, category: "Gia dụng", name: "Máy Hút Bụi", price: 300000, image: "/image/hom/banner/gd1.webp" },
{ id: 41, category: "Gia dụng", name: "Nồi Chiên Không Dầu", price: 250000, image: "/image/hom/banner/gd2.webp" },
{ id: 42, category: "Gia dụng", name: "Máy Lọc Nước", price: 400000, image: "/image/hom/banner/gd3.webp" },
{ id: 43, category: "Gia dụng", name: "Máy Giặt", price: 700000, image: "/image/hom/banner/gd4.webp" },
{ id: 44, category: "Gia dụng", name: "Máy Giặt", price: 700000, image: "/image/hom/banner/gd5.webp" },
// the tha
{ id: 45, category: "Thể thao", name: "Giày chạy bộ Nike", price: 200000, image: "/image/hom/banner/sport1.webp" },
{ id: 46, category: "Thể thao", name: "Áo bóng đá Adidas", price: 80000, image: "/image/hom/banner/sport2.webp" },
{ id: 47, category: "Thể thao", name: "Vợt cầu lông Yonex", price: 150000, image: "/image/hom/banner/sport3.webp" },
{ id: 48, category: "Thể thao", name: "Bóng rổ Spalding", price: 60000, image: "/image/hom/banner/sport4.webp" },
{ id: 49, category: "Thể thao", name: "Dụng cụ tập gym", price: 300000, image: "/image/hom/banner/sport5.webp" },
// suc khoe
{ id: 50, category: "Sức khỏe", name: "Máy đo huyết áp Omron", price: 500000, image: "/image/hom/banner/k1.webp" },
  { id: 51, category: "Sức khỏe", name: "Máy massage cổ Xiaomi", price: 300000, image: "/image/hom/banner/k2.webp" },
  { id: 52, category: "Sức khỏe", name: "Thực phẩm bổ sung Omega-3", price: 250000, image: "/image/hom/banner/k3.webp" },
  { id: 53, category: "Sức khỏe", name: "Vitamin tổng hợp", price: 100000, image: "/image/hom/banner/k4.webp" },
  { id: 54, category: "Sức khỏe", name: "Máy xông mũi họng", price: 400000, image: "/image/hom/banner/k5.webp" },
//hoc tap
{ id: 60, category: "Học tập", name: "Khéo ăn khéo nói sẽ có được thiên hạ", price: 1200000, image: "/image/hom/banner/s1.webp" },
{ id: 61, category: "Học tập", name: "Thỏ bảy màu", price: 500000, image: "/image/hom/banner/s2.webp" },
{ id: 62, category: "Học tập", name: "Tâm trí tối giản", price: 80000, image: "/image/hom/banner/s3.webp" },
{ id: 63, category: "Học tập", name: "Đắc nhân tâm", price: 40000, image: "/image/hom/banner/s4.webp" },
{ id: 64, category: "Học tập", name: "Kỹ luật bản thân", price: 150000, image: "/image/hom/banner/s5.webp" },
// thuc pham
 // Gia vị
 { id: 70, category: "Gia vị", name: "Muối biển", price: 10000, image: "/image/hom/banner/mu.webp" },
 { id: 71, category: "Gia vị", name: "Tiêu đen", price: 15000, image: "/image/hom/banner/ti.jpg" },
 { id: 72, category: "Gia vị", name: "Tương ớt", price: 5000, image: "/image/hom/banner/t3.webp" },
 { id: 73, category: "Gia vị", name: "Nước mắm", price: 20000, image: "/image/hom/banner/t4.png" },
 { id: 86, category: "Gia vị", name: "Đường", price: 20000, image: "/image/hom/banner/t5.jpg" },

 // Ăn vặt
 { id: 74, category: "Ăn vặt", name: "Bánh quy", price: 25000, image: "/image/hom/banner/v1.jpg" },
 { id: 75, category: "Ăn vặt", name: "Hạt điều", price: 40000, image: "/image/hom/banner/ha.jpg" },
 { id: 76, category: "Ăn vặt", name: "Kẹo dẻo", price: 15000, image: "/image/hom/banner/ke.jpg" },
 { id: 77, category: "Ăn vặt", name: "Bắp rang bơ", price: 30000, image: "/image/hom/banner/v4.webp" },

 // Đồ sống
 { id: 78, category: "Đồ sống", name: "Thịt bò", price: 200000, image: "/image/hom/banner/bo.webp" },
 { id: 79, category: "Đồ sống", name: "Cá hồi", price: 250000, image: "/image/hom/banner/ca.jpg" },
 { id: 80, category: "Đồ sống", name: "Gà nguyên con", price: 150000, image: "/image/hom/banner/ga.jpg" },
 { id: 81, category: "Đồ sống", name: "Tôm tươi", price: 180000, image: "/image/hom/banner/d4.jpg" },

 // Đóng hộp
 { id: 82, category: "Đóng hộp", name: "Cá hộp", price: 50000, image: "/image/hom/banner/p1.jpg" },
 { id: 83, category: "Đóng hộp", name: "Thịt hộp", price: 70000, image: "/image/hom/banner/p2.jpg" },
 { id: 84, category: "Đóng hộp", name: "Sữa đặc", price: 40000, image: "/image/hom/banner/p3.webp" },
 { id: 85, category: "Đóng hộp", name: "Trái cây đóng hộp", price: 60000, image: "/image/hom/banner/p4.webp" },
  ];

// Lọc sản phẩm theo danh mục
const filteredProducts = allProducts.filter((product) => product.category === selectedCategory);
const isExpanded = visibleCount >= filteredProducts.length;

// 🔹 Danh mục điện tử
const [selectedElectronicCategory, setSelectedElectronicCategory] = useState("Điện thoại");
const [electronicVisibleCount, setElectronicVisibleCount] = useState(initialCount);

// 🔹 Lọc sản phẩm điện tử
const filteredElectronicProducts = allProducts.filter((product) => product.category === selectedElectronicCategory);
const isElectronicExpanded = electronicVisibleCount >= filteredElectronicProducts.length;
// Lọc sản phẩm Gia dụng
const filteredHouseholdProducts = allProducts.filter((product) => product.category === selectedHouseholdCategory);
const isHouseholdExpanded = householdVisibleCount >= filteredHouseholdProducts.length;
// Toggle hiển thị thêm sản phẩm
const toggleShowMore = () => {
  setVisibleCount(isExpanded ? initialCount : filteredProducts.length);
};

const toggleShowMoreElectronic = () => {
  setElectronicVisibleCount(isElectronicExpanded ? initialCount : filteredElectronicProducts.length);
};
// the thao
const [selectedSportCategory, setSelectedSportCategory] = useState("Thể thao");
const [sportVisibleCount, setSportVisibleCount] = useState(initialCount);

// Lọc sản phẩm Thể thao
const filteredSportProducts = allProducts.filter((product) => product.category === selectedSportCategory);
const isSportExpanded = sportVisibleCount >= filteredSportProducts.length;

// Toggle hiển thị sản phẩm
const toggleShowMoreSport = () => {
  setSportVisibleCount(isSportExpanded ? initialCount : filteredSportProducts.length);
};
// suc khoe
const [selectedHealthCategory, setSelectedHealthCategory] = useState("Sức khỏe");
const [healthVisibleCount, setHealthVisibleCount] = useState(initialCount);

// Lọc sản phẩm Sức khỏe
const filteredHealthProducts = allProducts.filter((product) => product.category === selectedHealthCategory);
const isHealthExpanded = healthVisibleCount >= filteredHealthProducts.length;

// Toggle hiển thị sản phẩm
const toggleShowMoreHealth = () => {
  setHealthVisibleCount(isHealthExpanded ? initialCount : filteredHealthProducts.length);
}
// hoc tap
const [selectedStudyCategory, setSelectedStudyCategory] = useState("Học tập");
const [studyVisibleCount, setStudyVisibleCount] = useState(initialCount);

// Lọc sản phẩm Học Tập
const filteredStudyProducts = allProducts.filter((product) => product.category === selectedStudyCategory);
const isStudyExpanded = studyVisibleCount >= filteredStudyProducts.length;

// Toggle hiển thị sản phẩm
const toggleShowMoreStudy = () => {
  setStudyVisibleCount(isStudyExpanded ? initialCount : filteredStudyProducts.length);
};
// thuc pham
const [selectedFoodCategory, setSelectedFoodCategory] = useState("Gia vị");
const [foodVisibleCount, setFoodVisibleCount] = useState(initialCount);
const filteredFoodProducts = allProducts.filter((product) => product.category === selectedFoodCategory);
const isFoodExpanded = foodVisibleCount >= filteredFoodProducts.length;
const toggleShowMoreFood = () => {
  setFoodVisibleCount(isFoodExpanded ? initialCount : filteredFoodProducts.length);
};
// bai bao
const articles = [
  {
    title: "Khoa học",
    description: "Bài báo công bố quốc tế: Khởi sắc nhờ thưởng 'khủng'",
    image: "/image/hom/banner/ba1.webp",
    link: "#",
  },
  {
    title: "Nghiên cứu",
    description: "Năm bước để công bố bài báo quốc tế",
    image: "/image/hom/banner/ba2.webp",
    link: "#",
  },
  {
    title: "Thi cử",
    description: "Đề thi năng khiếu Học viện Báo chí và Tuyên truyền",
    image: "/image/hom/banner/ba3.webp",
    link: "#",
  },
  {
    title: "Nghiên cứu",
    description: "Ba yếu tố làm nên bài báo quốc tế",
    image: "/image/hom/banner/ba4.webp",
    link: "#",
  },
];
  return (
    <div >
      
      <section id="Thời trang" className="mt-12 px-4 sm:px-6 py-6 max-w-[1400px] mx-auto">
  <h2 className="text-xl sm:text-2xl font-bold text-red-500 flex items-center gap-2">
    <span className="w-2 h-5 sm:h-6 bg-red-500 rounded-full"></span> Thời trang
  </h2>

  {/* 🔹 Danh mục */}
  <div className="flex flex-wrap justify-start gap-3 sm:gap-4 my-6">
    {categories.map(({ name, icon }) => (
      <button
        key={name}
        onClick={() => {
          setSelectedCategory(name);
          setVisibleCount(initialCount);
        }}
        className={`flex flex-col items-center p-3 sm:p-4 border rounded-lg w-24 sm:w-32 hover:bg-gray-100 transition ${
          selectedCategory === name ? "bg-gray-200 border-red-500" : ""
        }`}
      >
        <span className="text-xl sm:text-2xl">{icon}</span>
        <span className="mt-2 text-xs sm:text-sm font-semibold text-center">{name}</span>
      </button>
    ))}
  </div>

  {/* 🔹 Danh sách sản phẩm */}
  <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
    {filteredProducts.slice(0, visibleCount).map((product) => (
      <div key={product.id} className="border rounded-lg p-4 relative bg-white shadow-md">
        {/* 🔥 Nhãn giảm giá */}
        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          -40%
        </span>

        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />

        <h3 className="text-sm font-bold mt-2 line-clamp-2 min-h-[3rem]">{product.name}</h3>

        {/* 💰 Giá và giá gốc */}
        <div className="flex items-center gap-2 mt-1">
          <p className="text-red-500 font-semibold text-base sm:text-lg">
            {new Intl.NumberFormat("vi-VN").format(product.price)}₫
          </p>
          <p className="text-gray-500 line-through text-xs sm:text-sm">
            {new Intl.NumberFormat("vi-VN").format(product.price * 1.3)}₫
          </p>
        </div>

        {/* ⭐ Đánh giá */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <p className="text-gray-500 text-xs">(88)</p>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-3 w-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium py-2 rounded-lg transition"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    ))}
  </div>

  {/* 🔹 Nút Xem thêm / Thu gọn */}
  {filteredProducts.length > initialCount && (
    <div className="flex justify-center mt-6">
      <button
        onClick={toggleShowMore}
        className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition"
      >
        {isExpanded ? "Thu gọn" : "Xem thêm"}
      </button>
    </div>
  )}
</section>




{/* 🔹 Điện tử */}
<section id="Điện tử" className="mt-12 px-4 sm:px-6 py-6 max-w-[1400px] mx-auto">
  <h2 className="text-xl sm:text-2xl font-bold text-red-500 flex items-center gap-2">
    <span className="w-2 h-5 sm:h-6 bg-red-500 rounded-full"></span> Điện tử
  </h2>

  {/* 🔹 Danh mục con điện tử */}
  <div className="flex flex-wrap justify-start gap-3 sm:gap-4 my-6">
    {electronicCategories.map(({ name, icon }) => (
      <button
        key={name}
        onClick={() => {
          setSelectedElectronicCategory(name);
          setElectronicVisibleCount(initialCount);
        }}
        className={`flex flex-col items-center p-3 sm:p-4 border rounded-lg w-24 sm:w-32 hover:bg-gray-100 transition ${
          selectedElectronicCategory === name ? "bg-gray-200 border-red-500" : ""
        }`}
      >
        <span className="text-xl sm:text-2xl">{icon}</span>
        <span className="mt-2 text-xs sm:text-sm font-semibold text-center">{name}</span>
      </button>
    ))}
  </div>

  {/* 🔹 Danh sách sản phẩm điện tử */}
  <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
    {filteredElectronicProducts.slice(0, electronicVisibleCount).map((product) => (
      <div key={product.id} className="border rounded-lg p-4 relative bg-white shadow-md">
        {/* 🔥 Nhãn giảm giá */}
        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          -40%
        </span>

        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />

        <h3 className="text-sm font-bold mt-2 line-clamp-2 min-h-[3rem]">{product.name}</h3>

        {/* 💰 Giá và giá gốc */}
        <div className="flex items-center gap-2 mt-1">
          <p className="text-red-500 font-semibold text-base sm:text-lg">
            {new Intl.NumberFormat("vi-VN").format(product.price)}₫
          </p>
          <p className="text-gray-500 line-through text-xs sm:text-sm">
            {new Intl.NumberFormat("vi-VN").format(product.price * 1.3)}₫
          </p>
        </div>

        {/* ⭐ Đánh giá */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <p className="text-gray-500 text-xs">(88)</p>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-3 w-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium py-2 rounded-lg transition"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    ))}
  </div>

  {/* 🔹 Nút Xem thêm / Thu gọn */}
  {filteredElectronicProducts.length > initialCount && (
    <div className="flex justify-center mt-6">
      <button
        onClick={() =>
          setElectronicVisibleCount(
            isElectronicExpanded ? initialCount : filteredElectronicProducts.length
          )
        }
        className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition"
      >
        {isElectronicExpanded ? "Thu gọn" : "Xem thêm"}
      </button>
    </div>
  )}
</section>




{/* 🔹 Gia dụng */}
<section id="Gia dụng" className="mt-12 px-4 sm:px-6 py-6 max-w-[1400px] mx-auto">
  <h2 className="text-xl sm:text-2xl font-bold text-red-500 flex items-center gap-2">
    <span className="w-2 h-5 sm:h-6 bg-red-500 rounded-full"></span> Gia dụng
  </h2>

  {/* 🔹 Danh sách sản phẩm Gia dụng */}
  <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
    {filteredHouseholdProducts.slice(0, householdVisibleCount).map((product) => (
      <div key={product.id} className="border rounded-lg p-4 relative bg-white shadow-md">
        {/* 🔥 Nhãn giảm giá */}
        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          -40%
        </span>

        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />

        <h3 className="text-sm font-bold mt-2 line-clamp-2 min-h-[3rem]">{product.name}</h3>

        {/* 💰 Giá và giá gốc */}
        <div className="flex items-center gap-2 mt-1">
          <p className="text-red-500 font-semibold text-base sm:text-lg">
            {new Intl.NumberFormat("vi-VN").format(product.price)}₫
          </p>
          <p className="text-gray-500 line-through text-xs sm:text-sm">
            {new Intl.NumberFormat("vi-VN").format(product.price * 1.3)}₫
          </p>
        </div>

        {/* ⭐ Đánh giá */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <p className="text-gray-500 text-xs">(88)</p>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-3 w-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium py-2 rounded-lg transition"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    ))}
  </div>

  {/* 🔹 Nút Xem thêm / Thu gọn */}
  {filteredHouseholdProducts.length > initialCount && (
    <div className="flex justify-center mt-6">
      <button
        onClick={() =>
          setHouseholdVisibleCount(
            isHouseholdExpanded ? initialCount : filteredHouseholdProducts.length
          )
        }
        className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition"
      >
        {isHouseholdExpanded ? "Thu gọn" : "Xem thêm"}
      </button>
    </div>
  )}
</section>


{/* the thao */}
<section id="Thể thao" className="mt-12 px-4 sm:px-6 py-6 max-w-[1400px] mx-auto">
  <h2 className="text-xl sm:text-2xl font-bold text-red-500 flex items-center gap-2">
    <span className="w-2 h-5 sm:h-6 bg-red-500 rounded-full"></span> Thể thao
  </h2>

  {/* 🔹 Danh sách sản phẩm Thể thao */}
  <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
    {filteredSportProducts.slice(0, sportVisibleCount).map((product) => (
      <div key={product.id} className="border rounded-lg p-4 relative bg-white shadow-md">
        {/* 🔥 Nhãn giảm giá */}
        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          -30%
        </span>

        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />

        <h3 className="text-sm font-bold mt-2 line-clamp-2 min-h-[3rem]">{product.name}</h3>

        {/* 💰 Giá và giá gốc */}
        <div className="flex items-center gap-2 mt-1">
          <p className="text-red-500 font-semibold text-base sm:text-lg">
            {new Intl.NumberFormat("vi-VN").format(product.price)}₫
          </p>
          <p className="text-gray-500 line-through text-xs sm:text-sm">
            {new Intl.NumberFormat("vi-VN").format(product.price * 1.3)}₫
          </p>
        </div>

        {/* ⭐ Đánh giá */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <p className="text-gray-500 text-xs">(55)</p>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-3 w-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium py-2 rounded-lg transition"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    ))}
  </div>

  {/* 🔹 Nút Xem thêm / Thu gọn */}
  {filteredSportProducts.length > initialCount && (
    <div className="flex justify-center mt-6">
      <button
        onClick={toggleShowMoreSport}
        className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition"
      >
        {isSportExpanded ? "Thu gọn" : "Xem thêm"}
      </button>
    </div>
  )}
</section>


{/* suc khoe */}
<section id="Sức khỏe" className="mt-12 px-4 sm:px-6 py-6 max-w-[1400px] mx-auto">
  <h2 className="text-xl sm:text-2xl font-bold text-red-500 flex items-center gap-2">
    <span className="w-2 h-5 sm:h-6 bg-red-500 rounded-full"></span> Sức khỏe
  </h2>

  {/* 🔹 Danh sách sản phẩm Sức khỏe */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
    {filteredHealthProducts.slice(0, healthVisibleCount).map((product) => (
      <div key={product.id} className="border rounded-lg p-4 relative bg-white shadow-md">
        {/* 🔥 Nhãn giảm giá */}
        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          -25%
        </span>

        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />

        <h3 className="text-sm font-bold mt-2 line-clamp-2 min-h-[3rem]">{product.name}</h3>

        {/* 💰 Giá và giá gốc */}
        <div className="flex items-center gap-2 mt-1">
          <p className="text-red-500 font-semibold text-base sm:text-lg">
            {new Intl.NumberFormat("vi-VN").format(product.price)}₫
          </p>
          <p className="text-gray-500 line-through text-xs sm:text-sm">
            {new Intl.NumberFormat("vi-VN").format(product.price * 1.3)}₫
          </p>
        </div>

        {/* ⭐ Đánh giá */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <p className="text-gray-500 text-xs">(70)</p>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-3 w-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium py-2 rounded-lg transition"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    ))}
  </div>

  {/* 🔹 Nút Xem thêm / Thu gọn */}
  {filteredHealthProducts.length > initialCount && (
    <div className="flex justify-center mt-6">
      <button
        onClick={toggleShowMoreHealth}
        className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition"
      >
        {isHealthExpanded ? "Thu gọn" : "Xem thêm"}
      </button>
    </div>
  )}
</section>


{/* Hoc tap */}
<section id="Học tập" className="mt-12 px-4 sm:px-6 py-6 max-w-[1400px] mx-auto">
  <h2 className="text-xl sm:text-2xl font-bold text-red-500 flex items-center gap-2">
    <span className="w-2 h-5 sm:h-6 bg-red-500 rounded-full"></span> Học tập
  </h2>

  {/* 🔹 Danh sách sản phẩm Học tập */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
    {filteredStudyProducts.slice(0, studyVisibleCount).map((product) => (
      <div key={product.id} className="border rounded-lg p-4 relative bg-white shadow-md">
        {/* 🔥 Nhãn giảm giá */}
        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          -30%
        </span>

        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />

        <h3 className="text-sm font-bold mt-2 line-clamp-2 min-h-[3rem]">{product.name}</h3>

        {/* 💰 Giá và giá gốc */}
        <div className="flex items-center gap-2 mt-1">
          <p className="text-red-500 font-semibold text-base sm:text-lg">
            {new Intl.NumberFormat("vi-VN").format(product.price)}₫
          </p>
          <p className="text-gray-500 line-through text-xs sm:text-sm">
            {new Intl.NumberFormat("vi-VN").format(product.price * 1.3)}₫
          </p>
        </div>

        {/* ⭐ Đánh giá */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <p className="text-gray-500 text-xs">(120)</p>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-3 w-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium py-2 rounded-lg transition"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    ))}
  </div>

  {/* 🔹 Nút Xem thêm / Thu gọn */}
  {filteredStudyProducts.length > initialCount && (
    <div className="flex justify-center mt-6">
      <button
        onClick={toggleShowMoreStudy}
        className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition"
      >
        {isStudyExpanded ? "Thu gọn" : "Xem thêm"}
      </button>
    </div>
  )}
</section>


{/* 🔥 Thực phẩm */}
<section id="Thực phẩm" className="mt-12 px-4 sm:px-6 py-6 max-w-[1400px] mx-auto">
  <h2 className="text-xl sm:text-2xl font-bold text-red-500 flex items-center gap-2">
    <span className="w-2 h-5 sm:h-6 bg-red-500 rounded-full"></span> Thực phẩm
  </h2>

  {/* 🔹 Danh mục con thực phẩm */}
  <div className="flex flex-wrap gap-4 my-6">
    {foodCategories.map(({ name, icon }) => (
      <button
        key={name}
        onClick={() => {
          setSelectedFoodCategory(name);
          setFoodVisibleCount(initialCount);
        }}
        className={`flex flex-col items-center p-3 border rounded-lg w-24 sm:w-28 md:w-32 hover:bg-gray-100 transition ${
          selectedFoodCategory === name ? "bg-gray-200 border-red-500" : ""
        }`}
      >
        {icon}
        <span className="mt-2 text-xs sm:text-sm font-semibold text-center">{name}</span>
      </button>
    ))}
  </div>

  {/* 🔹 Danh sách sản phẩm thực phẩm */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
    {filteredFoodProducts.slice(0, foodVisibleCount).map((product) => (
      <div key={product.id} className="border rounded-lg p-4 relative bg-white shadow-md">
        {/* 🔥 Nhãn giảm giá */}
        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          -20%
        </span>

        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />

        <h3 className="text-sm font-bold mt-2 text-center line-clamp-2 min-h-[3rem]">{product.name}</h3>

        {/* 💰 Giá và giá gốc */}
        <div className="flex items-center gap-2 justify-center mt-1">
          <p className="text-red-500 font-semibold text-base sm:text-lg">
            {new Intl.NumberFormat("vi-VN").format(product.price)}₫
          </p>
          <p className="text-gray-500 line-through text-xs sm:text-sm">
            {new Intl.NumberFormat("vi-VN").format(product.price * 1.3)}₫
          </p>
        </div>

        {/* ⭐ Đánh giá */}
        <div className="flex items-center gap-1 justify-center mt-1">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <p className="text-gray-500 text-xs">(42)</p>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-3 w-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium py-2 rounded-lg transition"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    ))}
  </div>

  {/* 🔹 Nút Xem thêm / Thu gọn */}
  {filteredFoodProducts.length > initialCount && (
    <div className="flex justify-center mt-6">
      <button
        onClick={() =>
          setIsFoodExpanded((prev) => {
            setFoodVisibleCount(prev ? initialCount : filteredFoodProducts.length);
            return !prev;
          })
        }
        className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition"
      >
        {isFoodExpanded ? "Thu gọn" : "Xem thêm"}
      </button>
    </div>
  )}
</section>


{/* bai baos */}
<section id="Bài báo" className="mt-12 px-4 sm:px-6 py-6 max-w-[1400px] mx-auto">
  {/* Tiêu đề */}
  <h2 className="text-xl sm:text-2xl font-bold text-red-500 flex items-center gap-2">
    <span className="w-2 h-5 sm:h-6 bg-red-500 rounded-full"></span> Bài báo
  </h2>

  {/* Danh sách bài viết */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
    {articles.map((article, index) => (
      <div
        key={index}
        className={`relative rounded-lg overflow-hidden shadow-md group transition duration-300 ${
          index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
        }`}
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 sm:h-60 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
          <h3 className="text-sm sm:text-base md:text-lg font-bold line-clamp-2">
            {article.title}
          </h3>
          <p className="text-xs sm:text-sm mt-1 line-clamp-2">{article.description}</p>
          <a
            href={article.link}
            className="text-white underline text-xs sm:text-sm mt-2 inline-block hover:text-rose-400 transition"
          >
            Xem thêm
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


    </div>
  );
};

export default ProductList;