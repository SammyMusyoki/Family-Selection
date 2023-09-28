import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import ImagePreviewInput from '../components/Common/ImagePreviewInput'
import CategoryInput from '../components/CategoryComponent/CategoryInput'
import { useUserAuth } from '../Contexts/AuthContext'

const CreateProduct = () => {
    const navigate = useNavigate()
    const { setErrorMessage, setSuccessMessage } = useUserAuth();

    const initialProductData = {
      product_name: "",
      product_category: "",
      product_images: [],
      buying_price: 0,
      selling_price: 0,
      quantity: 1,
      description: "",
    };
    
    const [productData, setProductData] = useState(initialProductData)
    const [selectedCategory, setSelectedCategory] = useState("");

const createProduct = async () => {
  try {
    const formData = new FormData();
     formData.append("product_name", productData.product_name);
     formData.append("product_category", selectedCategory);
     formData.append("buying_price", productData.buying_price);
     formData.append("selling_price", productData.selling_price);
     formData.append("quantity", productData.quantity);
     formData.append("description", productData.description);

     productData.product_images.forEach((image, index) => {
       formData.append(`product_images[${index}]`, image);
     });
    const response = await fetch(
      "http://localhost:8000/products/create-product/",
      {
        method: "POST",
        body: formData
      }
    );

    if (response.ok) {
      const data = await response.json(); // Parse JSON once
      setProductData(initialProductData); // Reset the productData state
      setSuccessMessage(`${data.product_name} created successfully.`); // Use parsed data
    } else {
      const errorData = await response.json(); // Parse JSON once
      setErrorMessage(`Failed to create ${productData.product_name}`, errorData); // Use parsed data
    }
  } catch (e) {
    setErrorMessage(`Error creating ${productData.product_name}`);
  }

  setTimeout(() => {
    setSuccessMessage('')
    setErrorMessage('')
  }, 5000)
};

    const handleChange = (e) => {
      const {name, value } = e.target;
      setProductData((prevProductData) => ({
        ...prevProductData,
        [name]: value,
      }))
    }

    const handleImageChange = (e) => {
      const selectedImages = Array.from(e.target.files);
      setProductData({
        ...productData,
        product_images: selectedImages
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      createProduct()
    }
  return (
    <React.Fragment>
      <section className="w-full isolate relative font-Poppins bg-slate-100">
        <div className="mx-auto max-w-[1560px] px-6 py-6">
          {/* Go back redirect */}
          <div className="group flex items-center ">
            <span className="group-hover:flex transition-transform duration-500 ease-in-out">
              <BiArrowBack />
            </span>
            <h2
              onClick={() => navigate(-1)}
              className="cursor-pointer text-xs font-semibold p-1 px-2  rounded-md transition-all duration-500 ease-in-out"
            >
              {" "}
              Go back
            </h2>
          </div>

          {/* Create Product form */}
          <div className="mx-auto max-w-6xl shadow-lg mt-4 rounded-lg border-t bg-gray-50 p-16">
            <div>
              <h1 className="font-semibold text-4xl tracking-tight text-gray-800">
                Create a Product
              </h1>
            </div>

            <form action="" className="mt-24 space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="product_name"
                  className="text-sm ml-1 mb-2 font-semibold"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="product_name"
                  id="product-name"
                  value={productData.product_name}
                  onChange={handleChange}
                  className="border p-2.5 rounded-lg"
                />
              </div>
              {/* Product Category */}
              <CategoryInput
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />

              {/* Product Image */}
              <ImagePreviewInput
                handleImageChange={handleImageChange}
                productData={productData}
              />

              {/* Product Buying Price */}
              <div className="flex flex-col">
                <label
                  htmlFor="product_price"
                  className="text-sm ml-1 mb-2 font-semibold"
                >
                  Product Buying Price
                </label>
                <input
                  type="number"
                  name="buying_price"
                  min="0"
                  step="1"
                  id="productPrice"
                  value={productData.buying_price}
                  onChange={handleChange}
                  className="border p-2 rounded-lg"
                />
              </div>
              {/* Product Selling Price */}
              <div className="flex flex-col">
                <label
                  htmlFor="selling_price"
                  className="text-sm ml-1 mb-2 font-semibold"
                >
                  Product Selling Price
                </label>
                <input
                  type="number"
                  name="selling_price"
                  min="0"
                  step="1"
                  id="productSellingPrice"
                  value={productData.selling_price}
                  onChange={handleChange}
                  className="border p-2 rounded-lg"
                />
              </div>
              {/* Product Quantity */}
              <div className="flex flex-col">
                <label
                  htmlFor="product_quantity"
                  className="text-sm ml-1 mb-2 font-semibold"
                >
                  Product Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="0"
                  step="1"
                  id="productQuantity"
                  value={productData.quantity}
                  onChange={handleChange}
                  className="border p-2 rounded-lg"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col">
                <label
                  htmlFor="product_description"
                  className="text-sm ml-1 mb-2 font-semibold"
                >
                  Product Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  value={productData.description}
                  onChange={handleChange}
                  placeholder="Write Product Description Here...."
                  cols="30"
                  rows="10"
                  className="border rounded-lg p-3"
                ></textarea>
              </div>

              {/* Add Customer Button */}
              <div className="flex justify-end mt-14">
                <button 
                onClick={handleSubmit}
                className="py-2 border px-4 rounded absolute flex shadow bg-yellow-950 bg-opacity-70 hover:bg-opacity-80 text-gray-50">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default CreateProduct
