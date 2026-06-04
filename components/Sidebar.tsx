"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarMenu } from "@/data/sidebar";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({
  isOpen,
}: SidebarProps) {

  const pathname = usePathname();

  const [openMenu, setOpenMenu] =
    useState<string | null>(null);

  return (
    <div
      className={`
      h-screen
      transition-all
      duration-300
      bg-gradient-to-b 
      from-blue-600 
      via-blue-500 
      to-cyan-400
      dark:bg-zinc-900
      dark:bg-none 
      ${isOpen ? "w-64" : "w-20"}
      `}
    >

      {/* Logo */}
      <div className="h-20 flex items-center justify-center ">

        {isOpen ? (
          <h1 className="text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Hire
            </span>

            <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Buddy
            </span>
          </h1>
        ) : (
          <div className="w-12 h-12 rounded-full bg-cyan-300 flex items-center justify-center">
            <span className="text-black text-xl font-extrabold ">
              HB
            </span>
          </div>
        )}

      </div>


      {/* Menus */}
      <div className="p-3">

        {sidebarMenu.map((menu) => {

          const Icon = menu.icon;

          return (
            <div
              key={menu.title}
              className="mb-2"
            >


              {/* Parent Menu */}
              <button
                onClick={() =>
                  setOpenMenu(
                    openMenu === menu.title
                      ? null
                      : menu.title
                  )
                }
                className="
                w-full
                flex
                items-center
                justify-between
                p-3
                rounded-lg
                hover:bg-blue-600
                hover:text-white
                "
              >
                <div className="flex items-center gap-3">

                  <Icon size={22} />

                  {isOpen && (
                    <span>
                      {menu.title}
                    </span>
                  )}

                </div>

                {isOpen && (
                  openMenu === menu.title
                    ? <ChevronDown size={18} />
                    : <ChevronRight size={18} />
                )}
              </button>


              {/* Child Menus */}
              {isOpen &&
                openMenu === menu.title && (

                <div className="ml-10 mt-2 space-y-1">

                  {menu.children.map((child) => (

                    <Link
                      key={child.path}
                      href={child.path}
                      className={`
                      block
                      p-2
                      rounded-md

                      ${
                        pathname === child.path
                          ? "bg-blue-600 text-white"
                          : "hover:bg-blue-100"
                      }
                      `}
                    >
                      {child.title}
                    </Link>

                  ))}

                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}
















