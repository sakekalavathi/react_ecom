import React from "react";
import { Link } from "react-router-dom";
// import { useWishlist } from "../../context/WishListContext";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import WishlistButton from "../common/WishListButton";

export const ProductCard = ({ product }) => {
  // const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  // const isWishlisted = isInWishlist(product.id);

  // const toggleWishlist = () => {
  //   if (isWishlisted) {
  //     removeFromWishlist(product.id);
  //   } else {
  //     addToWishlist(product);
  //   }
  // };
  return (
    <Card className="group relative flex flex-col h-full">
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg image-hover"
        />
        <div className="absolute top-2 right-2">
          <WishlistButton product={product} />
        </div>
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold">${product.price}</span>
          <Link to={`/product/${product.id}`}>
            {/* <button
              onClick={toggleWishlist}
              className={`absolute top-2 right-2 p-2 rounded-full 
          ${
            isWishlisted ? "text-red-600 bg-red-50" : "text-gray-400 bg-white"
          }`} */}
            {/* > */}
            {/* <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} /> */}
            {/* </button> */}
            <Button variant="primary" size="small">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
