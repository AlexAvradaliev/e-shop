'use client';

import {
  useCartStore
} from "@/store/cartStore";



export default function AddToCartButton({
  product
}) {

  const addItem =
    useCartStore(
      (state) => state.addItem
    );



  return (

    <button

      onClick={() => {

        addItem(product);

        alert(
          "Product added to cart"
        );
      }}

      style={{

        background: "#002d72",

        color: "white",

        border: "none",

        padding: "16px 24px",

        borderRadius: "10px",

        cursor: "pointer",

        fontSize: "16px",

        fontWeight: "bold",
      }}
    >

      Add to Cart

    </button>
  );
}