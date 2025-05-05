import Link from "next/link";
import Modal from "./modalType";



export default async function ConfirmDeleteType({params}) {
    const { id } = await params;
    return(
        <Modal id={id}>
            <div className="text-lg font-bold p-5 border-b-1 border-gray-200">
                Xóa loại sản phẩm
            </div>
            <div className="p-5 border-b-1 border-gray-200">
                Bạn sẽ xóa luôn các sản phẩm nằm trong loại này, bạn chắc chứ?
            </div>                          
        </Modal>
    )
}