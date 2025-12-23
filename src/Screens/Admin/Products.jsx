import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(data);
  }, []);

  return (
    <div className="p-4 md:p-6 min-h-screen bg-blue-950 text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Product Managements
      </h1>
      
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
    </div>
  );
}
export default Products;
