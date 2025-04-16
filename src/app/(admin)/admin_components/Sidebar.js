import { FaUserAlt } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { FaToggleOff } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";
import Image from "next/image";
import logo from "@/../public/image/admin/logo.svg";
import styles from "./styles.module.css";
import { BsGridFill } from "react-icons/bs";
import { BsStack } from "react-icons/bs";
import { BsCollectionFill } from "react-icons/bs";

export function HeaderSidebar() {
    return (
        <div id="header" className="px-8 py-10 flex flex-row justify-between">
            <div id="title" className="flex flex-row justify-between">
                {/* <FaUserAlt className="mr-3 text-blue-400" size={20} />
                <h1 className="text-xl font-bold font-mono">Mazer</h1> */}
                <Image src={logo} alt="logo Mazer" width={84}/>
            </div>
            <div className="w-1/2 flex flex-row justify-evenly">
                <CiSun size={24} className="text-gray-400"/>
                <FaToggleOff size={24} className="text-gray-300"/>
                <BsMoonStars size={20} className="text-gray-500"/>
            </div>
        </div>
    )
}


export function Menu({selected = "Dashboard"}) {
    const menuItems = [
        {  
            itemName: "Dashboard",
            icon: <BsGridFill />,
            selected: true
        },
        {
            itemName: "Components",
            icon: <BsStack />,
            selected: false
        },
        {
            itemName: "Extra Component",
            icon: <BsCollectionFill />,
            selected: false
        }
    ]

    const listMenuItems = menuItems.map((item) => {
        return (
            //list
            <div 
                key={item.itemName} 
                className={"px-5 py-3 flex items-center gap-5 rounded-xl my-2 " 
                + (item.selected ? "bg-[#435ebe] text-white" : "")}
                // onClick={handleSelection}
            >
                {item.icon}
                <span>{item.itemName}</span>
            </div>
        )
    })
    return (
        <div id="menu-title" className="px-8">
            <h1 className={"p-5 text-base font-semibold " + styles.newfont}>Menu</h1>
            <div>
                {listMenuItems}
            </div>
        </div>
    )
}

export default function Sidebar() {
    return (
        <div className="md: w-[300px]">
            <HeaderSidebar />
            <Menu />
        </div>
    )
}