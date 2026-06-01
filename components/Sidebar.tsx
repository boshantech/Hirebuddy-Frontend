"use client";

import { LayoutDashboard, Users, Briefcase, Info, ChevronDown, ChevronRight, FileText, X, Menu } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
  isOpen,
  setIsOpen,
}: SidebarProps) {
  const [openUsers, setOpenUsers] = useState(false);
  const [openJobs, setOpenJobs] = useState(false);

  return (
    <div className={` h-screen ${isOpen ? "w-64" : "w-20"} bg-gradient-to-b from-blue-50 to-white border-r border-blue-100 shadow-lg  transition-all duration-300 dark:bg-none dark:bg-zinc-900 dark:border-zinc-700`}>
      <div className="flex items-center justify-between p-4 border-b h-20">
        {isOpen ? (
          <h1 className="text-3xl font-extrabold ">
             <span className="text-blue-600">Hire</span>
             <span className="text-indigo-700">Buddy</span>
          </h1>
         ) : (
           <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-extrabold text-xl tracking-wider">HB</span>
           </div>
         )} 

        
      </div>

      <div className="flex items-center gap-3 p-3 m-3 rounded-lg  text-black dark:text-white cursor-pointer hover:bg-blue-600 hover:text-white">
        <LayoutDashboard size={22} />
        {isOpen && <span>Dashboard</span>}
      </div>

      <div className="flex items-center gap-3 p-3 m-3 rounded-lg  text-black dark:text-white  cursor-pointer hover:bg-blue-600 hover:text-white">
        <FileText size={22} />
        {isOpen && <span>Pages</span>}
      </div>

      {/* Users Dropdown */}
      <div className="mt-2 m-3 ">

        <div
          onClick={() => setOpenUsers(!openUsers)}
          className="flex justify-between items-center p-3 text-black dark:text-white  rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white"
        >
          <div className="flex items-center gap-3 ">
            <Users size={22} />
            {isOpen && <span>Users</span>}
          </div>
           
          {isOpen && 
          (openUsers ? (
            <ChevronDown size={18} />
          ) : (
            <ChevronRight size={18} />
          ))}
        </div>

        {isOpen && openUsers && (
          <div className="ml-10 mt-2 space-y-3 text-sm ">

            <p className="p-2 cursor-pointer text-black dark:text-white hover:text-white hover:bg-blue-600">
              All Users
            </p>

            <p className=" p-2 cursor-pointer text-black dark:text-white hover:text-white hover:bg-blue-600">
              Admin
            </p>

            <p className="p-2 cursor-pointer text-black dark:text-white hover:text-white hover:bg-blue-600">
              Support
            </p>

            <p className=" p-2 cursor-pointer text-black dark:text-white hover:text-white hover:bg-blue-600">
              Buddies
            </p>

            <p className="p-2 cursor-pointer text-black dark:text-white hover:text-white hover:bg-blue-600">
              Hirer
            </p>

          </div>
        )}

      </div>

      <div className="flex items-center gap-3 p-3 m-3 rounded-lg  text-black dark:text-white  cursor-pointer hover:bg-blue-600 hover:text-white">
            <Briefcase size={20} />
            {isOpen && <span>Jobs</span>}
          </div>



    </div>
  );
}