'use client';

import { useState }
  from "react";

import {
  useCartStore
} from "@/store/cartStore";

import { createOrderAction }
  from "@/actions/orders";



export default function CheckoutPage() {

  const {

    items,

    clearCart,

  } = useCartStore();



  const [loading, setLoading] =
    useState(false);



  const total =
    items.reduce(

      (acc, item) =>

        acc +
        item.price *
        item.quantity,

      0
    );



  async function handleSubmit(
    e
  ) {

    e.preventDefault();

    setLoading(true);



    const formData =
      new FormData(e.target);



    const order = {

      name:
        formData.get("name"),

      family:
        formData.get("family"),

      email:
        formData.get("email"),

      phone:
        formData.get("phone"),

      address:
        formData.get("address"),

      city:
        formData.get("city"),

      zipCode:
        formData.get("zipCode"),

      billingAddress:
        formData.get("billingAddress"),

      billingCity:
        formData.get("billingCity"),

      billingZipCode:
        formData.get("billingZipCode"),

      metodPayment:
        "card",

      deliveryMethod:
        "home",

      deliveryProvider:
        "Standard",

      paymentStatus:
        "unpaid",

      totalPoid:
        items.reduce(
          (acc, item) =>
            acc +
            item.poid *
            item.quantity,
          0
        ),

      priceShipping: 0,

      totalPrice: total,

      items,
    };



    try {

      const result =
        await createOrderAction(order);

      clearCart();

      window.location.href =
        result.checkoutUrl;

    } catch (error) {

      alert(error.message);
    }

    setLoading(false);
  }



  return (

    <div
      style={{
        padding: "40px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "40px",
          color: "#002d72",
        }}
      >
        Checkout
      </h1>



      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "16px",
        }}
      >

        <input
          name="name"
          placeholder="First Name"
          required
          style={inputStyle}
        />



        <input
          name="family"
          placeholder="Last Name"
          required
          style={inputStyle}
        />



        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          style={inputStyle}
        />



        <input
          name="phone"
          placeholder="Phone"
          required
          style={inputStyle}
        />



        <input
          name="address"
          placeholder="Address"
          required
          style={inputStyle}
        />



        <input
          name="city"
          placeholder="City"
          required
          style={inputStyle}
        />



        <input
          name="zipCode"
          placeholder="ZIP Code"
          required
          style={inputStyle}
        />



        <input
          name="billingAddress"
          placeholder="Billing Address"
          required
          style={inputStyle}
        />



        <input
          name="billingCity"
          placeholder="Billing City"
          required
          style={inputStyle}
        />



        <input
          name="billingZipCode"
          placeholder="Billing ZIP"
          required
          style={inputStyle}
        />



        <div
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Total: €{total.toFixed(2)}
        </div>



        <button
          disabled={loading}
          style={btnStyle}
        >
          {loading
            ? "Loading..."
            : "Pay with Stripe"}
        </button>

      </form>

    </div>
  );
}



const inputStyle = {

  padding: "14px",

  borderRadius: "10px",

  border: "1px solid #ddd",

  fontSize: "15px",
};



const btnStyle = {

  background: "#002d72",

  color: "white",

  border: "none",

  padding: "16px",

  borderRadius: "10px",

  cursor: "pointer",

  fontSize: "16px",

  fontWeight: "bold",
};