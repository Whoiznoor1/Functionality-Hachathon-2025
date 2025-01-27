"use client";
import { useContext, useState } from "react";
import {  CheckoutContext } from "../components/context";
import { Product } from "../components/CartProvider";

const Checkout = () => {
  const { checkout } = useContext(CheckoutContext);

  const [isCashOnDeliverySelected, setIsCashOnDeliverySelected] =
    useState(false);

  const totalAmount = checkout.reduce(
    (total: number, product: Product) =>
      total + product.price * product.quantity,
    0
  );

  const handlePaymentMethodChange = () => {
    setIsCashOnDeliverySelected((prevState) => !prevState);
  };

  return (
    <>
      <h1 className="text-5xl text-center font-semibold tracking-wide mt-5">
        Checkout
      </h1>
      <div className="container mx-auto flex flex-col md:flex-row md:justify-center gap-6 p-4">
        <div className="left md:w-1/2">
          <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Country / Region
                </label>
                <select
                  id="country"
                  name="country"
                  className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Pakistan</option>
                  <option>Saudia</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="streetAddress"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Town / City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="province"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Province
                </label>
                <select
                  id="province"
                  name="province"
                  className=" mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Western Province</option>
                  <option>Southern Province</option>
                  <option>Central Province</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="right md:w-1/3">
          <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-6">Product</h2>
            {checkout &&
              checkout.map((product: Product) => (
                <div className="flex justify-between mb-4" key={product.id}>
                  <p>{product.title + " x " + product.quantity}</p>
                  <span
                    style={{
                      backgroundColor: product.selectedColor,
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                    }}
                  ></span>
                  <p>${product.price}</p>
                </div>
              ))}
            <div className="flex justify-between mb-4">
              <p>Subtotal</p>
              <p>${totalAmount}</p>
            </div>
            <div className="flex justify-between my-4 py-2 border-y border-slate-600">
              <p className="font-semibold">Shipping</p>
              <p className="text-amber-600">Free</p>
            </div>
            <div className="flex justify-between mb-4 font-bold text-lg">
              <p>Total</p>
              <p className="text-amber-600">{totalAmount}</p>
            </div>
            <hr className="my-4 border-gray-200" />
            <div className="mb-6">
              <p className="font-bold">Direct Bank Transfer</p>
              <p className="text-sm text-gray-600">
                Your order will be shipped once the payment is received in full
                upon delivery. Please ensure that the exact amount is available
                for payment when our delivery team arrives. Thank you!
              </p>
            </div>
            <div className="mb-6">
              <div className=" items-center inline">
                <input
                  type="checkbox"
                  id="cashOnDelivery"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  checked={isCashOnDeliverySelected}
                  onChange={handlePaymentMethodChange}
                />
                <label
                  htmlFor="cashOnDelivery"
                  className="ml-2 text-sm font-medium text-gray-700 mb-4"
                >
                  Cash On Delivery
                </label>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="#" className="text-blue-600 underline">
                privacy policy
              </a>
              .
            </p>
            <button
              type="button"
              className="w-1/2 bg-none text-black border border-black py-3 rounded-md text-center font-medium hover:bg-gray-200 mx-auto block"
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
