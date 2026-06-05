function Cart({ cart, removeFromCart }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{
              border: "1px solid #ddd",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px"
            }}>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              <button 
                onClick={() => removeFromCart(index)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer"
                }}
              >
                Remove ❌
              </button>
            </div>
          ))}

          {/* ✅ Total yahan aayega */}
          <h3>Total: ₹{total}</h3>

          {/* ✅ Checkout yahan aayega */}
          <button 
          onClick={() => alert("proceding to payment")}
          style={{
            background: "green",
            color: "white",
            padding: "10px 15px",
            border: "none",
            cursor: "pointer",
            marginTop: "10px"
          }}
          >
            Checkout 💳
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;