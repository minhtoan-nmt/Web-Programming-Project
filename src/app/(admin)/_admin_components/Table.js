import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Link from "next/link";

export function ProductTable({items}) {
    return (
        <div className="bg-white rounded-lg p-3">
            <h1 className="p-4 text-2xl font-bold text-gray-500">Danh sách sản phẩm</h1>
            <table className="m-2">
                <thead>
                    <tr className="border-b-2 border-gray-300">
                        <th className="p-3">ID Sản phẩm</th>
                        <th className="p-3">Tên sản phẩm</th>
                        <th className="p-3">Giá</th>
                        <th className="p-3">Khuyến mãi</th>
                        <th className="p-3">Link sản phẩm</th>
                        <th className="p-3">ID Loại sản phẩm</th>
                        <th className="p-3">Thương hiệu</th>
                        <th className="p-3">Số lượng</th>
                        <th className="p-3">Sửa/Xóa</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {
                        items.map(item => {
                            return (
                                <tr key={item["ID"]} className="border-b-2 border-gray-300">
                                    <td className="p-3">{item["ID"]}</td>
                                    <td className="p-3">{item["Product Name"]}</td>
                                    <td className="p-3">{item["Price"]}</td>
                                    <td className="p-3">{item["Discount"]}</td>
                                    <td className="p-3">{item["Image Src"]}</td>
                                    <td className="p-3">{item["Item_type_id"]}</td>
                                    <td className="p-3">{item["Brand"]}</td>
                                    <td className="p-3">{item["Quantity"]}</td>
                                    <td>
                                        <Link href={`/admin/products/edit_item/${item["ID"]}`}>
                                            <button type="button" className="p-2 rounded-full hover:bg-gray-300 ease-in duration-125"><FaPen /></button>
                                        </Link>
                                        <Link href={`/admin/confirmation/${item["ID"]}`}>
                                            <button type="button" className="p-2 rounded-full hover:bg-gray-300 ease-in duration-125"><FaTrashAlt /></button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export function ItemTypeTable({item_types}) {
    return (
        <div className="my-5 bg-white rounded-lg p-3 w-fit">
            <h1 className="p-4 text-2xl font-bold text-gray-500">Loại sản phẩm</h1>
            <table className="m-2">
                <thead>
                    <tr className="border-b-2 border-gray-300">
                        <th className="p-3">ID Loại Sản Phẩm</th>
                        <th className="p-3">Tên loại sản phẩm</th>
                        <th className="p-3">Số lượng sản phẩm</th>
                        <th className="p-3">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {item_types.map(itemType => {
                        return (
                            <tr key={itemType["Item_type_id"]} className="border-b-2 border-gray-300">
                                <td className="p-3">{itemType["Item_type_id"]}</td>
                                <td className="p-3">{itemType["Item_type_name"]}</td>
                                <td className="p-3">{itemType["Num_products"]}</td>
                                <td>
                                    <button type="button" className="p-2 rounded-full hover:bg-gray-300 ease-in duration-125"><FaPen /></button>
                                    <button type="button" className="p-2 rounded-full hover:bg-gray-300 ease-in duration-125"><FaTrashAlt /></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}