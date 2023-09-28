import React from 'react'

const UserTable = () => {
    const CustomerData = [
      {
        id: 1,
        name: "Sammy Musyoki",
        credit_product_image: [
          {
            image1:
              "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            image2:
              "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            image3:
              "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
        ],
        total_amount: 2345,
      },
      {
        id: 2,
        name: "Sammy Musyoki",
        credit_product_image: [
          {
            image1:
              "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            image2:
              "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            image3:
              "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
        ],
        total_amount: 2345,
      },
      {
        id: 3,
        name: "Sammy Musyoki",
        credit_product_image: [
          {
            image1:
              "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            image2:
              "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            image3:
              "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
        ],
        total_amount: 2345,
      },
      {
        id: 4,
        name: "Sammy Musyoki",
        credit_product_image: [
          {
            image1:
              "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            image2:
              "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            image3:
              "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
        ],
        total_amount: 2345,
      },
      {
        id: 5,
        name: "Sammy Musyoki",
        credit_product_image: [
          {
            image1:
              "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            image2:
              "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            image3:
              "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
        ],
        total_amount: 2345,
      },
      {
        id: 6,
        name: "Sammy Musyoki",
        credit_product_image: [
          {
            image1:
              "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            image2:
              "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            image3:
              "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
        ],
        total_amount: 2345,
      },
    ];
  return (
    <React.Fragment>
      <tbody>
            {
                CustomerData.map((data) => {
                    return (
                      <tr key={data.id} className="">
                        <td className="py-2 pl-2 font-medium">{data.name}</td>
                        <td className="py-2 flex items-center">
                          {data.credit_product_image.map((image) => (
                            <div className="flex">
                              <img
                                className="h-8 w-8 rounded-full z-10 object-center object-cover  border border-black"
                                src={image.image1}
                                alt=""
                              />
                              <img
                                className="h-8 w-8 rounded-full z-20 object-center object-cover absolute ml-6 border border-black"
                                src={image.image2}
                                alt=""
                              />
                              <img
                                className="h-8 w-8 rounded-full z-30 object-center object-cover absolute ml-12 border border-black"
                                src={image.image3}
                                alt=""
                              />
                            </div>
                          ))}
                          <span className='left-14 relative z-40 font-semibold text-xs'>+ 4</span>
                        </td>
                        <td className="py-2 font-semibold text-sm">
                          Ksh {data.total_amount}.00
                        </td>
                      </tr>
                    );
})
            }
      </tbody>
    </React.Fragment>
  )
}

export default UserTable
