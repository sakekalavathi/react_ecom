import { Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" className="h-8">
    <path d="M20 10 L40 10 L45 25 L15 25 Z" fill="#2563eb" />
    <path d="M15 30 L45 30 L48 40 L12 40 Z" fill="#1d4ed8" />
    <path d="M12 45 L48 45 L50 50 L10 50 Z" fill="#1e40af" />
    <text
      x="60"
      y="40"
      fill="#2563eb"
      fontFamily="Arial"
      fontWeight="bold"
      fontSize="28"
    >
      EShop
    </text>
  </svg>
);

export const Navbar = () => {
  const { cartItemsCount } = useCart();
  // const { wishlistItems } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Products", path: "/products" },
    { title: "Categories", path: "/categories" },
    { title: "About", path: "/about" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4" style={{ fontWeight: "bold" }}>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </form>
          {/* <Link to="/" className="text-xl font-bold text-blue-600">
            <p
              className="hero-subtitle"
              style={{ color: "#2563eb", fontWeight: "bold" }}
            >
              EShop
            </p>
          </Link> */}
          <div
            className="flex items-center gap-6"
            // style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
          >
            {/* <Link to="/products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link> */}
            <Link
              to="/wishlist"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              Wishlist
              {/* <Heart className="w-5 h-5 mr-1" /> */}
              {/* {wishlistItems > 0 && (
                <span className="ml-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {wishlistItems}
                </span>
              )} */}
            </Link>
            <Link
              to="/cart"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              Cart
              {cartItemsCount > 0 && (
                <span className="ml-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
