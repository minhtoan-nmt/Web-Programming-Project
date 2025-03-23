import ProductCard from "../component/product-card";
import NuocMam from "../../../public/image/productItem/nuocmamnamngu.jpg"
import Gamepad from "../../../public/image/productItem/game_pad.jpg"

const listItems = [
    {
        id: 1,
        productName: "Nước mắm nam ngư",
        price: 12000,
        discount: 0.4,
        rating: 4,
        imageSrc: NuocMam
    },
    {
        id: 2,
        productName: "Nước mắm nam ngư",
        price: 12000,
        discount: 0.4,
        rating: 4,
        imageSrc: NuocMam
    },
    {
        id: 3,
        productName: "Nước mắm nam ngư",
        price: 12000,
        discount: 0.4,
        rating: 4,
        imageSrc: NuocMam
    },
    {
        id: 4,
        productName: "Nước mắm nam ngư",
        price: 12000,
        discount: 0.4,
        rating: 4,
        imageSrc: NuocMam
    },
    {
        id: 5,
        productName: "Nước mắm nam ngư",
        price: 12000,
        discount: 0.4,
        rating: 4,
        imageSrc: NuocMam
    },
    {
        id: 6,
        productName: "Nước mắm nam ngư",
        price: 12000,
        discount: 0.4,
        rating: 4,
        imageSrc: NuocMam
    },
    {
        id: 7,
        productName: "Nước mắm nam ngư",
        price: 12000,
        discount: 0.4,
        rating: 4,
        imageSrc: NuocMam
    },
    {
        id: 8,
        productName: "Nước mắm nam ngư",
        price: 12000,
        discount: 0.4,
        rating: 4,
        imageSrc: NuocMam
    },
];

const listItemsRelated = [
    {
        id: 9,
        productName: "HAVIT HV-G92 Gamepad",
        price: 1000000,
        discount: 0.4,
        rating: 3,
        imageSrc: Gamepad
    },
    {
        id: 10,
        productName: "HAVIT HV-G92 Gamepad",
        price: 1000000,
        discount: 0.12,
        rating: 3,
        imageSrc: Gamepad
    },
    {
        id: 11,
        productName: "HAVIT HV-G92 Gamepad",
        price: 1000000,
        discount: 0.4,
        rating: 3,
        imageSrc: Gamepad
    },
    {
        id: 12,
        productName: "HAVIT HV-G92 Gamepad",
        price: 1000000,
        discount: 0.4,
        rating: 3,
        imageSrc: Gamepad
    },
]

export default function ProductPage() {
    const items = listItems.map((item) => {
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
        )
    })
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
        )
    })
    return (
        <div>
            <div className="px-30 pt-48 pb-30">
                <div className="p-18 bg-(--tertiary) grid grid-cols-4 gap-9">
                    {items}
                </div>
            </div>
            <div className="p-30">
                <h1 className="text-3xl mb-20 font-bold">
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
                <div className="flex flex-row">
                    {itemsRelated}
                </div>
            </div>
        </div>
    )
}