'use client'

import Image from "next/image";
import { redirect, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCart } from "./removeFromCart";
import { createInvoice } from "./createInvoice";

function NumberOfItem({quantity, numLeft}) {
  const [numItems, setNumItems] = useState(quantity);
  return (
    <div className="border-2 rounded-md mr-3 flex flex-nowrap w-fit">
      <button className="border-r-2 p-2 md:w-10 w-7 h-full hover:bg-gray-300 transition delay-75" onClick={() => numItems-1 > 0 && setNumItems(numItems - 1)}>
        <span>-</span>
      </button>
      <button className="border-r-2 p-2 md:w-16 w-12 h-full">
        <span>{numItems}</span>
      </button>
      <button 
        className="p-2 md:w-10 w-7 h-full hover:bg-gray-300 transition delay-75" 
        onClick={() => numItems+1 <= numLeft ? setNumItems(numItems+1) : alert("Số lượng bạn chọn vượt quá số lượng hiện có")}
      >
        +
      </button>
    </div>
  )
}

export default function Home() {
  const [itemList, setitemList] = useState(null);
  useEffect(() => {
    async function getitemList() {
      const res = await fetch("/api/get_cart_data");
      if (!res.ok) {
        console.log(res.status);
      }
      const data = await res.json();
      setitemList(data.data);
    }
    getitemList();
  }, [])

  if (!itemList) {
    return (
      <div className="p-25 h-screen">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    )
  }

  if (itemList.length==0) {
    return (
      <div className="p-25 h-screen flex justify-center items-center">
        <h1 className="text-3xl">Không có mặt hàng nào trong giỏ hàng. Vui lòng quay lại!</h1>
      </div>
    )
  }

  // const itemList = [
  //   {
  //     itemName: "LCD Monitor",
  //     price: 105000,
  //     amount: 1,
  //     totalPrice: 105000,
  //     imagePath: "/image/cart/monitor.webp"
  //   },
  //   {
  //     itemName: "Gamepad",
  //     price: 35000,
  //     amount: 2,
  //     totalPrice: 70000,
  //     imagePath: "/image/cart/gamepad.webp"
  //   }
  // ];

  let sum = 0;

  return (
    <div className="flex flex-col sm:p-6 md:p-12 lg:p-24">
      <p className="mb-10">
        Home / <span className="font-bold">Giỏ hàng</span>
      </p>
      
      <div className="block border border-gray-300 rounded p-4">
        {/* Thông tin mua hàng */}
        <div className="mb-20">
          {/* Tiêu đề từng cột */}
          <div className="grid grid-cols-[2fr_2fr_2fr_2fr_1fr] border border-gray-300 rounded p-4 font-bold mb-4 shadow-md">
            <div>
              Sản phẩm
            </div>
            <div>
              Giá
            </div>
            <div>
              Số lượng
            </div>
            <div>
              Tổng tiền
            </div>
            <div>
            </div>
          </div>

          {/* Mỗi item */}
          {itemList.map((item, index) => {
            let totalPrice = item["Price"]*(1-item["Discount"])*item["Quantity"];
            sum += totalPrice;
            return (
              <div key={item["Product Name"]} className="grid grid-cols-[2fr_2fr_2fr_2fr_1fr] items-center border border-gray-300 rounded p-4 mb-4 shadow-md">
                <div className="">
                  <span>
                    <Image
                      src={item["Image Src"]}
                      alt={item["Product Name"] + " 's Image"}
                      width={24}
                      height={24}
                      className="inline-block h-full w-auto object-contain mr-2"
                    />
                  </span>
                  {item["Product Name"]}
                </div>
                <div>
                  {item["Price"]*(1-item["Discount"])} VND
                </div>
                <div className="px-10">{item["Quantity"]}</div>
                <div>
                  {totalPrice} VND
                </div>
                <button onClick={() => removeFromCart(item["ID"])}>
                  <FaTrashAlt />
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-start">
          {/* Nhập mã code */}
          <form className="flex-2/3 flex">
            <input className="border border-black rounded px-4 py-2 mr-4" id="discount-code" name="discount-code" placeholder="Nhập mã code"></input>
            <button type="submit" className="rounded text-white bg-red-400 px-4">Xác nhận</button>
          </form>

          {/* Chi tiết thanh toán */}
          <form className="flex-1/3 flex flex-col border-2 border-black rounded p-4">
            <p className="font-bold text-lg mb-4">Chi tiết thanh toán</p>
            <div className="flex justify-between">
              <p>Tổng:</p>
              <p>{sum} VND</p>
            </div>
            <div className="h-px bg-gray-300 my-2"></div>
            <div className="flex justify-between">
              <p>Phí ship:</p>
              <p>10,000 VND</p>
            </div>
            <div className="h-px bg-gray-300 my-2"></div>
            <div className="flex justify-between">
              <p>Thanh toán:</p>
              <p>{sum = sum + 10000} VND</p>
            </div>
            <button type="button" className="rounded text-white bg-red-400 px-4 py-2 mt-6 self-end"
            onClick={() => {
              if (createInvoice(itemList.length, sum))
                redirect("/cart/checkout");
            }}>Thanh toán</button>
          </form>
        </div>
      </div>
    </div>
  );
}