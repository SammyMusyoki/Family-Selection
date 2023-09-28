import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useUserAuth } from "../Contexts/AuthContext";
import CategoryList from '../components/CategoryComponent/CategoryList';


const CreateCategory = ({isOpen, setIsOpen}) => {
    const { setErrorMessage, setSuccessMessage } = useUserAuth();
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState(null);

const getCategories = async () => {
  try {
    const response = await fetch("http://localhost:8000/categories/");
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();
    setCategories(data);
  } catch (error) {
    console.log("Error fetching categories: " + error);
  }
};

    useEffect(() => {
      getCategories();
    }, []);

    const categoryData = {
        category_name: category
    }

    const createCategory = async () => {
      try {
        const response = await fetch("http://localhost:8000/category/create-category/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoryData),
        });

        const newCategory = await response.json();

        if (response.status === 200 || response.status === 201) {
          setCategories((prevCategories) => [...prevCategories, newCategory])
          setCategory('')
          setSuccessMessage(`${categoryData.category_name} created successfully.`)
        } else {
          const errorData = await response.json();
          setErrorMessage('Failed to create category', errorData)
          // console.error(errorData)
        }
      } catch (e) {
        setErrorMessage("Error creating category");
      }

      setTimeout(() => {
        setErrorMessage("");
        setSuccessMessage("");
      }, 5000);
    };

 

    const handleSubmit = (e) => {
        e.preventDefault()
        createCategory()
    }
  return (
    <React.Fragment>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center cursor-pointer"
          >
            <motion.form
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "12.5deg" }}
              action=""
              method="post"
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-yellow-900/70 to-yellow-900/80 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden h-full"
            >
              <div className="relative z-10 space-y-6">
                <h1 className="font-semibold text-2xl">Create Category</h1>
                <div className="flex flex-col">
                  <label
                    htmlFor="category_name"
                    className="text-sm ml-1 mb-2 font-semibold"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="category_name"
                    id="category-name"
                    placeholder="eg. Soaps & Detergents"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2.5 rounded-lg text-gray-700"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="py-2 px-4 rounded absolute flex bg-yellow-950/50 hover:bg-yellow-950/60 text-gray-50"
                  >
                    Add Category
                  </button>
                </div>

                <div className="overflow-hidden">
                  <CategoryList
                    categories={categories}
                    setCategories={setCategories}
                  />
                </div>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
}

export default CreateCategory
