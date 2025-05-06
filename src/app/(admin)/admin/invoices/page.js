import { InvoiceTable } from "../../_admin_components/Table"

export default async function ExtraComponent() {
    const res = await fetch("http://localhost/admin_api/getInvoiceList.php");
    if (!res.ok) {
        console.log(res.status);
    }
    const data = await res.json();
    return (
        <div className="p-10 block">
            <h1 className="text-3xl my-10">Trang hóa đơn</h1>
            <div>
                <InvoiceTable invoices={data}/>
            </div>
        </div>
    )
}