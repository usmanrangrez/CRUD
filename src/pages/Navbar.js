import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-green-600 flex items-center px-10 py-2 justify-between">
      <Link to="/" className="text-3xl font-semibold font-sans text-cyan-200">
        CRUD
      </Link>
      <Link
        to="add-user"
        className="bg-cyan-100 p-2 rounded-full font-medium hover:bg-transparent hover:border-2 hover:border-white hover:border-solid"
      >
        Add Users
      </Link>
    </div>
  );
};

export default Navbar;
