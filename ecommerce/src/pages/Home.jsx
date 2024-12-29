import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 5 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      document.body.appendChild(particle);

      // Animate particle
      const animation = particle.animate(
        [
          { transform: "translate(0, 0)" },
          {
            transform: `translate(${Math.random() * 200 - 100}px, ${
              Math.random() * 200 - 100
            }px)`,
          },
        ],
        {
          duration: Math.random() * 3000 + 2000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        }
      );

      // Remove particle after some time
      setTimeout(() => {
        particle.remove();
      }, 5000);
    };

    // Create particles periodically
    const intervalId = setInterval(createParticle, 1000);

    return () => {
      clearInterval(intervalId);
      // Clean up any existing particles
      document.querySelectorAll(".particle").forEach((p) => p.remove());
    };
  }, []);

  const categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
      icon: "device",
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
      icon: "shirt",
    },
    {
      name: "Sports",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      icon: "dumbbell",
    },
  ];

  return (
    <div className="text-center">
      <section className="wave-bg py-20 rounded-lg mb-12 relative">
        <div className="z-10 relative max-w-6xl mx-auto px-4">
          <h1 className="hero-title mb-6" style={{ color: "black" }}>
            Discover Exceptional Products for
            <span className="block mt-2">Your Lifestyle</span>
          </h1>
          <p className="hero-subtitle mb-12">
            Curated collections of premium products, designed to elevate your
            everyday experiences
          </p>
          <Link to="/products">
            <Button
              size="large"
              className="glow-effect transform hover:scale-105 transition-transform"
            >
              Explore Collection
            </Button>
          </Link>
        </div>
      </section>
      {/* <section className="wave-bg py-20 rounded-lg mb-12 relative">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6 text-gray-800 animate-fade-in">
            Welcome to EShop
          </h1>
          <p
            className="text-xl text-gray-600 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Discover amazing products at great prices
          </p>
          <Link to="/products">
            <Button
              size="large"
              className="glow-effect transform hover:scale-105 transition-transform"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </section> */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2 className="text-3xl font-bold mb-12" variants={fadeInUp}>
          Featured Categories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="group p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <motion.h3
                className="text-xl font-semibold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {category.name}
              </motion.h3>
              <motion.div
                className="mb-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="transform transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
              <Link to={`/products?category=${category.name}`}>
                <Button
                  variant="outline"
                  className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                >
                  Browse {category.name}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-16 bg-gradient-to-b from-blue-50 to-white rounded-lg mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2 className="text-3xl font-bold mb-8" variants={fadeInUp}>
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {[
            {
              icon: "🛍️",
              title: "Premium Selection",
              description: "Curated products from top brands",
            },
            {
              title: "Fast Delivery",
              description: "Get your products delivered within 24-48 hours",
              icon: "🚚",
            },
            {
              title: "Secure Payment",
              description: "Multiple secure payment options available",
              icon: "🔒",
            },
            {
              title: "24/7 Support",
              description: "Round the clock customer support",
              icon: "🎧",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-4xl mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <section className="py-16 wave-background">
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive offers and updates
          </p>
          <div className="flex gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button variant="primary" className="btn-hover-effect">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
