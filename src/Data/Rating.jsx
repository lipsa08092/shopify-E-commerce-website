import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Rating({ star = 0, rating = 0 }) {
  const value = Math.min(Math.max(Number(star) || 0, 0), 5);

  const fullStars = Math.floor(value);
  const hasHalfStar = star % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

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
        ({Number(rating) || 0})
      </span>
    </div>
  );
}

export default Rating;
