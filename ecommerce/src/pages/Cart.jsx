import { Minus, Plus, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";
import { Card } from "../components/common/Card";
import { useCart } from "../context/CartContext";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <Card className="flex gap-4 p-4">
      <img
        src={item.images[0]}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <span className="font-semibold">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600">${item.price} each</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                updateQuantity(item.id, Math.max(1, item.quantity - 1))
              }
              className="p-1 rounded hover:bg-gray-100"
            >
              <Minus size={18} />
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1 rounded hover:bg-gray-100"
            >
              <Plus size={18} />
            </button>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </Card>
  );
};

const Cart = () => {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <Card className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link to="/products">
          <Button>Start Shopping</Button>
        </Link>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-8">
          Shopping Cart ({items.length} items)
        </h1>
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      </div>

      <div className="lg:col-span-1">
        <Card className="sticky top-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <Link to="/checkout">
            <Button className="w-full">Proceed to Checkout</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
