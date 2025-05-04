import Link from "next/link";
import Modal from "../../../../_admin_components/modal";

async function deleteItem(id) {
    const res = await fetch(`http://localhost/admin_api/deleteItem.php?id=${id}`);
    if (!res.ok) {
        console.error(res.status);
    }
    const result = await res.json();
    return Response.json({result});
}

export default async function Confirmation({params}) {
    const { id } = await params;
    console.log(id);
    return(
        <Modal func={deleteItem(id)}>
            <div className="text-lg font-bold p-5 border-b-1 border-gray-200">
                Xóa một sản phẩm
            </div>
            <div className="p-5 border-b-1 border-gray-200">
                Bạn có chắc mình muốn xóa sản phẩm này hay không?
            </div>    
        </Modal>
    )
}