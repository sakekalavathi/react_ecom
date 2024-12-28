// src/services/api.js
const mockProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 249.99,
    description:
      "High-end wireless headphones with noise cancellation and premium sound quality. Features include Bluetooth 5.0, 30-hour battery life, and comfortable over-ear design.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3",
    ],
    brand: "SoundMax",
    category: "Electronics",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Built-in microphone",
    ],
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 299.99,
    description:
      "Advanced smartwatch with comprehensive health tracking, GPS, and cellular connectivity. Perfect for fitness enthusiasts and tech-savvy users.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d",
      "https://images.unsplash.com/photo-1617043786394-ae6c2096717e",
    ],
    brand: "TechFit",
    category: "Electronics",
    features: [
      "GPS tracking",
      "Heart rate monitoring",
      "Water resistant 50m",
      "5-day battery life",
    ],
  },
  {
    id: 3,
    name: "4K Ultra HD Camera",
    price: 799.99,
    description:
      "Professional-grade digital camera with 4K video capability, advanced autofocus, and excellent low-light performance.",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
      "https://images.unsplash.com/photo-1617005082133-505405d9e3c6",
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9",
    ],
    brand: "PixelPro",
    category: "Electronics",
    features: [
      "4K Video",
      "20MP sensor",
      "Weather-sealed body",
      "Dual memory card slots",
    ],
  },
  {
    id: 4,
    name: "Classic Leather Jacket",
    price: 299.99,
    description:
      "Premium leather jacket with a timeless design. Features high-quality genuine leather, comfortable fit, and durable construction perfect for any casual or semi-formal occasion.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504",
      "https://images.unsplash.com/photo-1594938291221-94f18cbb5660",
      "https://images.unsplash.com/photo-1617952236317-0bd127407984",
    ],
    brand: "UrbanStyle",
    category: "Fashion",
    features: [
      "Genuine leather",
      "Quilted lining",
      "Multiple pockets",
      "Heavy-duty zippers",
    ],
  },
  {
    id: 5,
    name: "Smart Home Speaker",
    price: 179.99,
    description:
      "Voice-controlled smart speaker with premium audio quality and home automation capabilities. Integrates with popular smart home devices.",
    images: [
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    ],
    brand: "HomeTech",
    category: "Electronics",
    features: [
      "Voice control",
      "Multi-room audio",
      "Smart home integration",
      "High-fidelity sound",
    ],
  },
  {
    id: 6,
    name: "Gaming Laptop",
    price: 1499.99,
    description:
      "High-performance gaming laptop with latest-gen graphics card, fast refresh rate display, and RGB keyboard.",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8",
    ],
    brand: "GamePro",
    category: "Electronics",
    features: ["RTX 3080 Graphics", "165Hz Display", "32GB RAM", "1TB SSD"],
  },
  {
    id: 7,
    name: "Designer Denim Jeans",
    price: 149.99,
    description:
      "Premium quality denim jeans with perfect fit and comfort. Made from high-quality stretch denim that maintains its shape while providing maximum comfort.",
    images: [
      "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4",
    ],
    brand: "DenimCo",
    category: "Fashion",
    features: [
      "Stretch denim",
      "Perfect fit",
      "Sustainable production",
      "Reinforced stitching",
    ],
  },
  {
    id: 8,
    name: "Cashmere Sweater",
    price: 189.99,
    description:
      "Luxuriously soft cashmere sweater perfect for cold weather. Features premium quality cashmere wool and comfortable fit with ribbed cuffs and hem.",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
      "https://images.unsplash.com/photo-1614515797141-466a709d1322",
      "https://images.unsplash.com/photo-1611911813383-67769b37a149",
      "https://images.unsplash.com/photo-1584670747417-594a9412fba5",
    ],
    brand: "LuxKnit",
    category: "Fashion",
    features: [
      "100% Cashmere",
      "Ribbed details",
      "Temperature regulating",
      "Easy care",
    ],
  },
  {
    id: 9,
    name: "Wireless Earbuds",
    price: 159.99,
    description:
      "True wireless earbuds with active noise cancellation, wireless charging case, and premium sound quality.",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      "https://images.unsplash.com/photo-1631867675167-90a456a90863",
      "https://images.unsplash.com/photo-1628089236581-d803cfcd11c9",
      "https://images.unsplash.com/photo-1614111345870-c1351ee02f40",
    ],
    brand: "SoundMax",
    category: "Electronics",
    features: [
      "Active Noise Cancellation",
      "24-hour battery life",
      "Wireless charging",
      "Touch controls",
    ],
  },
  {
    id: 10,
    name: "4K Smart TV",
    price: 899.99,
    description:
      "55-inch 4K Smart TV with HDR, built-in streaming apps, and voice control capabilities.",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79",
      "https://images.unsplash.com/photo-1509281373149-e957c6296406",
    ],
    brand: "ViewTech",
    category: "Electronics",
    features: [
      "4K Resolution",
      "HDR Support",
      "Smart TV features",
      "Voice control",
    ],
  },
  {
    id: 11,
    name: "Professional Drone",
    price: 799.99,
    description:
      "Professional-grade drone with 4K camera, GPS tracking, and advanced flight controls.",
    images: [
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
      "https://images.unsplash.com/photo-1592656094504-3ea29913a18e",
    ],
    brand: "SkyView",
    category: "Electronics",
    features: [
      "4K Camera",
      "30-min flight time",
      "GPS tracking",
      "Obstacle avoidance",
    ],
  },
  {
    id: 12,
    name: "Portable Power Bank",
    price: 49.99,
    description:
      "High-capacity portable power bank with fast charging support and multiple ports.",
    images: [
      "https://images.unsplash.com/photo-1609592424857-26755247be64",
      "https://images.unsplash.com/photo-1618891676171-87f50bf9447d",
      "https://images.unsplash.com/photo-1619496299853-c55aca5f41a7",
      "https://images.unsplash.com/photo-1621946846615-c3bcb2695563",
    ],
    brand: "PowerMax",
    category: "Electronics",
    features: [
      "20000mAh capacity",
      "Fast charging",
      "Multiple ports",
      "LED indicator",
    ],
  },
  {
    id: 13,
    name: "Smart Security Camera",
    price: 129.99,
    description:
      "WiFi-enabled security camera with night vision, motion detection, and two-way audio.",
    images: [
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb",
      "https://images.unsplash.com/photo-1580891464581-41b1c2c6ad55",
      "https://images.unsplash.com/photo-1517218314347-5bfca7fb6d38",
      "https://images.unsplash.com/photo-1621600411688-4be93cd68504",
    ],
    brand: "SecureHome",
    category: "Electronics",
    features: ["1080p HD", "Night vision", "Motion detection", "Two-way audio"],
  },
  {
    id: 14,
    name: "Designer Sunglasses",
    price: 199.99,
    description:
      "Stylish designer sunglasses with UV protection and polarized lenses. Features durable frame and premium case included.",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      "https://images.unsplash.com/photo-1558386621-37b91293b285",
      "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08",
      "https://images.unsplash.com/photo-1577803645773-f96470509666",
    ],
    brand: "VisionElite",
    category: "Fashion",
    features: [
      "Polarized lenses",
      "UV protection",
      "Premium case included",
      "Lightweight frame",
    ],
  },
  {
    id: 15,
    name: "Luxury Watch",
    price: 499.99,
    description:
      "Elegant luxury watch with automatic movement and sapphire crystal. Features premium leather strap and water resistance up to 100m.",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6",
      "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0",
    ],
    brand: "Chronos",
    category: "Fashion",
    features: [
      "Automatic movement",
      "Sapphire crystal",
      "100m water resistant",
      "Genuine leather strap",
    ],
  },
  {
    id: 16,
    name: "Silk Evening Dress",
    price: 299.99,
    description:
      "Elegant silk evening dress perfect for formal occasions. Features flowing design with detailed embellishments and comfortable fit.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
      "https://images.unsplash.com/photo-1562137369-1a1a0bc66744",
    ],
    brand: "GlamourStyle",
    category: "Fashion",
    features: [
      "100% Silk",
      "Detailed embellishments",
      "Lined interior",
      "Custom fit available",
    ],
  },
  {
    id: 17,
    name: "Designer Handbag",
    price: 399.99,
    description:
      "Luxury designer handbag made from premium leather with gold-plated hardware. Features multiple compartments and adjustable strap.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
      "https://images.unsplash.com/photo-1606522754091-eae75be0566d",
    ],
    brand: "LuxuryLeather",
    category: "Fashion",
    features: [
      "Premium leather",
      "Gold-plated hardware",
      "Multiple compartments",
      "Adjustable strap",
    ],
  },
  {
    id: 18,
    name: "Professional Basketball",
    price: 29.99,
    description:
      "Official size and weight basketball with superior grip and durability. Perfect for indoor and outdoor play. Features moisture-wicking technology and deep channel design for better ball control.",
    images: [
      "https://images.unsplash.com/photo-1519861531473-9200262188bf",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc",
      "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4",
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68",
    ],
    brand: "SportPro",
    category: "Sports",
    features: [
      "Official size and weight",
      "All-surface grip",
      "Moisture-wicking technology",
      "Deep channel design",
    ],
  },
  {
    id: 19,
    name: "Premium Yoga Mat",
    price: 45.99,
    description:
      "Extra thick and comfortable yoga mat with perfect cushioning and grip. Non-slip surface on both sides, eco-friendly materials, and includes carrying strap.",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a",
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
    ],
    brand: "YogaFlex",
    category: "Sports",
    features: [
      "6mm thickness",
      "Non-slip surface",
      "Eco-friendly materials",
      "Includes carrying strap",
    ],
  },
  {
    id: 20,
    name: "Tennis Racket Pro",
    price: 159.99,
    description:
      "Professional grade tennis racket with advanced string technology and optimal weight distribution. Perfect for intermediate to advanced players.",
    images: [
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6",
      "https://images.unsplash.com/photo-1617083288942-47ef866b8ded",
      "https://images.unsplash.com/photo-1613918108466-292b78a8ef95",
      "https://images.unsplash.com/photo-1542144582-1ba00456b5e3",
    ],
    brand: "TennisElite",
    category: "Sports",
    features: [
      "Carbon fiber frame",
      "Advanced string pattern",
      "Ergonomic grip",
      "Vibration dampening",
    ],
  },
  {
    id: 21,
    name: "Italian Leather Boots",
    price: 249.99,
    description:
      "Premium Italian leather boots with comfortable design and durable construction. Features anti-slip sole and waterproof treatment.",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1623787961812-e82e2f290c4f",
    ],
    brand: "FootLuxe",
    category: "Fashion",
    features: [
      "Italian leather",
      "Waterproof",
      "Anti-slip sole",
      "Comfort padding",
    ],
  },
  {
    id: 22,
    name: "Designer Scarf",
    price: 129.99,
    description:
      "Luxurious designer scarf made from premium silk and cashmere blend. Features unique pattern and versatile styling options.",
    images: [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d",
      "https://images.unsplash.com/photo-1617552576455-c446b81c6e4c",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9",
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f",
    ],
    brand: "LuxAccessories",
    category: "Fashion",
    features: [
      "Silk-cashmere blend",
      "Unique pattern",
      "Versatile styling",
      "Gift box included",
    ],
  },
  {
    id: 23,
    name: "Running Shoes Elite",
    price: 129.99,
    description:
      "High-performance running shoes with responsive cushioning and breathable mesh upper. Designed for long-distance comfort and stability.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
    ],
    brand: "RunnerPro",
    category: "Sports",
    features: [
      "Responsive cushioning",
      "Breathable mesh",
      "Stability control",
      "Lightweight design",
    ],
  },
  {
    id: 24,
    name: "Swimming Goggles Pro",
    price: 34.99,
    description:
      "Professional swimming goggles with anti-fog coating and UV protection. Adjustable strap and soft silicone seals for comfortable fit.",
    images: [
      "https://images.unsplash.com/photo-1551966775-a4ddc8df052b",
      "https://images.unsplash.com/photo-1574140723763-085a0ec1c162",
      "https://images.unsplash.com/photo-1521485950395-bcfb8fc9bd06",
      "https://images.unsplash.com/photo-1622279488067-a01f9514558c",
    ],
    brand: "AquaVision",
    category: "Sports",
    features: [
      "Anti-fog coating",
      "UV protection",
      "Adjustable strap",
      "Silicone seals",
    ],
  },
  {
    id: 25,
    name: "Soccer Ball Elite",
    price: 49.99,
    description:
      "Professional grade soccer ball with premium materials and optimal flight stability. FIFA-approved design with water-resistant coating.",
    images: [
      "https://images.unsplash.com/photo-1552318965-6e6be7862488",
      "https://images.unsplash.com/photo-1551958219-acbc608c6377",
      "https://images.unsplash.com/photo-1614632537190-23e4146777db",
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    ],
    brand: "SoccerPro",
    category: "Sports",
    features: [
      "FIFA-approved design",
      "Water-resistant",
      "Premium materials",
      "Flight stability",
    ],
  },
  {
    id: 26,
    name: "Resistance Bands Set",
    price: 24.99,
    description:
      "Complete set of resistance bands for strength training and rehabilitation. Includes different resistance levels and handles.",
    images: [
      "https://images.unsplash.com/photo-1598289431512-b97b0917affc",
      "https://images.unsplash.com/photo-1517130038641-a774d04afb3c",
      "https://images.unsplash.com/photo-1591940782626-d5b1b1e5f914",
      "https://images.unsplash.com/photo-1518310065000-0231a7f471fe",
    ],
    brand: "FitStrength",
    category: "Sports",
    features: [
      "5 resistance levels",
      "Durable latex",
      "Comfort handles",
      "Exercise guide included",
    ],
  },
  {
    id: 27,
    name: "Boxing Gloves Pro",
    price: 79.99,
    description:
      "Professional boxing gloves with premium leather construction and optimal padding. Perfect for training and competition.",
    images: [
      "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee",
      "https://images.unsplash.com/photo-1606933987885-1c7c2b98d504",
      "https://images.unsplash.com/photo-1614254666643-6a466e288b96",
      "https://images.unsplash.com/photo-1642069688101-9ad48af41e8e",
    ],
    brand: "BoxMaster",
    category: "Sports",
    features: [
      "Premium leather",
      "Optimal padding",
      "Secure wrist strap",
      "Moisture-wicking lining",
    ],
  },
  {
    id: 28,
    name: "Mountain Bike Helmet",
    price: 89.99,
    description:
      "Advanced mountain bike helmet with superior protection and ventilation. Features adjustable fit system and removable visor.",
    images: [
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
      "https://images.unsplash.com/photo-1612942850385-b6b9b42cf300",
      "https://images.unsplash.com/photo-1557803056-3ff8c92d103e",
      "https://images.unsplash.com/photo-1558626708-df9c31b27ab4",
    ],
    brand: "BikeGuard",
    category: "Sports",
    features: [
      "Advanced protection",
      "Superior ventilation",
      "Adjustable fit",
      "Removable visor",
    ],
  },
  {
    id: 29,
    name: "Climbing Rope Pro",
    price: 149.99,
    description:
      "Professional grade climbing rope with advanced durability and safety features. UIAA certified with dry treatment for all-weather use.",
    images: [
      "https://images.unsplash.com/photo-1522163182402-834f871fd851",
      "https://images.unsplash.com/photo-1601224335112-b74158e150c5",
      "https://images.unsplash.com/photo-1585602173562-e7eeb0e6f380",
      "https://images.unsplash.com/photo-1512400930990-e0bc0bd809df",
    ],
    brand: "ClimbTech",
    category: "Sports",
    features: ["UIAA certified", "Dry treated", "60m length", "9.8mm diameter"],
  },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  getProducts: async () => {
    await delay(800);
    return mockProducts;
  },

  getProductById: async (id) => {
    await delay(500);
    const product = mockProducts.find((p) => p.id === parseInt(id));
    if (!product) throw new Error("Product not found");
    return product;
  },

  getProductsByCategory: async (category) => {
    await delay(800);
    return mockProducts.filter((p) => p.category === category);
  },
};
