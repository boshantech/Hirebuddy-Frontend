import {redirect} from "next/navigation";

export default function Home() {

  redirect("/Dashboard");
}




// "use client";

// import { useState } from "react";
// import Sidebar from "@/components/Sidebar";
// import Header from "@/components/Header";

// export default function Home() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     // Main container wrapper holding everything horizontally
//     <div className="flex h-screen w-screen overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      
      
//       {/* 1. Sidebar Navigation - Fixed on Left for Desktop */}
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//       {/* 2. Main Work Area Wrapper - This must be a vertical flex container ('flex-col') */}
//       <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
//         {/* 3. The Header Section - This will now sit right at the top! */}
//         <Header onMenuClick={() => setIsSidebarOpen(true)} />

//       </div>
//     </div>
//   );
// }