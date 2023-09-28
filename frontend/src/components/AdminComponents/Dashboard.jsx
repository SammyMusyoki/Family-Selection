import React from 'react'
import { BiSolidBadgeDollar } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { FcDebt } from "react-icons/fc";
import { FaUserPlus } from "react-icons/fa";
import SalesChart from './SalesChart';
import Calender from './Calender/Calender';
import UsersBoard from './UserMiniBoard/UsersBoard';

const Dashboard = () => {
  return (
    <React.Fragment>
      <main className=" w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
          <div className="border p-2 rounded-lg flex items-center justify-between bg-gray-50 shadow-md">
            <div className="">
              <span className="font-semibold text-xs text-gray-500">
                Today's Credit
              </span>
              <p className="font-bold">
                Ksh 10,000{" "}
                <small className="font-semibold text-green-400">+20%</small>
              </p>
            </div>
            <div className="border p-2.5 mr-1 rounded-lg shadow-lg bg-yellow-900/50">
              <BiSolidBadgeDollar size={20} />
            </div>
          </div>

          <div className="border p-2 rounded-lg flex items-center justify-between bg-gray-50 shadow-md">
            <div className="">
              <span className="font-semibold text-xs text-gray-500">
                Today's Credited Customers
              </span>
              <p className="font-bold">
                5 <small className="font-semibold text-green-400">+2%</small>
              </p>
            </div>
            <div className="border p-2.5 mr-1 rounded-lg shadow-lg bg-yellow-900/50">
              <FcDebt size={20} />
            </div>
          </div>

          <div className="border p-2 rounded-lg flex items-center justify-between bg-gray-50 shadow-md">
            <div className="">
              <span className="font-semibold text-xs text-gray-500">
                Newly Credited Customers
              </span>
              <p className="font-bold">
                2 <small className="font-semibold text-green-400">+5%</small>
              </p>
            </div>
            <div className="border p-2.5 mr-1 rounded-lg shadow-lg bg-yellow-900/50">
              <FaUserPlus size={20} />
            </div>
          </div>

          <div className="border p-2 rounded-lg flex items-center justify-between bg-gray-50 shadow-md">
            <div className="">
              <span className="font-semibold text-xs text-gray-500">
                Credit Sales
              </span>
              <p className="font-bold">
                Ksh 10,000{" "}
                <small className="font-semibold text-red-400">-20%</small>
              </p>
            </div>
            <div className="border p-2.5 mr-1 rounded-lg shadow-lg bg-yellow-900/50">
              <TiShoppingCart size={20} />
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <SalesChart />
          <SalesChart />
        </div>

        {/* Calender */}
        <div className="mt-6 flex gap-4 flex-col md:flex-row">
          <UsersBoard />
          <Calender />
          {/* <Calender />
          <Calender /> */}
        </div>
      </main>
    </React.Fragment>
  );
}

export default Dashboard
