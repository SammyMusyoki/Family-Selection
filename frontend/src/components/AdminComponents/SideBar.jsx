import React, { useState } from 'react'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { FaThList, FaMoneyBill } from "react-icons/fa";
import { BiMessageDetail, BiUserPlus } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";
import { useUserAuth } from '../../Contexts/AuthContext';
import CreateCategory from '../../Pages/CreateCategory';

const SideBar = () => {
  const { logoutUser } = useUserAuth()
  const [isOpen, setIsOpen] = useState(false)

  const navigateCustomerRegistration = () => {
    window.location.href = 'customer-registration/'
  }
  const navigateCreateProduct = () => {
    window.location.href = 'create-product/'
  }
  const navigateCreateCategory = () => {
    window.location.href = 'create-category/'
  }
  return (
    <React.Fragment>
      <aside className="relative w-56 p-2 rounded-lg shadow-md h-screen border-t flex-shrink-0 bg-gray-50">
        <div className="flex flex-col justify-between">
          {/* top */}
          <div className="">
            <div className="mb-4 border-b py-4 flex ">
              <h1 className="font-semibold text-sm text-gray-600 flex-shrink-0">
                Family Admin Dashboard
              </h1>
            </div>
            <div>
              <div className="flex p-2 items-center gap-2">
                <span className="p-1.5 rounded-lg border shadow-md bg-yellow-900/50">
                  <MdOutlineSpaceDashboard className="text-gray-800" />
                </span>
                <h3 className="font-semibold text-sm">Dashboard</h3>
              </div>
              <div className="flex p-2 items-center gap-2">
                <span className="p-1.5 rounded-lg border shadow-md bg-yellow-900/50">
                  <FaThList className="text-gray-800" />
                </span>
                <h3 className="font-semibold text-sm">Tables</h3>
              </div>
              <div className="flex p-2 items-center gap-2">
                <span className="p-1.5 rounded-lg border shadow-md bg-yellow-900/50">
                  <FaMoneyBill className="text-gray-800" />
                </span>
                <h3 className="font-semibold text-sm">Billing</h3>
              </div>
              <div className="flex p-2 items-center gap-2">
                <span className="p-1.5 rounded-lg border shadow-md bg-yellow-900/50">
                  <BiMessageDetail className="text-gray-800" />
                </span>
                <h3 className="font-semibold text-sm">Messages</h3>
              </div>

              {/* Accounts Section */}
              <div className="my-3 space-y-2">
                <h1 className="font-semibold px-3 text-xs text-gray-400 uppercase">
                  Accounts
                </h1>
                <div className='space-y-2'>
                  {/* Create Customer Button */}
                  <div
                    onClick={navigateCustomerRegistration}
                    className="flex p-2 items-center gap-2 cursor-pointer border rounded-md hover:bg-gray-100"
                  >
                    <span className="p-1.5 rounded-lg border shadow-md bg-yellow-900/50">
                      <BiUserPlus className="text-gray-800" />
                    </span>
                    <h3 className="font-semibold text-sm">Create Customer</h3>
                  </div>
                  
                  {/* Create Product Button */}
                  <div
                    onClick={navigateCreateProduct}
                    className="flex p-2 items-center gap-2 cursor-pointer border rounded-md hover:bg-gray-100"
                  >
                    <span className="p-1.5 rounded-lg border shadow-md bg-yellow-900/50">
                      <MdOutlineSpaceDashboard className="text-gray-800" />
                    </span>
                    <h3 className="font-semibold text-sm">Create Product</h3>
                  </div>

                  {/* Create Category Button */}
                  <div
                    onClick={() => setIsOpen(true)}
                    className="flex p-2 items-center gap-2 cursor-pointer border rounded-md hover:bg-gray-100"
                  >
                    <span className="p-1.5 rounded-lg border shadow-md bg-yellow-900/50">
                      <BiUserPlus className="text-gray-800" />
                    </span>
                    <h3 className="font-semibold text-sm">Create Categories</h3>
                  </div>
                  <CreateCategory isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="absolute bottom-0 w-full left-0 pl-2 py-4 border-t">
            <div
              onClick={logoutUser}
              className="flex p-2 items-center gap-2 cursor-pointer "
            >
              <span className="p-1.5 rounded-lg border shadow-md bg-red-400 bg-opacity-90">
                <VscSignOut className="text-gray-950" />
              </span>
              <h3 className="font-semibold text-sm">Logout</h3>
            </div>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
}

export default SideBar
