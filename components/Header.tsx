"use client";

import { Moon, Sun, User, Settings, LogOut, Bell, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Header({
  isSidebarOpen,
  setIsSidebarOpen,
  darkMode,
  setDarkMode,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-6 text-black dark:bg-zinc-900 dark:text-white">

      <div className="flex items-center gap-4">
        {/* Left side */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700"
        >
          {isSidebarOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      {/* Right side */}
      <div className="flex items-center gap-7 pr-10">


        <div className="relative">
          <Bell size={20} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            5
          </span>

        </div>
        {/* Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>


        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3"
          >
            <img src="/logo.png"
              alt="profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="leading-tight">
              <h3 className="font-semibold">
                Emma Williams
              </h3>

              <p className="text-sm text-gray-500">
                Software Engineer
              </p>
            </div>


          </button>

          {
            isOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-lg border text-black dark:bg-zinc-900 dark:text-white dark:border-zinc-700 ">

                <div className="p-2">
                  <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg">
                    <User size={18} />
                    Profile
                  </button>

                  <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg">
                    <Settings size={18} />
                    Settings
                  </button>

                  <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg">
                    <Bell size={18} />
                    Notification
                  </button>

                  <hr className="my-2" />

                  <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg">
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </div>
            )
          }

        </div>
      </div>
    </header>
  );
}