import React, { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(data);
  }, []);

  return (
    <div className=" p-6 bg-blue-950 min-h-full text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold">Categories Management</h1>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
