import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/common/Button";
import { Card } from "../components/common/Card";
import { Loading } from "../components/common/Loading";
import ProductDetail from "../components/product/ProductDetail";
import { ReviewForm, ReviewList } from "../components/review/ReviewForm";
import { useCart } from "../context/CartContext";
import { api } from "../services/api";
import { reviewApi } from "../services/reviewApi";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productData, reviewsData] = await Promise.all([
          api.getProductById(parseInt(id)),
          reviewApi.getProductReviews(parseInt(id)),
        ]);
        setProduct(productData);
        setReviews(reviewsData);
      } catch (error) {
        setError("Error loading product details");
        console.error("Error:", error);
      } finally {
        setLoading(false);
        setReviewsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleAddReview = async (reviewData) => {
    try {
      const newReview = await reviewApi.addReview(parseInt(id), reviewData);
      setReviews((prev) => [newReview, ...prev]);
      setShowReviewForm(false);
      // Show success message
      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again.");
    }
  };

  if (loading) return <Loading />;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <Button variant="outline" onClick={() => navigate(-1)} className="mb-6">
        ← Back
      </Button>

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"> */}
      <ProductDetail product={product} onAddToCart={addToCart} />
      {/* </div> */}

      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>
          <Button
            variant="outline"
            onClick={() => setShowReviewForm(!showReviewForm)}
          >
            {showReviewForm ? "Cancel Review" : "Write a Review"}
          </Button>
        </div>

        {showReviewForm && (
          <Card className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Write Your Review</h3>
            <ReviewForm onSubmit={handleAddReview} />
          </Card>
        )}

        {reviewsLoading ? (
          <Loading />
        ) : reviews.length > 0 ? (
          <ReviewList reviews={reviews} />
        ) : (
          <p className="text-center text-gray-600 py-8">
            No reviews yet. Be the first to review this product!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
