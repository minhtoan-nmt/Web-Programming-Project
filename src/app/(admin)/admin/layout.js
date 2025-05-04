import Sidebar from "../_admin_components/Sidebar"

export default function Admin({children}) {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="block w-full h-full min-h-screen  bg-[#f2f7ff]">{children}</div>
        </div>
    )
}