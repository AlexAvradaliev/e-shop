import Link from "next/link";



export default function AdminLayout({
  children
}) {

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f5f7fb",
      }}
    >

      {/* SIDEBAR */}

      <aside
        style={{
          width: "260px",
          background: "#002d72",
          color: "white",
          padding: "30px 20px",
        }}
      >

        <h2
          style={{
            marginBottom: "40px",
            fontSize: "24px",
          }}
        >
          Admin Panel
        </h2>



        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >

          <Link
            href="/admin"
            style={linkStyle}
          >
            Dashboard
          </Link>



          <Link
            href="/admin/users"
            style={linkStyle}
          >
            Users
          </Link>



          <Link
            href="/admin/orders"
            style={linkStyle}
          >
            Orders
          </Link>



          <Link
            href="/admin/products"
            style={linkStyle}
          >
            Products
          </Link>



          <Link
            href="/admin/security"
            style={linkStyle}
          >
            Security Logs
          </Link>

        </nav>

      </aside>



      {/* CONTENT */}

      <main
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        {children}
      </main>

    </div>
  );
}



const linkStyle = {

  color: "white",

  textDecoration: "none",

  padding: "12px 16px",

  borderRadius: "8px",

  background: "rgba(255,255,255,0.08)",

  transition: "0.2s",
};