export default function AskPage() {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="text-gray-700">Trang chủ</span> / Hỏi đáp /{" "}
          <span className="font-semibold">Đặt câu hỏi</span>
        </div>
  
        {/* Nút Đặt câu hỏi */}
        <button className="bg-green-300 text-green-900 px-4 py-2 rounded-lg font-semibold mb-4 hover:bg-green-400 active:bg-green-500 transition duration-200    ">
          Đặt câu hỏi
        </button>
  
        {/* Form đặt câu hỏi */}
        <div className="bg-white p-6 rounded-lg shadow">
          {/* 3 ô nhập trên cùng */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Tên của bạn */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Tên của bạn <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="text-gray-900  w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="text-gray-900  w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* Số điện thoại */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="text-gray-900  w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
  
          {/* Ô nhập Nội dung */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Nội dung
            </label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
  
          {/* Nút Gửi */}
          <div className="text-right">
            <button className="bg-red-500 text-white px-6 py-2 rounded font-semibold hover:bg-red-600 active:bg-red-700">
              Gửi
            </button>
          </div>
        </div>
      </div>
    );
  }
  