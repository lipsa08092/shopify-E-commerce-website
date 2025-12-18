import { useNavigate, useParams } from "react-router-dom";
import Rating from "../../Data/Rating";
import useCart from "../../Components/Hooks/useCart";
import { useState, useEffect } from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import useWishlist from "../../Components/Hooks/useWishlist";
import { IoEye } from "react-icons/io5";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { products } from "../../Data/Products";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const { wishlist, toggleWishlist } = useWishlist();
  const [active, setActive] = useState("M");
  const [selectedColor, setSelectedColor] = useState(null);
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center py-20">Product not found</p>;
  }
 const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  


  return (
    <div className="py-20 mx-4 sm:mx-10 lg:mx-20">
      <h1 className="text-gray-500 text-sm mb-20">
        Account / Product /
        <span className="text-gray-900 font-medium"> {product.title}</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* image */}
        <div className="flex-1 bg-gray-100 rounded-lg p-8 flex items-center justify-center">
          <img
            src={product.img}
            alt={product.title}
            className="h-80 object-contain"
            
          />
        </div>
        {/* Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>

          <div className="flex items-center gap-3 mt-1">
            <Rating star={product.star} rating={product.rating} />
            <span className="text-green-500 text-sm font-medium mt-2">
              In Stock
            </span>
          </div>

          <p className="text-2xl font-light mt-4">${product.price}</p>

          <p className="mt-4 text-gray-900">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal.
          </p>

          {/* colors */}
          {product.colors?.length > 0 && (
            <div className="flex items-center gap-4 mt-6">
              <p className="font-medium">Colours:</p>

              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full cursor-pointer border ${selectedColor === color ? "ring-2 ring-black" : ""}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          <div className=" flex items-center gap-6 mt-6">
            <p className="font-medium mb-2">Size:</p>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setActive(size)}
                  className={`px-3 py-1 border border-gray-500 rounded ${
                    size === active
                      ? "bg-red-500 text-white border-red-500"
                      : "hover:border-red-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* quantity */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-gray-800">
              <button
                className="px-4 py-2 hover:bg-red-500 border-r border-gray-800 hover:text-white "
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              >
                <FiMinus />
              </button>
              <span className="px-4">{qty}</span>
              <button
                className="px-4 py-2 hover:bg-red-500 border-l border-gray-800 hover:text-white"
                onClick={() => setQty(qty + 1)}
              >
                <FiPlus />
              </button>
            </div>

            <button
              onClick={() => {
                addToCart({
                  ...product,
                  quantity: qty,
                  selectedColor: selectedColor,
                  selectedSize: active,
                });
                navigate("/cart");
              }}
              className="bg-red-500 text-white px-8 py-2 "
            >
              Buy Now
            </button>

            {/* wishlist */}
            <button
              onClick={() => toggleWishlist(product)}
              className="border p-2 rounded"
            >
              {wishlist.find((p) => p.id === product.id) ? (
                <IoMdHeart className="text-red-500 text-xl" />
              ) : (
                <IoMdHeartEmpty className="text-xl" />
              )}
            </button>
          </div>

          {/* delivery */}
          <div className="mt-8 border border-gray-600 rounded-lg p-4 space-y-4">
            <div className="flex gap-6 border-b border-gray-600 pb-6">
              <TbTruckDelivery size={28} className="mt-2" />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-sm text-gray-500">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <HiOutlineArrowPathRoundedSquare size={28} className="mt-2" />
              <div>
                <p className="font-medium">Return Delivery</p>
                <p className="text-sm text-gray-500">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* related items */}
      <div className="mt-14">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-3 items-center">
            <div className="w-4 h-10 rounded-md bg-red-600"></div>
            <p className="text-red-600 font-bold">Related item</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <div key={item.id} className="w-[full]">
              <div className="p-3 rounded-lg relative  hover:shadow-md transition">
                <div className="relative bg-gray-100 pt-5 pb-3 flex items-center justify-center">
                  <img
                    src={item.img}
                    className="w-full h-40 sm:h-44 object-contain"
                    alt=""
                  />

                  <button
                    onClick={() => addToCart(item)}
                    className="absolute bottom-0 w-full opacity-0 hover:opacity-100 bg-black text-white font-semibold p-2 transition-all duration-300"
                  >
                    Add To Cart
                  </button>
                </div>
                <IoEye className="absolute top-6 right-6 text-2xl cursor-pointer bg-white rounded-full hover:text-red-500" />

                <p className="mt-3 text-sm font-medium">{item.title}</p>
                <Rating star={item.star} rating={item.rating} />

                <div className="flex gap-3 mt-2">
                  <p className="text-red-600 font-bold">${item.price}</p>
                  <p className="text-gray-500 line-through">
                    {item.oldPrice && `$${item.oldPrice}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
