export default function QAPage() {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="text-gray-500 text-sm mb-4">
          <span className="text-gray-700">Trang chủ</span> / <span className="font-semibold">Hỏi đáp</span>
        </div>
  
        <div className="flex items-center space-x-5 mb-6">
          <input
            type="text"
            placeholder="Tìm câu hỏi"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-300 text-green-900 font-semibold rounded-lg px-4 h-12 flex items-center justify-center text-sm hover:bg-green-400 active:bg-green-500 transition duration-200">
            Đặt câu hỏi
          </button>
        </div>
  
        <h1 className="text-green-700 font-bold text-2xl mb-6">Câu hỏi mới nhất</h1>
  
        <div className="space-y-6">
          {[1, 2].map((index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4">
              <div className="grid grid-cols-[auto_1fr] items-center border-b border-gray-300 py-2">
                <span className="text-green-700 font-bold text-lg text-center border-r border-green-700 pr-4 w-16">
                  Hỏi
                </span>
                <p className="text-black font-semibold pl-4">Công thức làm cá viên chiên</p>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-center py-2">
                <span className="text-gray-800 font-bold text-lg text-center border-r border-gray-700 pr-4 w-16">
                  Đáp
                </span>
                <p className="text-black pl-4">
                  Cá viên chiên nước mắm có thể dùng như một món ăn vặt hoặc món ăn kèm cơm nóng thơm ngon. 
                  Bỏ túi ngay công thức chế biến siêu đơn giản dưới đây nhé.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  