'use client'

import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react";

export default function Modal({children}) {
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
                <button 
                    type="button" 
                    className="py-2 px-3 bg-[#435ebe] text-white rounded-lg hover:scale-110 ease-in duration-75 cursor-pointer"
                >
                    Có
                </button>
                    <button 
                        type="button" 
                        className="py-2 px-3 bg-gray-100 rounded-lg hover:scale-110 ease-in duration-75 cursor-pointer"
                        onClick={() => router.back()}
                    >
                        Không
                    </button>
            </div>
        </dialog>
    )
}