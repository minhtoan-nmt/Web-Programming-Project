import { redirect } from "next/navigation";

async function deleteItem(id) {
    console.log(id);
    const res = await fetch(`/api/remove_item/${id}`);
    if (!res.ok) {
        console.error(res.status);
    }
    alert("Thực hiện thành công");
    redirect("/admin/products");
}

export function ConfirmDeleteButton({id, router}) {
    return (
        <button 
            type="button" 
            className="py-2 px-3 bg-[#435ebe] text-white rounded-lg hover:scale-110 ease-in duration-75 cursor-pointer"
            onClick={() => {
                deleteItem(id);
                router.back();
            }}
        >
            Có
        </button>
    )
}