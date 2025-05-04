import Link from "next/link";
import Modal from "./modal";



export default async function Confirmation({params}) {
    const { id } = await params;
    return(
        <Modal id={id}>
            <div className="text-lg font-bold p-5 border-b-1 border-gray-200">
                Xóa một sản phẩm
            </div>
            <div className="p-5 border-b-1 border-gray-200">
                Bạn có chắc mình muốn xóa sản phẩm này hay không?
            </div>
                          
        </Modal>
    )
}