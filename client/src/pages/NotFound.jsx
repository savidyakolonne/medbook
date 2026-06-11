import { Link } from "react-router-dom";
import logo from "/logo.png"

const NotFound = () => {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold">404</h2>
      <p className="mt-2 text-slate-600">Page not found</p>
      <div className="flex justify-center items-center">
        <img src={logo} alt="MedBook logo"  width={1000} />
      </div>
      <div>
        <h1 className=" text-blue-700">
          <Link to="/">Return to Home</Link>
        </h1>
      </div>
    </div>
  );
};

export default NotFound;