import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext); // ✅ use `cart` here

  const total = cart.reduce((sum, item) => sum + item.price, 0); // ✅ sum prices

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div style={styles.grid}>
            {cart.map((item, index) => (
              <div key={index} style={styles.card}>
                <img src={item.image} alt={item.name} style={styles.image} />
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button
                  style={styles.button}
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div style={styles.totalContainer}>
            <h3>Total: ₹{total}</h3>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#ff6600",
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "220px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#fff8f2",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#ff6600",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  totalContainer: {
    marginTop: "30px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
  },
};
