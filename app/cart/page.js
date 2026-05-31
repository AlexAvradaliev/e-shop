import Link from "next/link";

import {
  useCartStore
} from "@/store/cartStore";



export default function CartPage() {

  const {

    items,

    removeItem,

  } = useCartStore();



  const total =
    items.reduce(

      (acc, item) =>

        acc +
        item.price *
        item.quantity,

      0
    );



  return (

    <div
      style={{
        padding: "40px",
      }}
    >

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "40px",
          color: "#002d72",
        }}
      >
        Shopping Cart
      </h1>



      {items.length === 0 ? (

        <div>
          Cart is empty.
        </div>

      ) : (

        <>

          <div
            style={{
              display: "grid",
              gap: "20px",
              marginBottom: "40px",
            }}
          >

            {items.map((item) => (

              <div
                key={item.id}

                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  background: "white",
                  padding: "20px",
                  borderRadius: "14px",
                }}
              >

                <img
                  src={
                    item.photos?.[0]
                  }

                  alt={item.name}

                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />



                <div
                  style={{
                    flex: 1,
                  }}
                >

                  <h2>
                    {item.name}
                  </h2>

                  <div>
                    Quantity:
                    {" "}
                    {item.quantity}
                  </div>

                  <div>
                    €{item.price}
                  </div>

                </div>



                <button

                  onClick={() =>
                    removeItem(item.id)
                  }

                  style={{

                    background: "#c62828",

                    color: "white",

                    border: "none",

                    padding:
                      "10px 14px",

                    borderRadius: "8px",

                    cursor: "pointer",
                  }}
                >

                  Remove

                </button>

              </div>
            ))}

          </div>



          <div
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Total: €{total.toFixed(2)}
          </div>



          <Link
            href="/checkout"
          >

            <button
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
              Checkout
            </button>

          </Link>

        </>
      )}

    </div>
  );
}