import { Outlet } from "react-router-dom";
import AdminNavbar from "../src/components/admin/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <AdminNavbar/>

      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout