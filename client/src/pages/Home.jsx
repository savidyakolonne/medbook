import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-2xl bg-white p-10 shadow">
        <h1 className="text-4xl font-bold text-slate-800">
          Welcome to MedBook
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          A simple digital health appointment system where patients can browse
          doctors, book appointments, and manage their healthcare bookings.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/doctors"
            className="rounded bg-cyan-600 px-5 py-3 text-white hover:bg-cyan-700"
          >
            Browse Doctors
          </Link>
          <Link
            to="/register"
            className="rounded border border-slate-300 px-5 py-3 hover:bg-slate-100"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;