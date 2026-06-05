function Navbar({ cartCount, setPage }) {
  return (
    <nav style={{
      padding: "15px 40px",
      background: "#000",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 10px rgba(0,0,0,0.5)"
    }}>
      
      {/* Logo / Brand Name */}
      <h2 style={{ margin: 0, fontWeight: "bold", letterSpacing: "1px" }}>
        Black Rising Pearl✨
      </h2>

      {/* Menu */}
      <div style={{ display: "flex", gap: "25px", fontSize: "16px" }}>
        
        <span 
          style={{ cursor: "pointer" }}
          onClick={() => setPage("home")}
          onMouseEnter={(e)=>e.target.style.color="#ccc"} 
          onMouseLeave={(e)=>e.target.style.color="#fff"}
        >
          Home
        </span>

        <span 
          style={{ cursor: "pointer" }}
          onMouseEnter={(e)=>e.target.style.color="#ccc"} 
          onMouseLeave={(e)=>e.target.style.color="#fff"}
        >
          Jewellery
        </span>

        <span 
  style={{ cursor: "pointer" }}
  onClick={() => {
    console.log("cart clicked");   // ✅ debug
    setPage("cart");               // ✅ page change
  }}
  onMouseEnter={(e)=>e.target.style.color="#ccc"} 
  onMouseLeave={(e)=>e.target.style.color="#fff"}
>
  Cart 🛒 ({cartCount})
</span>

      </div>

    </nav>
  );
}

export default Navbar;