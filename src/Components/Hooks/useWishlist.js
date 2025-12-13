import { useState, useEffect } from "react";

const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const toggleWishlist = (item) => {
    const exist = wishlist.find((a) => a.id === item.id);

    let updatedWishlist;

    if (exist) {
      updatedWishlist = wishlist.filter((a) => a.id !== item.id); //remove
    } else {
      updatedWishlist = [...wishlist, item]; //add
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return { wishlist, toggleWishlist };
};

export default useWishlist;
