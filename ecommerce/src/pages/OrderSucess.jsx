import { CheckCircle } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";
import { Card } from "../components/common/Card";

const OrderSuccess = () => {
  // Generate a random order number
  const orderNumber = `ORD-${Math.random()
    .toString(36)
    .substr(2, 9)
    .toUpperCase()}`;

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <Card className="text-center py-12 animate-fade-in">
        <div className="mb-6 flex justify-center">
          <CheckCircle size={64} className="text-green-500" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Thank you for your order!
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Your order has been successfully placed and will be processed soon.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-semibold">{orderNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Status:</span>
              <span className="badge badge-success">Confirmed</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Estimated Delivery:</span>
              <span className="font-semibold">
                {new Date(
                  Date.now() + 5 * 24 * 60 * 60 * 1000
                ).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-3">What's Next?</h3>
          <ul className="text-left text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              You will receive an order confirmation email shortly
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              We will notify you when your order ships
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              You can track your order status in your email
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="outline" className="w-full sm:w-auto">
              Continue Shopping
            </Button>
          </Link>
          <Link to="/products">
            <Button className="w-full sm:w-auto">Browse More Products</Button>
          </Link>
        </div>

        <div className="mt-8 text-gray-600">
          <p>
            Need help?{" "}
            <Link to="/contact" className="text-blue-600 hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default OrderSuccess;
