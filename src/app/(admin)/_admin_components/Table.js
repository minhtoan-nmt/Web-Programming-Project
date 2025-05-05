'use client'

import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { CgDetailsMore } from "react-icons/cg";


export function ProductTable({items}) {
    const [page, setPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(8);
    let lastIndex = itemPerPage * page;
    let firstIndex = lastIndex - itemPerPage;
    const newItems = items.slice(firstIndex, lastIndex);
    const numPages = items.length % itemPerPage === 0 ? items.length / itemPerPage : items.length / itemPerPage + 1;

    let pageNum = [];
    for (let i=1; i<=numPages; i++) {
        pageNum.push(i);
    }
    return (
        <div className="bg-white rounded-lg p-3">
            <div className="flex justify-between items-center">
                <h1 className="p-4 text-2xl font-bold text-gray-500">Danh sách sản phẩm</h1>
                <Link href="/admin/products/add_item">
                    <button 
                        type="button" 
                        className=" h-fit py-2 px-3 bg-[#435ebe] text-white rounded-lg"
                    >
                        Thêm sản phẩm
                    </button>
                </Link>
            </div>
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
                        newItems.map(item => {
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
            <div className="mt-3 flex flex-row justify-end p-5">
                <button type="button" className="p-3 mr-2 rounded-md border border-gray-200 hover:bg-gray-200" onClick={() => page>1 && setPage(page - 1)}><GrPrevious /></button>
                {pageNum.map(p => 
                    <button key={p} type="button" className={"p-3 w-12 rounded-md border border-gray-200 " + (p===page ? "bg-[#435ebe] text-white" : "hover:bg-gray-200")}
                        onClick={() => setPage(p)}>{p}</button>)}
                <button type="button" className="p-3 ml-2 mrounded-md border border-gray-200 hover:bg-gray-200" onClick={() => page + 1 <= numPages && setPage(page + 1)}><GrNext /></button>
                <label htmlFor="itemsPerPage" className="p-3">Số hàng mỗi trang</label>
                    <select 
                    name="itemsPerPage" 
                    id="itemsPerPage"
                    defaultValue={8}
                    className="border rounded-md"
                    onChange={(e) => setItemPerPage(Number(e.target.value))}
                    >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value={8}>8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
            </div>
        </div>
    )
}

export function ItemTypeTable({item_types}) {
    return (
        <div className="my-5 bg-white rounded-lg p-3 w-fit">
            <div className="flex justify-between items-center">
                <h1 className="p-4 text-2xl font-bold text-gray-500">Loại sản phẩm</h1>
                <Link href="/admin/products/add_item_type">
                    <button 
                        type="button" 
                        className=" h-fit py-2 px-3 bg-[#435ebe] text-white rounded-lg"
                    >
                        Thêm loại sản phẩm
                    </button>
                </Link>
            </div>
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
                                    <Link href={`/admin/products/edit_type/${itemType["Item_type_id"]}`} >
                                        <button type="button" className="p-2 rounded-full hover:bg-gray-300 ease-in duration-125"><FaPen /></button>
                                    </Link>
                                    <Link href={`/admin/confirm_type/${itemType["Item_type_id"]}`} >
                                        <button type="button" className="p-2 rounded-full hover:bg-gray-300 ease-in duration-125"><FaTrashAlt /></button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export function InvoiceTable({invoices}) {
    return (
        <div className="bg-white rounded-lg p-3">
            <div className="flex justify-between items-center">
                <h1 className="p-4 text-2xl font-bold text-gray-500">Danh sách hóa đơn</h1>
                {/* <Link href="/admin/products/add_item">
                    <button 
                        type="button" 
                        className=" h-fit py-2 px-3 bg-[#435ebe] text-white rounded-lg"
                    >
                        Thêm sản phẩm
                    </button>
                </Link> */}
            </div>
            <table className="m-2">
                <thead>
                    <tr className="border-b-2 border-gray-300">
                        <th className="p-3">ID hóa đơn</th>
                        <th className="p-3">ID giỏ hàng</th>
                        <th className="p-3">Ngày đặt hàng</th>
                        <th className="p-3">Họ và tên khách hàng</th>
                        <th className="p-3">Tỉnh/Thành phố</th>
                        <th className="p-3">Quận/Huyện</th>
                        <th className="p-3">Phường</th>
                        <th className="p-3">Địa chỉ giao hàng</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Số điện thoại</th>
                        <th className="p-3">Phương thức giao hàng</th>
                        <th className="p-3"></th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {
                        invoices.map(invoice => {
                            return (
                                <tr key={invoice["ID"]} className="border-b-2 border-gray-300 hover:bg-gray-200 cursor-pointer">
                                    <td className="p-3">{invoice["ID"]}</td>
                                    <td className="p-3">{invoice["Cart ID"]}</td>
                                    <td className="p-3">{invoice["Time_order"]}</td>
                                    <td className="p-3">{invoice["Full Name"]}</td>
                                    <td className="p-3">{invoice["City/Province"]}</td>
                                    <td className="p-3">{invoice["District"]}</td>
                                    <td className="p-3">{invoice["Ward"]}</td>
                                    <td className="p-3">{invoice["Address"]}</td>
                                    <td className="p-3">{invoice["Email"]}</td>
                                    <td className="p-3">{invoice["Phone number"]}</td>
                                    <td className="p-3">{invoice["Pay_method"]}</td>
                                    <td className="p-3"><CgDetailsMore /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* <div className="mt-3 flex flex-row justify-end p-5">
                <button type="button" className="p-3 mr-2 rounded-md border border-gray-200 hover:bg-gray-200" onClick={() => page>1 && setPage(page - 1)}><GrPrevious /></button>
                {pageNum.map(p => 
                    <button key={p} type="button" className={"p-3 w-12 rounded-md border border-gray-200 " + (p===page ? "bg-[#435ebe] text-white" : "hover:bg-gray-200")}
                        onClick={() => setPage(p)}>{p}</button>)}
                <button type="button" className="p-3 ml-2 mrounded-md border border-gray-200 hover:bg-gray-200" onClick={() => page + 1 <= numPages && setPage(page + 1)}><GrNext /></button>
                <label htmlFor="itemsPerPage" className="p-3">Số hàng mỗi trang</label>
                    <select 
                    name="itemsPerPage" 
                    id="itemsPerPage"
                    defaultValue={8}
                    className="border rounded-md"
                    onChange={(e) => setItemPerPage(Number(e.target.value))}
                    >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value={8}>8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
            </div> */}
        </div>
    )
}