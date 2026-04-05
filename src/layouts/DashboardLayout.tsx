import { useUIStore } from "@/store/zustand/ui.store";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  const {theme,setTheme}=useUIStore()
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow px-6 py-4">
        <h1 className="text-2xl  text-black font-bold">Dashboard</h1>
        <button className="text-lg text-white font-semibold bg-slate-900 p-2 rounded-full cursor-pointer" onClick={()=>setTheme(theme==="light"?"dark":"light")}>CURRENT THEME:{theme}</button>
      </header>

      <main className="p-6"><Outlet/></main>
    </div>
  );
};
