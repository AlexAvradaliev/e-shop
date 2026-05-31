import Link from "next/link";



export default function SuccessPage() {

  return (

    <div
      style={{
        padding: "80px",
        textAlign: "center",
      }}
    >

      <div
        style={{
          fontSize: "80px",
          marginBottom: "20px",
        }}
      >
        ✅
      </div>



      <h1
        style={{
          fontSize: "42px",
          marginBottom: "20px",
          color: "#002d72",
        }}
      >
        Payment Successful
      </h1>



      <p
        style={{
          fontSize: "18px",
          color: "#666",
          marginBottom: "40px",
        }}
      >
        Thank you for your order.
      </p>



      <Link href="/products">

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
          Continue Shopping
        </button>

      </Link>

    </div>
  );
}