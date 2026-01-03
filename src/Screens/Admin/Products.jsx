import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";

function Products() {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    colors: ["#ef4444", "#2563eb"],
    oldPrice: "",
    price: "",
    rating: "",
    star: "",
    title: "",
    category: "",
    quantity: "",
    status: "Popular",
    img: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(data);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);

  setNewProduct({ ...newProduct, img: imageURL });
  };

  const handleSaveProduct = () => {
    const product = {
      id: Date.now(),
      img: newProduct.img,
      title: newProduct.title,
      category: newProduct.category,
      quantity: Number(newProduct.quantity),
      status: newProduct.status,
      colors: ["#ef4444", "#2563eb"],
      oldPrice: newProduct.oldPrice,
      price: newProduct.price,
      rating: newProduct.rating,
      star: newProduct.star,
    };
    const updateProducts = [...products, product];
    setProducts(updateProducts);

    localStorage.setItem("products", JSON.stringify(updateProducts));
    setNewProduct({
      colors: ["#ef4444", "#2563eb"],
      oldPrice: "",
      price: "",
      rating: "",
      star: "",
      title: "",
      category: "",
      quantity: "",
      status: "Popular",
      img: "",
    });
    setIsOpen(false);
  };

  return (
    <div className="p-4 md:p-6 min-h-screen bg-blue-950 text-white">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-serif font-bold">Products Management</h1>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex gap-2 bg-orange-600 text-white font-semibold py-2 px-3 rounded-xl"
        >
          <FiPlus className="mt-1" />
          Add New
        </button>
      </div>

      {/*desktop card*/}
      <div className="hidden md:block">
        <div className="grid grid-cols-6 gap-4 px-4 py-3 text-center text-sm font-semibold bg-white/20 rounded-t-lg">
          <div>SL</div>
          <div>PRODUCT</div>
          <div>IMAGE</div>
          <div>CATEGORY</div>
          <div>QUANTITY</div>
          <div>STATUS</div>
        </div>

        {products.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-6 gap-4 px-4 py-3 items-center text-center border-b border-white/10 bg-black/40 hover:bg-white/5"
          >
            <div>{index + 1}</div>
            <div className="font-medium">{item.title}</div>

            <div className="flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            <div>{item.category}</div>
            <div>{item.quantity}</div>

            <div
              className={`py-1 rounded-full text-xs font-semibold
                ${
                  item.status === "Popular"
                    ? "bg-purple-500/20 text-purple-400"
                    : "bg-green-500/20 text-green-400"
                }`}
            >
              {item.status}
            </div>
          </div>
        ))}
      </div>

      {/*mobile card*/}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {products.map((item, index) => (
          <div
            key={item.id}
            className="flex bg-gray-700/30 border border-white/10 rounded-xl p-4 gap-10"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-14 h-14 object-cover"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-300">Category: {item.category}</p>
              <p className="text-sm text-gray-300">Quantity: {item.quantity}</p>

              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    item.status === "Popular"
                      ? "bg-purple-500/20 text-purple-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50 overflow-y-auto py-10">
          <div className="bg-blue-900 p-6 rounded-xl w-[600px] md:w-[500px] h-[600px]">
            <h2 className="text-xl font-bold mb-4">Add Product</h2>

            <input
              type="text"
              placeholder="Product Name"
              className="w-full mb-3 p-2 rounded text-black placeholder:text-gray-600 bg-gray-300"
              value={newProduct.title}
              onChange={(e) =>
                setNewProduct({ ...newProduct, title: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Category"
              className="w-full mb-3 p-2 rounded text-black placeholder:text-gray-600 bg-gray-300 "
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Quantity"
              className="w-full mb-3 p-2 rounded text-black placeholder:text-gray-600 bg-gray-300"
              value={newProduct.quantity}
              onChange={(e) =>
                setNewProduct({ ...newProduct, quantity: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Price"
              className="w-full mb-3 p-2 rounded text-black placeholder:text-gray-600 bg-gray-300"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="OldPrice"
              className="w-full mb-3 p-2 rounded text-black placeholder:text-gray-600 bg-gray-300"
              value={newProduct.oldPrice}
              onChange={(e) =>
                setNewProduct({ ...newProduct, oldPrice: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Rating"
              className="w-full mb-3 p-2 rounded text-black placeholder:text-gray-600 bg-gray-300"
              value={newProduct.rating}
              onChange={(e) =>
                setNewProduct({ ...newProduct, rating: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Star"
              className="w-full mb-3 p-2 rounded text-black placeholder:text-gray-600 bg-gray-300"
              value={newProduct.star}
              onChange={(e) =>
                setNewProduct({ ...newProduct, star: e.target.value })
              }
            />

            <select
              className="w-full mb-4 p-2 rounded text-black bg-gray-300"
              value={newProduct.status}
              onChange={(e) =>
                setNewProduct({ ...newProduct, status: e.target.value })
              }
            >
              <option>Popular</option>
              <option>Trending</option>
            </select>

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
                onClick={handleSaveProduct}
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
export default Products;
