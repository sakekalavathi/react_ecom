// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/common/Button";
import { Card } from "../components/common/Card";
import { Loading } from "../components/common/Loading";
import ProductDetail from "../components/product/ProductDetail";
import { useCart } from "../context/CartContext";
import { api } from "../services/api";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await api.getProductById(id);
        setProduct(data);
        setError(null);
      } catch (error) {
        setError("Product not found");
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    // Show success message or feedback
    alert("Product added to cart!");
  };

  if (loading) return <Loading />;

  if (error) {
    return (
      <Card className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Error</h2>
        <p className="text-gray-600 mb-4">{error}</p>
        <Button onClick={() => navigate("/products")}>Back to Products</Button>
      </Card>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <Button variant="outline" onClick={() => navigate(-1)} className="mb-6">
        ← Back
      </Button>
      <ProductDetail product={product} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ProductDetails;
