import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.brand}>OrderOnTheGo 🍽️</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Menu</Link>
        <Link to="/cart" style={styles.link}>
          Cart ({cart ? cart.length : 0})
        </Link>

        {user ? (
          <>
            <span style={styles.user}>Hi, {user.username}</span>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </>
        ) : (
          <Link to="/login" style={styles.link}>Login/Register</Link>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#ff6600",
    color: "white"
  },
  brand: {
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  },
  user: {
    color: "white",
    fontWeight: "bold"
  },
  button: {
    marginLeft: "10px",
    backgroundColor: "#fff",
    color: "#ff6600",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};
