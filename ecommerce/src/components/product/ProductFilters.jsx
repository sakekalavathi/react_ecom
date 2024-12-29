import { Search, SlidersHorizontal } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";

const PriceRangeFilter = ({ priceRange, setPriceRange }) => {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Price Range</h3>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          placeholder="Min"
          value={priceRange.min}
          onChange={(e) =>
            setPriceRange((prev) => ({ ...prev, min: e.target.value }))
          }
          className="w-24"
        />
        <span>-</span>
        <Input
          type="number"
          placeholder="Max"
          value={priceRange.max}
          onChange={(e) =>
            setPriceRange((prev) => ({ ...prev, max: e.target.value }))
          }
          className="w-24"
        />
      </div>
    </div>
  );
};

const SearchFilter = ({
  searchQuery,
  clearFilters,
  setSearchQuery,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["Electronics", "Fashion", "Sports", "Home", "Books"];

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" },
  ];

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      }
      return [...prev, category];
    });
  };

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>

      {/* Filter Toggle */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <SlidersHorizontal size={20} />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        <Button onClick={clearFilters}>Clear Filters</Button>
      </div>
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-white rounded-lg shadow-sm">
          <div className="space-y-2">
            <h3 className="font-semibold">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
          <PriceRangeFilter
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
          <div className="space-y-2">
            <h3 className="font-semibold">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
