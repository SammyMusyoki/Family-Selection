import React from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';

const Navbar = () => {
  return (
    <React.Fragment>
      {/* Dashboard Nav */}
      <nav className="flex items-center justify-between ">
        <div>
          <div className="flex text-xs  gap-2 text-gray-500 items-center">
            <span className="font-bold">
              <HiHome className="" />
            </span>
            {"/"}
            <h1 className="font-semibold">Dashboard</h1>
          </div>
          <span className="font-bold text-sm text-gray-500">Dashboard</span>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="search here..."
              className="py-1 px-4 text-sm placeholder:text-xs border rounded-full"
            />
            <button className="border p-1.5 rounded-full shadow-md">
              <BiSearchAlt />
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar
