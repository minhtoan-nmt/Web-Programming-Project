export default function Confirmation() {
    return (
        <div className="w-full h-screen">
            <div className="w-lg bg-white m-auto fixed top-1/3 left-1/3 rounded-lg">
                <div className="text-lg font-bold p-5 border-b-1 border-gray-200">
                    Xóa một sản phẩm
                </div>
                <div className="p-5 border-b-1 border-gray-200">
                    Bạn có chắc mình muốn xóa sản phẩm này hay không?
                </div>
                <div className="p-5 flex justify-end gap-3">
                    <button type="button" className="py-2 px-3 bg-[#435ebe] text-white rounded-lg hover:scale-110 ease-in duration-75 cursor-pointer">Có</button>
                    <button type="button" className="py-2 px-3 bg-gray-100 rounded-lg hover:scale-110 ease-in duration-75 cursor-pointer">Không</button>
                </div>
            </div>
        </div>
    )
}