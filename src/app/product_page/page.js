'use client'

import ProductCard from "../_component/product-card";
import Gamepad from "/public/image/productItem/game_pad.jpg";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

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

export function ItemSection({itemType, items}) {
  const lists = items.map((item) => {
      return (
        <ProductCard
          key={item["ID"]}
          productID={item["ID"]}
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
    <div className="xl:px-30 xl:py-15 lg:px-15 px-10 lg:pt-30 lg:pb-15">
      <h1 className="my-6 font-bold text-4xl">{itemType}</h1>
      <div className="p-10 bg-(--tertiary) md:grid md:grid-cols-2 lg:grid-cols-4 flex flex-col gap-9">
        {lists}
      </div>
    </div>
  )
}

export function SearchItems({search}) {
  const [qItems, setQItems] = useState(null);
  useEffect(() => {
    async function getData() {
      const res = await fetch(`/api/products/get_items/${search}`, {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        }
      })
      if (!res.ok) {
        return (
          <div className="p-25 h-screen">
            <h1 className="text-3xl">You find items that don't exist</h1>
          </div>
        )
      }
      const data = await res.json();
      setQItems(data.data);
    }
    getData();
  }, [])

  if (!qItems) {
    return <div className="p-25 h-screen">
      <h1 className="text-3xl">Loading...</h1>
    </div>
  }

  if (qItems=="No data returned") {
    return <div className="p-25 h-screen">
      <h1 className="text-3xl">You find items that don't exist</h1>
    </div>
  }

  const lists = qItems.map((item) => {
    return (
      <ProductCard
        key={item["ID"]}
        productID={item["ID"]}
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
    <div className="xl:px-30 xl:py-15 lg:px-15 px-10 lg:pt-30 lg:pb-15">
      <h1 className="my-6 font-bold text-4xl">Products</h1>
      <div className="p-10 bg-(--tertiary) md:grid md:grid-cols-2 lg:grid-cols-4 flex flex-col gap-9">
        {lists}
      </div>
    </div>
  )
}

export default function ProductPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get('query');
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/products/get_item_type", {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        }
      })
      if (!res.ok) {
        console.log("Response status: ", res.status);
      }
      const data = await res.json();
      setProducts(data.result);
    }
    getData();
  }, [])

  if (!search) {
    if (!products) {
      return <div className="p-25 h-screen">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    }
    // if (!search) {
      const sections = products.map((section) => {
        const header = section[0];
        const items = section[1];
        return <ItemSection key={section[0]} itemType={header} items={items} />
      })
      return (
        <div>
          {sections}
          {/* <ItemRelated listItemsRelated={listItemsRelated} /> */}
        </div>
      );
    // }
  }

  else {
    return (
      <SearchItems search={search} />
    )
  }

}
