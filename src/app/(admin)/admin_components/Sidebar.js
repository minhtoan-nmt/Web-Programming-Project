import { FaUserAlt } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { FaToggleOff } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";

export default function Sidebar() {
    return (
        <div className="md: w-[300px]">
            <div id="header" className="p-9 flex flex-row justify-between">
                <div id="title" className="flex flex-row justify-between">
                    <FaUserAlt className="mr-3" size={20}/>
                    <h1 className="text-xl font-bold">Mazer</h1>
                </div>
                <div className="w-1/2 flex flex-row justify-evenly">
                    <CiSun size={24} className="text-gray-400"/>
                    <FaToggleOff size={24} className="text-gray-300"/>
                    <BsMoonStars size={20} className="text-gray-500"/>
                </div>
            </div>
        </div>
    )
}