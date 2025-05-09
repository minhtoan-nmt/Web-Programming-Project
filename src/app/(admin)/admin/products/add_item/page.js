import { InputTypeText } from "./../edit_item/[id]/page"
import { FetchTypes } from "../page"

export default async function AddItem() {
    const types = await FetchTypes();
    const typelist = types.data;
    return (
        <div className="p-10">
            <h1 className="text-3xl my-10 ">Thêm sản phẩm</h1>
            <form action={"http://localhost/admin_api/addItem.php"} method="post" encType="multipart/form-data" className="p-8 bg-white text-gray-500 rounded-2xl">
                <InputTypeText 
                    label={"ID Sản phẩm"} 
                    name={"item-id"}
                    placeholder={"Nhập ID sản phẩm"} 
                />
                <InputTypeText 
                    label={"Tên sản phẩm: "} 
                    name={"product-name"} 
                    placeholder={"Nhập tên của sản phẩm"} 
                />
                <div className="my-3">
                    <label htmlFor="description" className="font-bold">Mô tả sản phẩm: </label>
                    <textarea
                        rows={4}
                        name="description"
                        placeholder="Nhập mô tả chi tiết về sản phẩm ..."
                        className="p-2 w-full rounded-lg border-2 border-gray-300 focus:outline-3 focus:outline-gray-300 duration-75"
                    ></textarea>
                </div>
                <div className="flex flex-row justify-start gap-5">
                <InputTypeText 
                    label={"Giá: "}
                    name={"price"}
                    placeholder={"Nhập giá tiền (VND) ..."}
                    type={"number"}
                />
                <InputTypeText
                    label={"Giảm giá: "}
                    name={"discount"}
                    placeholder={"Nhập tỉ lệ giảm giá..."}
                    type={"number"}
                />
                <InputTypeText
                    label={"Số lượng: "}
                    name={"quantity"}
                    placeholder={"Nhập số lượng còn lại của sản phẩm ..."}
                    type={"number"}              
                />
                <InputTypeText
                    label={"Đánh giá: "}
                    name={"rating"}
                    placeholder={"Nhập đánh giá (số sao) ..."}
                    type={"number"}              
                />
                </div>
                <div className="my-3">
                    <label htmlFor={"image-link"} className="font-bold">Hình ảnh sản phẩm:</label>
                    <input
                        type="file"
                        name="image-link"
                        className="p-2 w-full rounded-lg border-2 border-gray-300 focus:outline-3 focus:outline-gray-300 duration-75"
                    ></input>
                </div>
                <div className="my-3">
                    <label htmlFor="item-type" className="font-bold">Loại sản phẩm</label>
                    <select 
                        name="item-type"
                        className="p-2 w-full rounded-lg border-2 border-gray-300 focus:outline-3 focus:outline-gray-300 duration-75"
                    >
                        {typelist.map(type => {
                            return (
                                <option key={type["Item_type_id"]} value={type["Item_type_id"]}>
                                    {type["Item_type_id"]} - {type["Item_type_name"]}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <InputTypeText
                    label={"Thương hiệu"}
                    name={"brand"}
                    placeholder={"Nhập thương hiệu ..."}
                />
                <div className="flex justify-end gap-2 mt-6">
                    <button type="submit" className="py-2 px-3 bg-[#435ebe] text-white rounded-lg">Xác nhận</button>
                    <button type="reset" className="py-2 px-3 bg-[#e6eaee] text-gray-400 rounded-lg">Đặt lại</button>
                </div>
            </form>
        </div>
    )
}