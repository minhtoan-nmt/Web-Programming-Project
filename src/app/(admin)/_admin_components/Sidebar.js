'use client'

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
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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


export function Menu() {
    const pathname = usePathname();
    const menuItems = [
        {  
            itemName: "Dashboard",
            icon: <BsGridFill />,
            link: "/admin"
        },
        {
            itemName: "Products",
            icon: <BsStack />,
            link: "/admin/products"
        },
        {
            itemName: "Invoices",
            icon: <BsCollectionFill />,
            link: "/admin/invoices"
        }
    ]
    let select = "";
    const listMenuItems = menuItems.map((item) => {
        if (pathname === item.link) {
            select = item.itemName;
        }
        return (
            //list
            <Link
                href={item.link} 
                key={item.itemName} 
                className={"px-5 py-3 flex items-center gap-5 rounded-xl my-2 " 
                + (select==item.itemName ? "bg-[#435ebe] text-white" : "hover:bg-gray-200")}
            >
                {item.icon}
                <span>{item.itemName}</span>
            </Link>
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

export default function Sidebar({select}) {
    return (
        <div className="w-1/5 min-w-[300px]">
            <HeaderSidebar />
            <Menu selected={select}/>
        </div>
    )
}