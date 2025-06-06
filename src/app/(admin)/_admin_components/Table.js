'use client'

import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { CgDetailsMore } from "react-icons/cg";
import { setStatus } from "../admin/invoices/setStatus";


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
        <div className="bg-white rounded-lg p-1 md:p-3 w-fit">
            <div className="flex justify-between items-center">
                <h1 className="p-4 text-sm md:text-2xl font-bold text-gray-500">Danh sách sản phẩm</h1>
                <Link href="/admin/products/add_item">
                    <button 
                        type="button" 
                        className="text-xs md:text-base h-fit py-2 px-3 bg-[#435ebe] text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-75"
                    >
                        Thêm sản phẩm
                    </button>
                </Link>
            </div>
            <table className="m-2 text-xs md:text-base">
                <thead>
                    <tr className="border-b-2 border-gray-300">
                        <th className="p-3">ID Sản phẩm</th>
                        <th className="p-3">Tên sản phẩm</th>
                        <th className="p-3">Giá gốc</th>
                        <th className="p-3 hidden md:table-cell">Khuyến mãi</th>
                        <th className="p-3 hidden md:table-cell">ID Loại sản phẩm</th>
                        <th className="p-3 hidden md:table-cell">Thương hiệu</th>
                        <th className="p-3">Số lượng</th>
                        <th className="p-3">Sửa/Xóa</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {
                        newItems.map(item => {
                            return (
                                <tr key={item["ID"]} className="border-b-2 border-gray-300 w-full max-w-full">
                                    <td className="p-3">{item["ID"]}</td>
                                    <td className="p-3">{item["Product Name"]}</td>
                                    <td className="p-3">{item["Price"]}</td>
                                    <td className="p-3 hidden md:table-cell">{item["Discount"]}</td>
                                    <td className="p-3 hidden md:table-cell">{item["Item_type_id"]}</td>
                                    <td className="p-3 hidden md:table-cell">{item["Brand"]}</td>
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
                <button type="button" className="p-3 mr-2 rounded-md border border-gray-200 hover:bg-gray-200 cursor-pointer" onClick={() => page>1 && setPage(page - 1)}><GrPrevious /></button>
                {pageNum.map(p => 
                    <button key={p} type="button" className={"p-3 w-12 rounded-md border border-gray-200 cursor-pointer " + (p===page ? "bg-[#435ebe] text-white" : "hover:bg-gray-200")}
                        onClick={() => setPage(p)}>{p}</button>)}
                <button type="button" className="p-3 ml-2 mrounded-md border border-gray-200 hover:bg-gray-200 cursor-pointer" onClick={() => page + 1 <= numPages && setPage(page + 1)}><GrNext /></button>
                <label htmlFor="itemsPerPage" className="p-3">Số hàng mỗi trang</label>
                    <select 
                    name="itemsPerPage" 
                    id="itemsPerPage"
                    defaultValue={8}
                    className="border rounded-md border-gray-200 hover:bg-gray-200 cursor-pointer p-3"
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
                        className=" h-fit py-2 px-3 bg-[#435ebe] text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-75"
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
                                        <button type="button" className="p-2 rounded-full hover:bg-gray-300 ease-in duration-125 cursor-pointer"><FaPen /></button>
                                    </Link>
                                    <Link href={`/admin/confirm_type/${itemType["Item_type_id"]}`} >
                                        <button type="button" className="p-2 rounded-full hover:bg-gray-300 ease-in duration-125 cursor-pointer"><FaTrashAlt /></button>
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
    const [page, setPage] = useState(1);
    const [rowPerPage, setRowPerPage] = useState(8);
    const [filterStatus, setfilterStatus] = useState("all");
    const lastIndex = page * rowPerPage;
    const firstIndex = lastIndex - rowPerPage;
    const numPages = invoices.length % rowPerPage === 0 ? invoices.length / rowPerPage : invoices.length / rowPerPage + 1;
    const invoiceList = invoices.slice(firstIndex, lastIndex).filter(i => {
        if (filterStatus == "all") {
            return true;
        }
        return i["Status"] == filterStatus;
    });
    let pageNum = [];
    for (let i=1; i<=numPages; i++) {
        pageNum.push(i);
    }
    return (
        <div className="bg-white rounded-lg md:p-3 w-fit">
            <div className="md:flex md:justify-between items-center">
                <h1 className="md:p-4 p-2 text-base md:text-2xl font-bold text-gray-500">Danh sách hóa đơn</h1>
                <form>
                <label htmlFor="filter" className="mx-2 text-xs md:text-base">Lọc theo:</label>
                <select name="filter" className="border border-gray-400 md:p-3 p-1 rounded-md md:text-base text-xs" onChange={e => setfilterStatus(e.target.value)}>
                    <option value={"all"} className="p-2">Tất cả</option>
                    <option value={"pending"} className="p-2">Đang đợi</option>
                    <option value={"received"} className="p-2">Đã tiếp nhận</option>
                    <option value={"processing"} className="p-2">Đang xử lý</option>
                    <option value={"delivering"} className="p-2">Đang giao hàng</option>
                    <option value={"done"} className="p-2">Đã nhận hàng</option>
                </select>
                </form>
            </div>
            <table className="m-2 md:text-base text-xs">
                <thead>
                    <tr className="border-b-2 border-gray-300">
                        <th className="p-3 hidden lg:table-cell">ID hóa đơn</th>
                        <th className="p-3 hidden lg:table-cell">ID giỏ hàng</th>
                        <th className="md:p-3 p-1">Ngày đặt hàng</th>
                        <th className="md:p-3 p-1">Họ và tên khách hàng</th>
                        <th className="p-3 hidden lg:table-cell">Email</th>
                        <th className="md:p-3 p-1">Số điện thoại</th>
                        <th className="md:p-3 p-1">Phương thức giao hàng</th>
                        <th className="md:p-3 p-1">Trạng thái</th>
                        <th className="md:p-3 p-1"></th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {
                        invoiceList.map(invoice => {
                            return (
                                <tr key={invoice["ID"]} className="border-b-2 border-gray-300 hover:bg-gray-200 cursor-pointer">
                                    <td className="p-3 hidden lg:table-cell"><Link href={`/admin/invoices/invoice_detail/${invoice["ID"]}/${invoice["Cart ID"]}`} className="w-full h-full">{invoice["ID"]}</Link></td>
                                    <td className="p-3 hidden lg:table-cell"><Link href={`/admin/invoices/invoice_detail/${invoice["ID"]}/${invoice["Cart ID"]}`}>{invoice["Cart ID"]}</Link></td>
                                    <td className="md:p-3 p-1"><Link href={`/admin/invoices/invoice_detail/${invoice["ID"]}/${invoice["Cart ID"]}`}>{invoice["Time_order"]}</Link></td>
                                    <td className="md:p-3 p-1"><Link href={`/admin/invoices/invoice_detail/${invoice["ID"]}/${invoice["Cart ID"]}`}>{invoice["Full Name"]}</Link></td>
                                    <td className="p-3 hidden lg:table-cell"><Link href={`/admin/invoices/invoice_detail/${invoice["ID"]}/${invoice["Cart ID"]}`}>{invoice["Email"]}</Link></td>
                                    <td className="md:p-3 p-1"><Link href={`/admin/invoices/invoice_detail/${invoice["ID"]}/${invoice["Cart ID"]}`}>{invoice["Phone number"]}</Link></td>
                                    <td className="md:p-3 p-1"><Link href={`/admin/invoices/invoice_detail/${invoice["ID"]}/${invoice["Cart ID"]}`}>{invoice["Pay_method"]}</Link></td>
                                    <td className="md:p-3 p-1">
                                        <form>
                                            <select name="status" className="border border-gray-200 md:p-2 p-1 hover:bg-amber-50"
                                                defaultValue={invoice["Status"]}
                                                onChange={(e) => setStatus(e.target.value, invoice["ID"], invoice["Cart ID"])}>
                                                <option value={"pending"} className="p-2">Đang đợi</option>
                                                <option value={"received"} className="p-2">Đã tiếp nhận</option>
                                                <option value={"processing"} className="p-2">Đang xử lý</option>
                                                <option value={"delivering"} className="p-2">Đang giao hàng</option>
                                                <option value={"done"} className="p-2">Đã nhận hàng</option>
                                            </select>
                                        </form>
                                    </td>
                                    <td className="md:p-3 p-1"><Link href={`/admin/invoices/invoice_detail/${invoice["ID"]}/${invoice["Cart ID"]}`}><CgDetailsMore /></Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="mt-3 flex flex-row justify-end p-5">
                <button type="button" className="md:p-3 p-1 mr-2 rounded-md border border-gray-200 hover:bg-gray-200" onClick={() => page>1 && setPage(page - 1)}><GrPrevious /></button>
                {pageNum.map(p => 
                    <button key={p} type="button" className={"md:p-3 p-1 w-12 rounded-md border border-gray-200 " + (p===page ? "bg-[#435ebe] text-white" : "hover:bg-gray-200")}
                        onClick={() => setPage(p)}>{p}</button>)}
                <button type="button" className="md:p-3 p-1 ml-2 mrounded-md border border-gray-200 hover:bg-gray-200" onClick={() => page + 1 <= numPages && setPage(page + 1)}><GrNext /></button>
                <label htmlFor="itemsPerPage" className="md:p-3 p-1">Số hàng mỗi trang</label>
                    <select 
                    name="itemsPerPage" 
                    id="itemsPerPage"
                    defaultValue={8}
                    className="border rounded-md"
                    onChange={(e) => setRowPerPage(Number(e.target.value))}
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