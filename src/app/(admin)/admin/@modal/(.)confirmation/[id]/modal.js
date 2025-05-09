'use client'

import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react";
import { deleteItem } from "./page";
import { ConfirmDeleteButton } from "@/app/(admin)/_admin_components/ConfirmDelete";
import { GoBackButton } from "@/app/(admin)/_admin_components/GoBack";


export default function Modal({children, id}) {
    const router = useRouter();
    const dialogRef = useRef(null);
    useEffect(() => {
        if (dialogRef.current && !dialogRef.current.open) {
            dialogRef.current.showModal();
        }
    }, []);

    return (
        <dialog
            ref={dialogRef}
            onClose={() => router.back()}
            className="w-lg bg-white m-auto rounded-lg"
        >
            {children}
            <div className="p-5 flex justify-end gap-3">
                <ConfirmDeleteButton id={id} router={router} />
                <GoBackButton router={router}/>
            </div>  
        </dialog>
    )
}