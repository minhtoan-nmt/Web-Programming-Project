import { ProductTable, ItemTypeTable } from "@/app/(admin)/_admin_components/Table"

export async function FetchProducts() {
    const res = await fetch(process.env.URL + "/api/products/get_items", { //in reality we should use environment variables
        method: "GET",
    });
    if (!res.ok) {
        console.log(res.status);
    }
    const data = await res.json();
    return data;
}

export async function FetchTypes() {
    const res = await fetch(process.env.URL + "/api/products/get_item_type_data", { //in reality we should use environment variables
        method: "GET",
    });
    if (!res.ok) {
        console.log(res.status);
    }
    const data = await res.json();
    return data;
}

export default async function Page() {
    const data = await FetchProducts();
    const typedata = await FetchTypes();
    const items = data.data;
    const types = typedata.data;
    return (
        <div className="p-3 md:p-10 block">
            <h1 className="text-3xl my-5 md:my-10">Trang quản lý sản phẩm</h1>
            <ProductTable items={items}/>
            <ItemTypeTable item_types={types}/>
        </div>
    )
}