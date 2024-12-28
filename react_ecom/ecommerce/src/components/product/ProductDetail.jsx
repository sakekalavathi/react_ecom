// src/components/product/ProductDetail.jsx
import React, { useState } from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import ProductGallery from "./ProductGallery";

const ProductDetail = ({ product, onAddToCart }) => {
  console.log(product);
  const [quantity, setQuantity] = useState(1);

  // // Mock multiple images for the product
  // const productImages = [
  //   product.image,
  //   "/api/placeholder/800/600?text=View 2",
  //   "/api/placeholder/800/600?text=View 3",
  //   "/api/placeholder/800/600?text=View 4",
  // ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Gallery */}
      <div className="md:sticky md:top-4">
        <ProductGallery images={product?.images} />
      </div>

      {/* Product Information */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-600">{product.description}</p>
        </div>

        {/* Product Features or Specifications */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Specifications</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Brand: {product.brand || "Generic"}</li>
            <li>• Category: {product.category}</li>
            <li>• In Stock: Yes</li>
            <li>• Shipping: Free</li>
          </ul>
        </div>

        {/* Add to Cart Section */}
        <div className="border-t pt-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-32">
              <Input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                // label="Quantity"
              />
            </div>
            <Button
              onClick={() => onAddToCart(product, quantity)}
              // className="flex-grow"
            >
              Add to Cart
            </Button>
          </div>

          {/* Additional Info */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>✓ Free Shipping</span>
            <span>•</span>
            <span>✓ 30-Day Returns</span>
            <span>•</span>
            <span>✓ Secure Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
