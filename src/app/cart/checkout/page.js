export default function Home() {
  return (
    <div className="flex flex-col sm:p-6 md:p-12 lg:p-24">
      <p className="mb-10">
        Home / Giỏ hàng / <span className="font-bold">Thanh toán</span>
      </p>

      <p className="font-bold text-3xl mb-6">Thông tin đơn hàng</p>
      <div className="flex">
        {/* Form thông tin đơn hàng */}
        <form className="w-2/5 flex flex-col">
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

        </form>

        {/* Form thành tiền và đặt hàng */}
        <form>

        </form>
      </div>
    </div>
  );
}