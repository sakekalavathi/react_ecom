import React, { useEffect, useState } from "react";
import { Button } from "../components/common/Button";
import { Loading } from "../components/common/Loading";
import SearchFilter from "../components/product/ProductFilters";
import { ProductList } from "../components/product/ProductList";
import { api } from "../services/api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await api.getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (priceRange.min !== "") {
      result = result.filter(
        (product) => product.price >= Number(priceRange.min)
      );
    }
    if (priceRange.max !== "") {
      result = result.filter(
        (product) => product.price <= Number(priceRange.max)
      );
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [products, searchQuery, selectedCategories, priceRange, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories("");
    setPriceRange({ min: "", max: "" });
    setSortBy("default");
  };

  return (
    <div className="animate-fade-in">
      <h1 className="page-title">Our Products</h1>

      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        sortBy={sortBy}
        clearFilters={clearFilters}
        setSortBy={setSortBy}
      />

      {loading ? (
        <Loading />
      ) : (
        <>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-xl text-gray-600">
                No products found matching your criteria.
              </p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600">
                Showing {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </p>
              <ProductList products={filteredProducts} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
