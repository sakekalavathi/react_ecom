import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/common/Button";
import { Card } from "../components/common/Card";
import { Input } from "../components/common/Input";
import { useCart } from "../context/CartContext";
import useForm from "../hooks/useForm";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  cardNumber: "",
  cardExpiry: "",
  cardCVV: "",
};

const CheckoutForm = ({ onSubmit, loading }) => {
  const { values, errors, handleChange, handleBlur, validateForm, resetForm } =
    useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(values);
    } else {
      // Scroll to the first error
      const firstError = document.querySelector(".error-message");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.firstName}
          required
        />
        <Input
          label="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.lastName}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          required
        />
        <Input
          label="Phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.phone}
          required
          placeholder="(123) 456-7890"
        />
      </div>

      <Input
        label="Address"
        name="address"
        value={values.address}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.address}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Input
          label="City"
          name="city"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.city}
          required
        />
        <Input
          label="State"
          name="state"
          value={values.state}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.state}
          required
        />
        <Input
          label="ZIP Code"
          name="zipCode"
          value={values.zipCode}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.zipCode}
          required
          placeholder="12345"
        />
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Card Number"
            name="cardNumber"
            value={values.cardNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.cardNumber}
            required
            placeholder="1234 5678 9012 3456"
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Expiry (MM/YY)"
              name="cardExpiry"
              value={values.cardExpiry}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.cardExpiry}
              required
              placeholder="MM/YY"
            />
            <Input
              label="CVV"
              name="cardCVV"
              value={values.cardCVV}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.cardCVV}
              required
              placeholder="123"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="submit" className="flex-1" disabled={loading}>
          {loading ? "Processing..." : "Place Order"}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={resetForm}
          disabled={loading}
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

const Checkout = () => {
  const navigate = useNavigate();
  const { items, cartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      clearCart();
      navigate("/order-success");
    } catch (error) {
      console.error("Error processing order:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CheckoutForm onSubmit={handleSubmit} loading={loading} />
          </Card>
        </div>
        <div className="md:col-span-1">
          <Card>
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span className="text-gray-600">
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
