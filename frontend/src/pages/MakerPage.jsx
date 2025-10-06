import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import MakerSidebar from "../components/MakerSidebar";

// A helper to get the page title from the path
const getTitleFromPath = (path) => {
  const pathMap = {
    "/maker/dashboard": "Dashboard",
    "/maker/create": "Create New Question",
    "/maker/drafts": "Draft Questions",
    "/maker/submitted": "Submitted Questions",
    "/maker/availabe-pdfs": "Available Question Papers",
    "/maker/claimed-pdfs": "Claimed Question Papers",
  };

  // Handle dynamic routes like /editrejected/:id
  if (path.startsWith("/maker/editrejected/")) return "Edit Rejected Question";
  if (path.startsWith("/maker/create/")) return "Edit Question";

  return pathMap[path] || "Maker Portal";
};

const MainContentHeader = ({ toggleSidebar }) => {
  const location = useLocation();
  const title = getTitleFromPath(location.pathname);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="px-8 h-20 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 font-sans">{title}</h2>
        {/* Future actions can go here */}
      </div>
    </header>
  );
};

export default function MakerPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <MakerSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <MainContentHeader />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}