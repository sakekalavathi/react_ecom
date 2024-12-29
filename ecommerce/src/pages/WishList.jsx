import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";
import { Card } from "../components/common/Card";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishListContext";

const WishlistItem = ({ item, onRemove, onAddToCart }) => {
  return (
    <Card className="flex flex-col sm:flex-row gap-4 p-4 animate-fade-in">
      <img
        src={item.images[0]}
        alt={item.name}
        className="w-full sm:w-48 h-48 object-cover rounded-lg"
      />
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-xl font-bold text-blue-600">${item.price}</p>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50"
          >
            <Trash2 size={20} />
          </button>
        </div>
        <div className="mt-4">
          <Button
            onClick={() => onAddToCart(item)}
            className="w-full sm:w-auto"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

const Wishlist = () => {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (items.length === 0) {
    return (
      <Card className="text-center py-12">
        <Heart size={48} className="mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
        <p className="text-gray-600 mb-8">
          Start adding items to your wishlist to save them for later!
        </p>
        <Link to="/products">
          <Button>Browse Products</Button>
        </Link>
      </Card>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Wishlist ({items.length})</h1>
        <Button
          variant="outline"
          onClick={clearWishlist}
          className="text-red-600 hover:text-red-800"
        >
          Clear Wishlist
        </Button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <WishlistItem
            key={item.id}
            item={item}
            onRemove={removeFromWishlist}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
