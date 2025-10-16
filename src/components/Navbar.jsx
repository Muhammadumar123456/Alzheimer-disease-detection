import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-700 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Alzheimer Dashboard</h1>
      <div>
        <Link to="/login" className="mr-4 hover:underline">Login</Link>
        <Link to="/signup" className="hover:underline">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
