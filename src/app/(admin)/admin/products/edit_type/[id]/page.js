import { InputTypeText } from "../../edit_item/[id]/page";
import Link from "next/link";

export default async function Page({params}) {
    const { id } = await params;
    const res = await fetch(process.env.URL + `api/get_item_type_by_id/${id}`);
    if (!res.ok) {
        console.log(res.status);
    }
    const data = await res.json();
    const itemType = data.data[0];
    console.log(itemType["Item_type_id"]);
    return (
        <div className="p-10">
            <h1 className="text-3xl my-10 ">Chỉnh sửa loại sản phẩm</h1>
            <form action={`http://localhost/admin_api/updateItemtype.php?id=${id}`} method="post" className="p-8 bg-white text-gray-500 rounded-2xl">
                <InputTypeText 
                    label={"ID loại sản phẩm"} 
                    name={"item-type-id"}
                    defaultValue={itemType["Item_type_id"]}
                    placeholder={"Nhập ID loại sản phẩm"} 
                />
                <InputTypeText
                    label={"Tên loại sản phẩm"}
                    name={"item-type-name"}
                    defaultValue={itemType["Item_type_name"]}
                    placeholder={"Nhập tên loại sản phẩm ..."}
                    
                />
                <div className="flex justify-end gap-2 mt-6">
                    <button type="submit" className="py-2 px-3 bg-[#435ebe] text-white rounded-lg">Xác nhận</button>
                    <Link href={"/admin/products"}><button type="button" className="py-2 px-3 bg-[#e6eaee] text-gray-400 rounded-lg">Quay lại</button></Link>
                </div>
            </form>
        </div>
    )
}