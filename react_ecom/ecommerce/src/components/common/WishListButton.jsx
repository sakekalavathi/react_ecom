// src/components/common/WishlistButton.jsx
import { Heart } from "lucide-react";
import React from "react";
import { useWishlist } from "../../context/WishListContext";

const WishlistButton = ({ product, className = "" }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const toggleWishlist = (e) => {
    e.preventDefault(); // Prevent event bubbling if used in a card
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`p-2 rounded-full transition-colors duration-200 ${
        isWishlisted
          ? "bg-red-50 text-red-600 hover:bg-red-100"
          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
      } ${className}`}
      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart size={20} className={isWishlisted ? "fill-current" : ""} />
    </button>
  );
};

export default WishlistButton;
