import React from "react";
import { Loading } from "../common/Loading";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ products, loading }) => {
  if (loading) return <Loading />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
