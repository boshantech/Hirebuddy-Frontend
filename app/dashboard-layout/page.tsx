"use client";

import { useState } from "react";
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Menu, X } from "lucide-react";
import {useEffect} from "react";

export default function DashboardLayout() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [darkMode, setDarkMode] = useState(false);


    useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [darkMode]);
    
    return (

        <div className="flex min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">

            <Sidebar
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
            />

            <div className="flex-1 flex flex-col">

                <Header
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />


            </div>


        </div>

    );
}