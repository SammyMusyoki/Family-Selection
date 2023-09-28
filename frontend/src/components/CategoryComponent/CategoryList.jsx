import React, { useState, useEffect } from 'react'
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineSaveAlt } from "react-icons/md";
import { useUserAuth } from '../../Contexts/AuthContext'

const CategoryList = ({ categories, setCategories }) => {
    const { setErrorMessage, setSuccessMessage } = useUserAuth()
    // const [updateCategoryId, setUpdateCategoryId] = useState(null)
    const [selectedCategoryId, setSelectedCategoryId] = useState(null)
    // const [newCategoryName, setNewCategoryName] = useState('')
    const [categoryName, setCategoryName] = useState('')

  useEffect(() => {
    if (selectedCategoryId !== null) {
      // Fetch the category data based on categoryId and populate the form
      fetch(
        `http://localhost:8000/category/update-category/${selectedCategoryId}/`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch category data");
          }
          return response.json();
        })
        .then((data) => {
          setCategoryName(data.category_name);
        })
        .catch((error) => {
          setErrorMessage("Error fetching category data");
        });
    }
  }, [selectedCategoryId]);

    const updateCategory = async ({ categoryId, updatedCategory }) => {
        if (selectedCategoryId === null) {
            setErrorMessage('Please select a category to update.');
            return;
        }
        // Send a PUT request to update the category
        try {
        const response = await fetch
          (`http://localhost:8000/category/update-category/${selectedCategoryId}/`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ category_name: updatedCategory})
          });

          const categoryData = await response.json()

          if (response.ok) {
            const updatedCategories = categories.map((category) => 
            category.id === categoryId ? { ...category, category_name: updatedCategory} : category
            ) 
            setCategories(updatedCategories)
            setSelectedCategoryId(null)
            setSuccessMessage(`${updatedCategory} updated successfully.`)
          } else {
            setErrorMessage('Failed to update category')
          }
        } catch (error) {
            setErrorMessage('Error updating category...')
        }

        setTimeout(() => {
            setErrorMessage('')
            setSuccessMessage('')
        }, 5000)
    };

    const handleUpdateCategory = (categoryId, category_name) => {
        setSelectedCategoryId(categoryId)
        setCategoryName(category_name)
    };

    const handleSaveClick = async (categoryId) => {
        updateCategory({categoryId, updatedCategory: categoryName})
        setSelectedCategoryId(null)
    };


    const deleteCategory = async (categoryId) => {
        try {
            const response = await fetch(`http://localhost:8000/category/delete-category/${categoryId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                const deletedCategory = categories.find((category) => category.id === categoryId);
                const filteredCategories = categories.filter(category => category.id !== categoryId)
                setCategories(filteredCategories)
                setSuccessMessage(`${deletedCategory.category_name} deleted successfully`)
            } else {
                setErrorMessage('Failed to delete category')
            }
        } catch (error) {
            setErrorMessage(`Error deleting category: ${error}`, )
        };

        setTimeout(() => {
            setSuccessMessage('')
            setErrorMessage('')
        }, 5000)
    }

    const handleDeleteClick = async (e, categoryId) => {
        e.preventDefault()
        deleteCategory(categoryId)
    }

    const sortedCategories = [...categories].sort((a, b) => a.category_name.localeCompare(b.category_name))
  return (
    <React.Fragment>
      <div className="p-2 pt-6">
        <div className="flex items-center justify-between px-2">
          <h1 className="text-gray-300 text-xl font-semibold mb-2">
            Available Categories
          </h1>
          <span className="text-gray-400 text-sm">{categories.length}</span>
        </div>
        <div className="border p-2 border-gray-100/10 rounded  h-[36.5rem] overflow-y-scroll scrollbar-hide">
          {categories.length === 0 ? (
            <p className="text-center text-gray-400">Add categories here...</p>
          ) : (
            <ul className="list-decimal list-inside space-y-1.5">
              {categories !== null &&
                sortedCategories.map((category) => (
                  <div
                    key={category.id}
                    className="border border-gray-100/10 p-2 rounded flex items-center justify-between"
                  >
                    {selectedCategoryId === category.id ? (
                      <>
                        <input
                          type="text"
                          name="category_name"
                          id="category-name"
                          value={categoryName}
                          onChange={(e) => setCategoryName(e.target.value)}
                          className="border w-full h-full rounded p-1.5 text-gray-700"
                        />
                        <button
                          onClick={() => handleSaveClick(category.id)}
                          className="border p-1 rounded absolute right-8 border-green-400 text-green-500"
                        >
                          <MdOutlineSaveAlt />
                        </button>
                      </>
                    ) : (
                      <>
                        <li
                          value={category.category_name}
                          className="py-1 text-sm text-gray-400"
                        >
                          {category.category_name}
                        </li>
                        <div className="flex gap-1.5">
                          <button
                            onClick={() =>
                              handleUpdateCategory(
                                category.id,
                                category.category_name
                              )
                            }
                            className="border p-1 rounded"
                          >
                            <PiPencilSimpleLineBold />
                          </button>
                          <button
                            onClick={(e) => handleDeleteClick(e, category.id)}
                            className="border p-1 rounded border-red-500/90 text-red-500"
                          >
                            <RiDeleteBin5Line />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
            </ul>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default CategoryList
