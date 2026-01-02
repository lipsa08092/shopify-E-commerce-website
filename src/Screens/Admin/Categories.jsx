import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdAutoDelete } from "react-icons/md";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    img: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(data);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewCategory({ ...newCategory, img: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSaveCategory = () => {
    const category = {
      id: Date.now(),
      img: newCategory.img,
      name: newCategory.name,
      description: newCategory.description,
    };
    const updateCategory = [...categories, category];
    setCategories(updateCategory);

    localStorage.setItem("categories", JSON.stringify(updateCategory));
    setNewCategory({
      name: "",
      description: "",
      img: "",
    });
    setIsOpen(false);
  };

  const handleDeleteCategory = (id) => {
    const updated = categories.filter((item) => item.id !== id);
    setCategories(updated);

    localStorage.setItem("categories", JSON.stringify(updated));
  };

  return (
    <div className=" p-6 bg-blue-950 min-h-full text-white">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-serif font-bold">Categories Management</h1>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex gap-2 bg-orange-600 text-white font-semibold py-2 px-3 rounded-xl"
        >
          <FiPlus className="mt-1" />
          Add New
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={item.id}
            className="relative flex items-center gap-4 p-4 bg-black/40 rounded-xl hover:scale-105 transition"
          >
            <span className="absolute top-3 right-3 bg-green-600 px-2 py-1 text-sm rounded-full">
              #{index + 1}
            </span>
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 object-contain"
            />
            <div>
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-sm text-gray-300 mt-1">{item.description}</p>
            </div>
            <button
              onClick={() => handleDeleteCategory(item.id)}
              className="absolute top-12 right-3 bg-red-600 text-sm px-2 py-2 rounded-full opacity-0 hover:opacity-100"
            >
              <MdAutoDelete/>
            </button>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
          <div className="bg-blue-900 p-6 rounded-xl w-[500px] md:w-[400px]">
            <h2 className="text-xl font-bold mb-4">Add Category</h2>

            <input
              type="text"
              placeholder="Category Name"
              className="w-full mb-3 p-2 rounded text-black placeholder:text-gray-600 bg-gray-300"
              value={newCategory.name}
              onChange={(e) =>
                setNewCategory({ ...newCategory, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              className="w-full mb-3 p-2 rounded text-black placeholder:text-gray-600 bg-gray-300"
              value={newCategory.description}
              onChange={(e) =>
                setNewCategory({ ...newCategory, description: e.target.value })
              }
            />

            <input
              type="file"
              accept="image/*"
              className="w-full mb-3 p-2 rounded bg-white"
              onChange={handleImageChange}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-500 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveCategory}
                className="px-4 py-2 bg-orange-600 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;
