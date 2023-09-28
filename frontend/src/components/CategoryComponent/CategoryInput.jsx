import React, { useEffect, useState } from 'react'

const CategoryInput = ({setSelectedCategory, selectedCategory}) => {
    const [categories, setCategories] = useState([])


    const getCategories = async () => {
        try {
            const response = await fetch("http://localhost:8000/categories/");
            if (!response.ok) {
                throw new Error("Failed to fetch categories")
            }

            const data = await response.json()
            setCategories(data)
        } catch (error) {
            console.log('Error fetching categories: ' + error)
        }
        
    }

    useEffect(() => {
        getCategories()
    },[])

    const handleCategoryChange = (e) => {
      const selectedCategoryId = e.target.value
      setSelectedCategory(selectedCategoryId)
    }
  return (
    <React.Fragment>
      <div className="flex flex-col ">
        <label
          htmlFor="product_category"
          className="text-sm ml-1 mb-2 font-semibold"
        >
          Product Category
        </label>
        <select
          name="product_category"
          id="productCategory"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border p-2.5 rounded-lg pr-8"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
                  {category.category_name}
              </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
}

export default CategoryInput
