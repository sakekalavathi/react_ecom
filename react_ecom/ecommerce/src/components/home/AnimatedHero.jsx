// src/components/home/AnimatedHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";

const AnimatedHero = () => {
  return (
    <section className="hero-section relative overflow-hidden rounded-lg mb-12">
      <div className="animated-bg"></div>
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="relative z-10 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6 text-white hero-title">
          Welcome to EShop
        </h1>
        <p className="text-xl text-gray-100 mb-8 hero-subtitle">
          Discover amazing products at great prices
        </p>
        <Link to="/products">
          <Button size="large" className="hero-button">
            Shop Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AnimatedHero;
