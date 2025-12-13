import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Rating({ star, rating }) {
  const fullStars = Math.floor(star);
  const hasHalfStar = star % 1 !== 0;
  const emptyStars = 5 - Math.ceil(star);

  return (
    <div className="flex items-center gap-1 mt-1">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />
      ))}

      {hasHalfStar && (
        <FaStarHalfAlt className="text-yellow-400 text-sm" />
      )}

      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-yellow-400 text-sm" />
      ))}

      <span className="text-gray-500 text-xs ml-1">
        ({rating})
      </span>
    </div>
  );
}

export default Rating;
