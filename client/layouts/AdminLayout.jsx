import { Outlet } from "react-router-dom";
import AdminNavbar from "../src/components/admin/AdminNavbar";
import AdminFooter from "../src/components/admin/AdminFooter";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <AdminNavbar/>

      <div className="flex items-center justify-center px-3 md:px-0">
        <div className="w-full max-w-6xl p-4 md:p-8 rounded-4xl h-full">
          <Outlet />
        </div>  
      </div>

      <AdminFooter/>
    </div>
  );
};

export default AdminLayout