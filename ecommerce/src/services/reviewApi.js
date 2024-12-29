let mockReviews = [
  {
    id: 1,
    productId: 1,
    userId: 1,
    userName: "John Doe",
    rating: 4,
    comment: "Great product! Really satisfied with the quality.",
    date: "2024-12-20T10:00:00Z",
  },
  {
    id: 2,
    productId: 1,
    userId: 2,
    userName: "Jane Smith",
    rating: 5,
    comment: "Exceeded my expectations. Would definitely recommend!",
    date: "2024-12-19T15:30:00Z",
  },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const reviewApi = {
  getProductReviews: async (productId) => {
    await delay(500);
    return mockReviews.filter((review) => review.productId === productId);
  },

  addReview: async (productId, reviewData) => {
    await delay(800);
    const newReview = {
      id: mockReviews.length + 1,
      productId,
      userId: Math.floor(Math.random() * 1000) + 1,
      userName: "Current User",
      rating: reviewData.rating,
      comment: reviewData.comment,
      date: new Date().toISOString(),
    };
    mockReviews.push(newReview);
    return newReview;
  },

  // Update a review
  updateReview: async (reviewId, reviewData) => {
    await delay(500);
    const index = mockReviews.findIndex((r) => r.id === reviewId);
    if (index === -1) throw new Error("Review not found");

    mockReviews[index] = {
      ...mockReviews[index],
      ...reviewData,
      date: new Date().toISOString(),
    };
    return mockReviews[index];
  },

  deleteReview: async (reviewId) => {
    await delay(500);
    mockReviews = mockReviews.filter((r) => r.id !== reviewId);
    return true;
  },
};
