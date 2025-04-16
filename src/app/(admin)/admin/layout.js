import Sidebar from "../_admin_components/Sidebar"

export default function Admin({children}) {
    return (
        <div className="flex flex-row">
            <Sidebar />
            {children}
        </div>
    )
}