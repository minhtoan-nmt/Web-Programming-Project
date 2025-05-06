import Image from "next/image"

function InputTypeDisabled({label, name, defaultValue, placeholder}) {
    return (
        <div className="my-3">
            <label htmlFor={name} className="font-bold">{label}</label>
            <input
                step={"any"}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                className="p-2 w-full rounded-lg border-2 border-gray-300 focus:outline-3 focus:outline-gray-300 duration-75 cursor-text"
                disabled
            ></input>
        </div>
    )
}

function DetailPage({detail}) {
    return (
        <div className="bg-white rounded-lg p-3 mb-10">
            <h1 className="p-4 text-2xl font-bold text-gray-500">Thông tin giao hàng</h1>
            <form className="p-8 bg-white text-gray-500 rounded-2xl">
                <InputTypeDisabled 
                label={"Họ và tên"}
                name={"full-name"}
                defaultValue={detail["Full Name"]}
                />
                <InputTypeDisabled 
                label={"Thời gian đặt hàng"}
                name={"time-order"}
                defaultValue={detail["Time_order"]}
                />
                <div className="xl:grid xl:grid-cols-[2fr_1fr_1fr_1fr] gap-3">
                    <InputTypeDisabled 
                    label={"Địa chỉ nhà"}
                    name={"address"}
                    defaultValue={detail["Address"]}
                    />
                    <InputTypeDisabled
                    label={"Phường/Xã"}
                    name={"ward"}
                    defaultValue={detail["Ward"]}
                    />
                    <InputTypeDisabled
                    label={"Quận/Huyện"}
                    name={"district"}
                    defaultValue={detail["District"]}
                    />
                    <InputTypeDisabled
                    label={"Tỉnh/Thành phố"}
                    name={"city"}
                    defaultValue={detail["City/Province"]}
                    />
                </div>
                <InputTypeDisabled
                label={"Điện thoại"}
                name={"phone-num"}
                defaultValue={detail["Phone number"]}
                />
                <InputTypeDisabled
                label={"Email"}
                name={"email"}
                defaultValue={detail["Email"]}
                />
                <InputTypeDisabled
                label={"Phương thức thanh toán"}
                name={"pay-method"}
                defaultValue={detail["Pay_method"]==='cash' ? "Tiền mặt" : "Chuyển khoản"}
                />
            </form>
        </div>
    )
}

function ProductsInInvoice({ items, invoice }) {
    return (
        <div className="bg-white rounded-lg p-3 w-fit">
            <h1 className="p-4 text-2xl font-bold text-gray-500">Sản phẩm đã mua</h1>
            <div className="">
            <table className="m-2">
                <thead>
                    <tr className="border-b-2 border-gray-300">
                        <th className="p-3"></th>
                        <th className="p-3">ID Sản phẩm</th>
                        <th className="p-3">Tên sản phẩm</th>
                        <th className="p-3">Số lượng</th>
                        <th className="p-3">Giá</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {
                        items.map(item => {
                            return (
                                <tr key={item["ID"]} className="border-b-2 border-gray-300">
                                    <td className="p-3"><Image 
                                        src={item["Image Src"]} 
                                        alt="Hình ảnh sản phẩm" 
                                        width={64} 
                                        height={64} 
                                        className="w-12 h-12 rounded-full" 
                                    /></td>
                                    <td className="p-3">{item["ID"]}</td>
                                    <td className="p-3">{item["Product Name"]}</td>
                                    <td className="p-3">{item["Quantity"]}</td>
                                    <td className="p-3">{item["Price"]*(1-item["Discount"])}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="flex justify-around w-full gap-5 mt-10">
                <p className="font-bold text-lg">Tổng giá trị đơn hàng:</p>
                <p className="font-bold text-2xl">{invoice["Total_price"]}&#8363;</p>
            </div>
            <span className="text-sm font-normal relative left-100">(Bao gồm phí giao hàng 10,000đ)</span>
            </div>
        </div>
    )
}

export default async function Page({params}) {
    const { id, cartid } = await params;
    console.log(id, " & ", cartid);
    const res = await fetch(`http://localhost/admin_api/getInvoicebyId.php?id=${id}&cartid=${cartid}`);
    if (!res.ok) {
        console.log(res.status);
    }
    const data = await res.json();
    console.log(data);
    return (
        <div className="p-10 block">
            <h1 className="text-3xl my-10">Thông tin đơn hàng</h1>
            <div className="">
            <DetailPage detail={data[0]}/>
            <ProductsInInvoice items={data[1]} invoice={data[0]}/>
            </div>
        </div>
    )
}