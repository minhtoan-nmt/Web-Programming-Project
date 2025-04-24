import { ST } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";

// const ratingIcons = rating => {
//     let stars = (
//         <>
//             <span id="s1" className="fa fa-star checked" />
//             <span id="s2" className="fa fa-star checked" />
//             <span id="s3" className="fa fa-star checked" />
//             <span className="fa fa-star" />
//             <span className="fa fa-star" />
//         </>
//     )
// }
function Discount({discount}) {
    if (discount > 0) {return <p className="p-1 mb-3 text-xs bg-red-500 w-2/6 text-white rounded-sm">{"-" + discount * 100 + "%"}</p>}
    else return null;
}

function DeleteOldPrice({oldPrice, discount}) {
    if (discount>0) {
        return <del className="text-gray-500">{oldPrice + "VND"}</del>
    } else return null;
}

function StarChecked({checked}) {
    if (checked) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
                >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
        )
    }
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-star"
                viewBox="0 0 16 16"
            >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
            </svg>
        )
}

function DisplayRating({numOfRating = 0}) {
    if (numOfRating!=0) {
        return <p className="text-gray-400 text-sm">{"(" + numOfRating + " lượt đánh giá) |"}</p>
    } else return null;
}

export function RatingStars({rating, numOfRating = 0}) {
    let check = [];
    let i;
    for (i=0;i<rating;i++) {
        check.push({id: i, value: true});
    }
    for (i=i;i<5;i++) {
        check.push({id: i, value: false});
    }
    const stars = check.map((check) => {
        return (
            <StarChecked 
                key={check.id}
                checked={check.value}
            />
        )
    })
    return (
        <div className="flex flex-row mb-3">
            <div className="flex flex-row mr-2">
                {stars}
            </div>
            <DisplayRating numOfRating={numOfRating} />
        </div>
    )
}

export function AddToCartButton() {
    return <button className="py-2 px-4 bg-(--button-color) text-(--background) rounded-md transition delay-100 duration-300
        ease-in-out hover:scale-110">
    Thêm vào giỏ hàng
    </button>
}

export default function ProductCard({imageSrc, discount, productName, price, oldPrice, rating}) {
    return (
        <Link href="/product_page/product_detail">
        <div className=" h-full p-4 bg-[#fff] flex flex-col justify-evenly rounded-lg hover:bg-gray-100 transition">
            <Discount discount={discount} />
            <img src={imageSrc} alt={productName + '"s image'} className="h-2/3 w-full" />
            <h1 className="text-base font-bold">{productName}</h1>
            <p className="text-red-500">{price + "VND "} 
                <DeleteOldPrice oldPrice={oldPrice} discount={discount} />
            </p>
            {/* Add a rating image here */}
            <RatingStars rating={rating} />
            <AddToCartButton />
        </div>
        </Link>
    )
}