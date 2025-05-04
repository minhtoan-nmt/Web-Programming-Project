import { useEffect, useState } from "react";
import Link from "next/link";
import Cart from '/public/cart.svg';
import Image from "next/image";

export default function NavCart() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        async function getCount() {
            const response = await fetch("/api/count_cart");
            if (!response.ok) {
                console.log(response.status);
            }
            const data = await response.json();
            setCount(data.data);
        }
        getCount();
    }, [])

    if (!count) {
        return (
            <div>Loading...</div>
        )
    }
    
    return (
        <div className="relative hover:scale-115 transition duration-150 ease-in-out">
        <Link href="/cart">
          <Image src={Cart} alt="Cart" width={38} height={34} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {count}
          </span>
        </Link>
      </div>
    )
}