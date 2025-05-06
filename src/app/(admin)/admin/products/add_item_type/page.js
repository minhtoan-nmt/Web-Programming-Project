import { InputTypeText } from "./../edit_item/[id]/page"

export default function Page() {
    return <div className="p-10">
        <h1 className="text-3xl my-10 ">Thêm loại sản phẩm</h1>
        <form action={"http://localhost/admin_api/addItemtype.php"} method="post" className="p-8 bg-white text-gray-500 rounded-2xl">
            <InputTypeText 
                label={"ID loại sản phẩm"} 
                name={"item-type-id"}
                placeholder={"Nhập ID loại sản phẩm"} 
            />
            <InputTypeText
                label={"Tên loại sản phẩm"}
                name={"item-type-name"}
                placeholder={"Nhập tên loại sản phẩm ..."}
            />
            <div className="flex justify-end gap-2 mt-6">
                <button type="submit" className="py-2 px-3 bg-[#435ebe] text-white rounded-lg">Xác nhận</button>
                <button type="reset" className="py-2 px-3 bg-[#e6eaee] text-gray-400 rounded-lg">Đặt lại</button>
            </div>
        </form>
    </div>
}