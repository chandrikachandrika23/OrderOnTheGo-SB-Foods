import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Ice Cream",
    description: "Cold, creamy, and delicious!",
    price: 80,
    image: "/images/ice cream.avif",
  },
  {
    id: 2,
    name: "French Fries",
    description: "Crispy and golden potato fries.",
    price: 60,
    image: "/images/french fries.avif",
  },
  {
    id: 3,
    name: "Pizza",
    description: "Cheesy Margherita with extra toppings.",
    price: 200,
    image: "/images/pizza.avif",
  },
  {
    id: 4,
    name: "Noodles",
    description: "Spicy Hakka Noodles loaded with veggies.",
    price: 120,
    image: "/images/noodles.avif",
  },
  {
    id: 5,
    name: "Burger",
    description: "Juicy veggie burger with special sauce.",
    price: 150,
    image: "/images/burger.avif",
  },
];

export default function Products() {
  const { addToCart } = useContext(CartContext);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState("");

  const handleAddToCart = (item) => {
    addToCart(item);
    setPopupText(`✅ ${item.name} added to cart!`);
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 1500);
  };

  return (
    <div style={styles.container}>
      {popupVisible && (
        <div style={styles.popup}>
          {popupText}
        </div>
      )}
      <h2 style={styles.heading}>🍔 Our Menu</h2>
      <div style={styles.grid}>
        {products.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>₹{item.price}</p>
            <button style={styles.button} onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    textAlign: "center",
    position: "relative",
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
  popup: {
    position: "fixed",
    top: "80px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: "bold",
    zIndex: 1000,
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)"
  }
};
