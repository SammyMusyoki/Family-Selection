import React from 'react'

const TableHeader = () => {
    const Header = [
        'Customer Name',
        'Credited Goods',
        'Total Amount',
    ]
  return (
    <React.Fragment>
        <thead className='bg-gray-200/40'>
            <tr className=''>
                {
                    Header.map(( title ) => (
                        <td className='uppercase text-sm font-medium text-gray-500 p-2'>
                            { title }
                        </td>
                    ))
                }
            </tr>
        </thead>
    </React.Fragment>
  )
}

export default TableHeader
