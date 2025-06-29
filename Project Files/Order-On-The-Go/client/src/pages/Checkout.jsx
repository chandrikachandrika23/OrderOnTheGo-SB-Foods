import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = async () => {
    try {
      const order = {
        user: user?.username || "Guest",
        items: cart,
        total,
      };
      await axios.post("http://localhost:5000/api/orders", order);
      alert("✅ Order placed successfully!");
      clearCart();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to place order.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, idx) => (
            <div key={idx} style={styles.item}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button style={styles.button} onClick={handlePlaceOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "30px" },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "10px",
  },
  image: {
    width: "100px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "#ff6600",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};
