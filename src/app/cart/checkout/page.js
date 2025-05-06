'use client'

import { redirect } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [itemList, setitemList] = useState(null);
  const [cart, setCart] = useState(null);
    useEffect(() => {
      async function getCart() {
        const res = await fetch("/api/get_cart");
        if (!res.ok) {
          console.log(res.status);
        }
        const data = await res.json();
        setCart(data.data)
      }
      async function getitemList() {
        const res = await fetch("/api/get_cart_data");
        if (!res.ok) {
          console.log(res.status);
        }
        const data = await res.json();
        setitemList(data.data);
      }
      getitemList();
      getCart();
    }, [])
  
    if (!itemList || !cart) {
      return (
        <div className="p-25 h-screen">
          <h1 className="text-3xl">Loading...</h1>
        </div>
      )
    }
    console.log(cart);

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

  return (
    <div className="flex flex-col sm:p-6 md:p-12 lg:p-24">
      <p className="mb-10">
        Home / Giỏ hàng / <span className="font-bold">Thanh toán</span>
      </p>

      <p className="font-bold text-3xl mb-6">Thông tin đơn hàng</p>
      {/* Form thông tin đơn hàng */}
      <form action={"http://localhost/clients_api/createInvoice.php"} className="flex" method="post"> {/*Temporarily set to this function in action*/}
        <div className="w-2/5 flex flex-col">
          <label htmlFor="full-name" className="py-2">Họ và tên: <span className="text-red-600">*</span></label>
          <input type="text" id="full-name" name="full-name" className="bg-gray-100 border border-gray-200 rounded px-4 py-2 mb-2"
            onChange={(e) => {
              if (e.target.value.length === 0) {
                e.target.placeholder = "Không được để trống";
              }
            }}></input>
          <label htmlFor="city" className="py-2">Thành phố/ Tỉnh: <span className="text-red-600">*</span></label>
          <input type="text" id="city" name="city" className="bg-gray-100 border border-gray-200 rounded px-4 py-2 mb-2"
          onChange={(e) => {
            if (e.target.value.length === 0) {
              e.target.placeholder = "Không được để trống";
            }
          }}></input>
          <label htmlFor="district" className="py-2">Quận/ Huyện: <span className="text-red-600">*</span></label>
          <input type="text" id="district" name="district" className="bg-gray-100 border border-gray-200 rounded px-4 py-2 mb-2"
          onChange={(e) => {
            if (e.target.value.length === 0) {
              e.target.placeholder = "Không được để trống";
            }
          }}></input>
          <label htmlFor="ward" className="py-2">Phường/ Xã: <span className="text-red-600">*</span></label>
          <input type="text" id="ward" name="ward" className="bg-gray-100 border border-gray-200 rounded px-4 py-2 mb-2"
          onChange={(e) => {
            if (e.target.value.length === 0) {
              e.target.placeholder = "Không được để trống";
            }
          }}></input>
          <label htmlFor="address" className="py-2">Số nhà, tên đường, ấp: <span className="text-red-600">*</span></label>
          <input type="text" id="address" name="address" className="bg-gray-100 border border-gray-200 rounded px-4 py-2 mb-2"
          onChange={(e) => {
            if (e.target.value.length === 0) {
              e.target.placeholder = "Không được để trống";
            }
          }}></input>
          <label htmlFor="phone-number" className="py-2">Số điện thoại: <span className="text-red-600">*</span></label>
          <input type="text" id="phone-number" name="phone-number" className="bg-gray-100 border border-gray-200 rounded px-4 py-2 mb-2"
          onChange={(e) => {
            if (e.target.value.length === 0) {
              e.target.placeholder = "Không được để trống";
            }
          }}></input>
          <label htmlFor="email" className="py-2">Email: <span className="text-red-600">*</span></label>
          <input type="text" id="email" name="email" className="bg-gray-100 border border-gray-200 rounded px-4 py-2 mb-2"
          onChange={(e) => {
            if (e.target.value.length === 0) {
              e.target.placeholder = "Không được để trống";
            }
          }}></input>
        </div>

        {/* Thành tiền và đặt hàng */}
        <div className="w-2/5 ml-auto">
          <div className="flex flex-col gap-2 border border-gray-300 rounded font-semibold p-4">
            {itemList.map((item, index) => {
              return (
                <div key={index} className="flex items-center mb-4">
                  <div className="flex-2/4">
                    <Image
                      src={item["Image Src"]}
                      alt={item["Product Name"]}
                      width={24}
                      height={24}
                      className="inline-block h-full w-auto object-contain mr-4"
                    />
                    {item["Product Name"]}
                  </div>
                  <div className="flex-auto flex font-normal justify-end">
                    x{item["Quantity"]}
                  </div>
                  <div className="flex-1/4 flex justify-end">
                    &#8363;{item["Price"]*(1-item["Discount"])}
                  </div>
                </div>
              );
            })}

            <div className="flex justify-between">
              <p>Tổng:</p>
              <p>{cart[0]["Total price"] - 10000}&#8363;</p>
            </div>
            <div className="h-px bg-gray-300 my-2"></div>
            <div className="flex justify-between">
              <p>Phí ship:</p>
              <p>10,000&#8363;</p>
            </div>
            <div className="h-px bg-gray-300 my-2"></div>
            <div className="flex justify-between mb-2">
                <label htmlFor="total-price">Thành tiền:</label>
                <p><input type="text" id="total-price" name="total-price" className="border-none w-fit text-right" defaultValue={cart[0]["Total price"]} readOnly></input>&#8363;</p>
            </div>

            <div className="flex items-center justify-between font-normal">
              <div className="flex">
                <input type="radio" id="payment-online" name="payment-type" value={"card"} className="inline mr-4"></input>
                <label>Thanh toán online</label>
              </div>
              <div className="flex h-full items-center gap-2">
                <Image
                  src="/image/checkout/visa.png"
                  alt="Visa logo"
                  width={30}
                  height={30}
                  className="inline-block h-full w-auto object-contain"
                />
                <Image
                  src="/image/checkout/mastercard.png"
                  alt="Visa logo"
                  width={30}
                  height={30}
                  className="inline-block h-full w-auto object-contain"
                />
              </div>
            </div>
            <div className="flex items-center justify-between font-normal">
              <div className="flex">
                <input type="radio" id="payment-cod" name="payment-type" value={"cash"} defaultChecked className="inline mr-4"></input>
                <label>Thanh toán khi nhận hàng</label>
              </div>
            </div>
            <button type="submit" className="rounded font-normal text-white bg-red-400 hover:bg-red-600 px-4 py-2 mt-6 self-end"
            onClick={() => {
              
              // alert("Thanh toán thành công. Bạn hãy tiếp tục mua sắm nhé!");
              // redirect("/product_page")
            }}
            >Thanh toán</button>
          </div>
        </div>
      </form>
    </div>
  );
}