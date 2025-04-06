import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col sm:p-6 md:p-12 lg:p-24">
      <p className="mb-10">
        Home / <span className="font-bold">Giỏ hàng</span>
      </p>
      
      <div className="block border border-gray-300 rounded p-4">
        {/* Thông tin mua hàng */}
        <div className="mb-20">
          {/* Tiêu đề từng cột */}
          <div className="grid grid-cols-4 border border-gray-300 rounded p-4 mb-4 shadow-md">
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
          </div>

          {/* Mỗi hàng */}
          <div className="grid grid-cols-4 border border-gray-300 rounded p-4 mb-4 shadow-md">
            <div className="">
              <span>
                <Image
                  src="/image/cart/monitor.webp"
                  alt="LCD Monitor"
                  width={24}
                  height={24}
                  className="inline-block h-full w-auto object-contain mr-2"
                />
              </span>
              LCD Monitor
            </div>
            <div>
              $650
            </div>
            <div>
              01
            </div>
            <div>
              $650
            </div>
          </div>

          <div className="grid grid-cols-4 border border-gray-300 rounded p-4 mb-4 shadow-md">
            <div className="">
              <span>
                <Image
                  src="/image/cart/gamepad.webp"
                  alt="Gamepad"
                  width={24}
                  height={24}
                  className="inline-block h-full w-auto object-contain mr-2"
                />
              </span>
              Gamepad
            </div>
            <div>
              $100
            </div>
            <div>
              02
            </div>
            <div>
              $200
            </div>
          </div>
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
              <p>175,000 VND</p>
            </div>
            <div className="h-px bg-gray-300 my-2"></div>
            <div className="flex justify-between">
              <p>Phí ship:</p>
              <p>10,000 VND</p>
            </div>
            <div className="h-px bg-gray-300 my-2"></div>
            <div className="flex justify-between">
              <p>Thanh toán:</p>
              <p>185,000 VND</p>
            </div>
            <button type="submit" className="rounded text-white bg-red-400 px-4 py-2 mt-6 self-end">Thanh toán</button>
          </form>
        </div>
      </div>
    </div>
  );
}