import Image from "next/image";

export default function Home() {
  const itemList = [
    {
      itemName: "LCD Monitor",
      price: 105000,
      amount: 1,
      totalPrice: 105000,
      imagePath: "/image/cart/monitor.webp"
    },
    {
      itemName: "Gamepad",
      price: 35000,
      amount: 2,
      totalPrice: 70000,
      imagePath: "/image/cart/gamepad.webp"
    }
  ];

  return (
    <div className="flex flex-col sm:p-6 md:p-12 lg:p-24">
      <p className="mb-10">
        Home / Giỏ hàng / <span className="font-bold">Thanh toán</span>
      </p>

      <p className="font-bold text-3xl mb-6">Thông tin đơn hàng</p>
      {/* Form thông tin đơn hàng */}
      <form className="flex">
        <div className="w-2/5 flex flex-col">
          <label htmlFor="full-name" className="py-2">Họ và tên</label>
          <input type="text" id="full-name" name="full-name" className="bg-gray-100 px-4 py-2 mb-2"></input>
          <label htmlFor="city" className="py-2">Thành phố/ Tỉnh</label>
          <input type="text" id="city" name="city" className="bg-gray-100 px-4 py-2 mb-2"></input>
          <label htmlFor="district" className="py-2">Quận/ Huyện</label>
          <input type="text" id="district" name="district" className="bg-gray-100 px-4 py-2 mb-2"></input>
          <label htmlFor="address" className="py-2">Tên đường, số nhà</label>
          <input type="text" id="address" name="address" className="bg-gray-100 px-4 py-2 mb-2"></input>
          <label htmlFor="phone-number" className="py-2">Số điện thoại</label>
          <input type="text" id="phone-number" name="phone-number" className="bg-gray-100 px-4 py-2 mb-2"></input>
          <label htmlFor="email" className="py-2">Email</label>
          <input type="text" id="email" name="email" className="bg-gray-100 px-4 py-2 mb-2"></input>
        </div>

        {/* Thành tiền và đặt hàng */}
        <div className="w-2/5 ml-auto">
          <div className="flex flex-col gap-2 border border-gray-300 rounded font-semibold p-4">
            {itemList.map((item, index) => {
              return (
                <div className="flex items-center mb-4">
                  <div className="flex-3/4">
                    <Image
                      src={item.imagePath}
                      alt={item.itemName}
                      width={24}
                      height={24}
                      className="inline-block h-full w-auto object-contain mr-4"
                    />
                    {item.itemName}
                  </div>
                  <div className="flex-auto font-normal">
                    x{item.amount}
                  </div>
                  <div className="flex-1/12 flex justify-end">
                    &#8363;{item.price}
                  </div>
                </div>
              );
            })}

            <div className="flex justify-between">
              <p>Tổng:</p>
              <p>&#8363;175,000</p>
            </div>
            <div className="h-px bg-gray-300 my-2"></div>
            <div className="flex justify-between">
              <p>Phí ship:</p>
              <p>&#8363;10,000</p>
            </div>
            <div className="h-px bg-gray-300 my-2"></div>
            <div className="flex justify-between mb-2">
              <p>Thành tiền:</p>
              <p>&#8363;185,000</p>
            </div>

            <div className="flex font-normal">
              <input type="radio" id="payment-online" name="payment-type" className="inline mr-4"></input>
              <label>Thanh toán online</label>
              <div className="">
                <Image
                  src="/image/checkout/visa.png"
                  alt="Visa logo"
                  width={500}
                  height={500}
                  className="inline-block h-full w-auto object-contain mr-4"
                />
              </div>
            </div>
            <div className="font-normal">
              <input type="radio" id="payment-cod" name="payment-type" className="inline mr-4"></input>
              <label>Thanh toán khi nhận hàng</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}