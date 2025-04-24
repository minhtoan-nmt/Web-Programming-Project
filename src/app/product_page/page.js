'use client'

import ProductCard from "../_component/product-card";
import NuocMam from "../../../public/image/productItem/nuocmamnamngu.jpg";
import Gamepad from "../../../public/image/productItem/game_pad.jpg";
import Link from "next/link";
import { useState, useEffect } from "react";

// export const listItems = [
//   {
//     id: 1,
//     productName: "Nước mắm nam ngư",
//     price: 12000,
//     discount: 0.4,
//     rating: 4,
//     imageSrc: NuocMam,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel urna lobortis, ac volutpat arcu feugiat. Ut ut accumsan velit. Nunc laoreet libero.",
//   },
//   {
//     id: 2,
//     productName: "Nước mắm nam ngư",
//     price: 12000,
//     discount: 0.4,
//     rating: 4,
//     imageSrc: NuocMam,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel urna lobortis, ac volutpat arcu feugiat. Ut ut accumsan velit. Nunc laoreet libero.",
//   },
//   {
//     id: 3,
//     productName: "Nước mắm nam ngư",
//     price: 12000,
//     discount: 0.4,
//     rating: 4,
//     imageSrc: NuocMam,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel urna lobortis, ac volutpat arcu feugiat. Ut ut accumsan velit. Nunc laoreet libero.",
//   },
//   {
//     id: 4,
//     productName: "Nước mắm nam ngư",
//     price: 12000,
//     discount: 0.4,
//     rating: 4,
//     imageSrc: NuocMam,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel urna lobortis, ac volutpat arcu feugiat. Ut ut accumsan velit. Nunc laoreet libero.",
//   },
//   {
//     id: 5,
//     productName: "Nước mắm nam ngư",
//     price: 12000,
//     discount: 0.4,
//     rating: 4,
//     imageSrc: NuocMam,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel urna lobortis, ac volutpat arcu feugiat. Ut ut accumsan velit. Nunc laoreet libero.",
//   },
//   {
//     id: 6,
//     productName: "Nước mắm nam ngư",
//     price: 12000,
//     discount: 0.4,
//     rating: 4,
//     imageSrc: NuocMam,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel urna lobortis, ac volutpat arcu feugiat. Ut ut accumsan velit. Nunc laoreet libero.",
//   },
//   {
//     id: 7,
//     productName: "Nước mắm nam ngư",
//     price: 12000,
//     discount: 0.4,
//     rating: 4,
//     imageSrc: NuocMam,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel urna lobortis, ac volutpat arcu feugiat. Ut ut accumsan velit. Nunc laoreet libero.",
//   },
//   {
//     id: 8,
//     productName: "Nước mắm nam ngư",
//     price: 12000,
//     discount: 0.4,
//     rating: 4,
//     imageSrc: NuocMam,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel urna lobortis, ac volutpat arcu feugiat. Ut ut accumsan velit. Nunc laoreet libero.",
//   },
// ];

export const listItemsRelated = [
  {
    id: 9,
    productName: "HAVIT HV-G92 Gamepad",
    price: 1000000,
    discount: 0.4,
    rating: 3,
    imageSrc: Gamepad,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel urna lobortis, ac volutpat arcu feugiat. Ut ut accumsan velit. Nunc laoreet libero.",
  },
  {
    id: 10,
    productName: "HAVIT HV-G92 Gamepad",
    price: 1000000,
    discount: 0.12,
    rating: 3,
    imageSrc: Gamepad,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel urna lobortis, ac volutpat arcu feugiat. Ut ut accumsan velit. Nunc laoreet libero.",
  },
  {
    id: 11,
    productName: "HAVIT HV-G92 Gamepad",
    price: 1000000,
    discount: 0.4,
    rating: 3,
    imageSrc: Gamepad,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel urna lobortis, ac volutpat arcu feugiat. Ut ut accumsan velit. Nunc laoreet libero.",
  },
  {
    id: 12,
    productName: "HAVIT HV-G92 Gamepad",
    price: 1000000,
    discount: 0.4,
    rating: 3,
    imageSrc: Gamepad,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel urna lobortis, ac volutpat arcu feugiat. Ut ut accumsan velit. Nunc laoreet libero.",
  },
];

export function ItemRelated({ listItemsRelated }) {
  const itemsRelated = listItemsRelated.map((item) => {
    return (
      <ProductCard
        key={item.id}
        imageSrc={item.imageSrc}
        discount={item.discount}
        productName={item.productName}
        price={item.price * (1 - item.discount)}
        oldPrice={item.price}
        rating={item.rating}
      />
    );
  });
  return (
    <div className="xl:p-30 md:p-15 p-10">
      <h1 className="text-3xl mb-10 md:mb-20 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          className="bi bi-bookmark-fill inline mr-2"
          viewBox="0 0 16 16"
        >
          <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
        </svg>
        Các sản phẩm liên quan
      </h1>
      <div className="flex flex-row overflow-x-scroll">{itemsRelated}</div>
    </div>
  );
}

export default function ProductPage() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function fetchItems() {
      const res = await fetch('/api/products/get_items', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) console.log(res.status);
      const data = await res.json();
      setProducts(data);
    }
    fetchItems()
  }, [])


  if (!products) return <div>Loading...</div>
  // console.log(products.data);

  const items = products.data.map((item) => {
    return (
      <ProductCard
        key={item["ID"]}
        imageSrc={item["Image Src"]}
        discount={item["Discount"]}
        productName={item["Product Name"]}
        price={item["Price"] * (1 - item["Discount"])}
        oldPrice={item["Price"]}
        rating={item["Rating"]}
      />
    );
  });
  return (
    <div>
      <div className="xl:px-30 xl:pt-48 xl:pb-30 lg:px-15 lg:pt-30 lg:pb-15">
        <div className="p-10 bg-(--tertiary) md:grid md:grid-cols-2 lg:grid-cols-4 gap-9">
          {items}
        </div>
      </div>
      <ItemRelated listItemsRelated={listItemsRelated} />
    </div>
  );
}
