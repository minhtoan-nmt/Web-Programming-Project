'use client'

import gamepad1 from "../../../../public/image/productDetail/gamepad1.png";
import gamepad2 from "../../../../public/image/productDetail/gamepad2.png";
import gamepad3 from "../../../../public/image/productDetail/gamepad3.png";
import gamepad4 from "../../../../public/image/productDetail/gamepad4.png";
import Image from "next/image";
import { listItemsRelated } from "../page";
import { RatingStars } from "@/app/_component/product-card";
import green from "../../../../public/image/productDetail/icons8-filled-circle-48.png";
import red from "../../../../public/image/productDetail/icons8-filled-circle-red.png";
import { ItemRelated } from "../page";
import { AddToCartButton } from "@/app/_component/product-card";
import Link from "next/link";
import { useState } from "react";

const subImage = [
  { id: "sub1", url: gamepad1 },
  { id: "sub2", url: gamepad2 },
  { id: "sub3", url: gamepad3 },
  { id: "sub4", url: gamepad4 },
];

const product = listItemsRelated.find((item) => item.id == 9);

function SubImage({ subImage = subImage }) {
  const listImage = subImage.map((image) => {
    return (
      <Image
        key={image.id}
        src={image.url}
        alt="Sub image for product 1"
        className="my-2"
      />
    );
  });
  return <div className="xl:flex xl:flex-col grid grid-cols-4 order-2 xl:order-1">{listImage}</div>;
}

let dataFromForm = {
  color: "red",
  size: "M",
  quantity: 0,
  isAddedToCart: false,
};

function updateColor(color) {
  dataFromForm.color = color;
  console.log(dataFromForm.color);
}

export default function ProductDetail() {
  return (
    <>
      <div className="xl:pt-30 xl:px-30 p-10">
        <h1 className="mb-12 text-gray-400">
          <Link href="/home">Trang chủ</Link> / <Link href="/product_page">Sản phẩm</Link> /{" "}
          <span className="font-bold text-gray-600">Thông tin chi tiết</span>{" "}
        </h1>
        <div className="lg:grid lg:grid-cols-[5fr_3fr] lg:gap-12">
          <div className="xl:grid xl:grid-cols-[1fr_4fr] xl:gap-6 flex flex-col">
            {/* <div id="detail-col-1" className="flex xl:flex-col md:flex-row md:justify-between"> */}
              <SubImage subImage={subImage} />
            {/* </div> */}
            <div id="detail-col-2" className="order-1 xl:order-2">
              <Image
                src={gamepad1}
                alt="sth for you"
                className="h-full w-full"
              />
            </div>
          </div>
          <div id="detail-col-3">
            <div className="xl:mb-12 mb-6">
              <h1 className="text-2xl font-bold my-4">{product.productName}</h1>
              <RatingStars rating={product.rating} numOfRating={150} />
            </div>
            <p className="mb-4 border-b-2 border-gray-400 pb-6">
              {product.description}
            </p>
            <p>
              Màu:
              <button type="button">
                <Image
                  src={green}
                  alt="green"
                  width={16}
                  height={16}
                  className="inline ml-2 mr-1"
                />
              </button>
              <button type="button">
                <Image
                  src={red}
                  alt="red"
                  width={16}
                  height={16}
                  className="inline"
                />
              </button>
            </p>
            <div>
              <p className="inline">Size: </p>
              <button className="m-2 lg:m-3 border-1 p-2 rounded-lg w-12">
                XS
              </button>
              <button className="m-2 lg:m-3 border-1 p-2 rounded-lg w-12">
                S
              </button>
              <button className="m-2 lg:m-3  border-1 p-2 rounded-lg w-12">
                M
              </button>
              <button className="m-2 lg:m-3 border-1 p-2 rounded-lg w-12">
                L
              </button>
              <button className="m-2 lg:m-3 border-1 p-2 rounded-lg w-12">
                XL
              </button>
            </div>
            <div className="flex flex-row lg:justify-between justify-start my-3 ">
              <div className="border-2 rounded-md mr-3 flex flex-nowrap">
                <button className="border-r-2 p-2 md:w-10 w-5 h-full">
                  <span>-</span>
                </button>
                <button className="border-r-2 p-2 md:w-16 w-8 h-full">
                  <span>{dataFromForm.quantity}</span>
                </button>
                <button className="p-2 md:w-10 w-5 h-full">
                  +
                </button>
              </div>
              <AddToCartButton />
            </div>
            <div>
              <div className="flex flex-row border-2 mt-12">
                <div className="py-4 px-6 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    width={48}
                    height={48}
                    className="mt-3"
                  >
                    {/*!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
                    <path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center p-3 mx-2">
                  <h1 className="text-xl font-bold mb-1 mt-2">
                    Giao hàng miễn phí
                  </h1>
                  <p className="text-sm my-1 underline underline-offset-4">
                    Cung cấp địa chỉ và thông tin để nhận hàng
                  </p>
                </div>
              </div>
              <div className="flex flex-row border-b-2 border-l-2 border-r-2">
                <div className="py-4 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    fill="currentColor"
                    className="bi bi-recycle mt-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center p-3 mx-2">
                  <h1 className="text-xl font-bold mb-1 mt-2">
                    Chính sách đổi trả
                  </h1>
                  <p className="text-sm my-1">Được đổi trả trong 30 ngày</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ItemRelated listItemsRelated={listItemsRelated} />
    </>
  );
}
