import React from 'react'
import TableHeader from './TableHeader';
import UserTable from './UserTable';

const UsersBoard = () => {
  return (
    <React.Fragment>
      <div className='w-full border rounded-lg p-4 shadow'>
        <div className='flex items-center justify-between py-2'>
          <h1 className='font-semibold tracking-wide'>Top Credited Customers</h1>
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold text-yellow-700 bg-yellow-900/20  p-1 px-2 rounded cursor-pointer">
              Today
            </p>
            <p className="text-xs font-semibold  p-1 px-2 rounded border cursor-pointer">
              Week
            </p>
            <p className="text-xs font-semibold p-1 px-2 rounded border cursor-pointer">
              Month
            </p>
          </div>
        </div>

        {/* Table Header */}
        <table className='w-full border rounded-lg'>
            <TableHeader />
            <UserTable />
        </table>
      </div>
    </React.Fragment>
  );
}

export default UsersBoard
