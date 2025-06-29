import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <div style={styles.heroSection}>
        <div style={styles.heroText}>
          <h1 style={styles.heading}>OrderOnTheGo 🍽️</h1>
          <p style={styles.tagline}>
            Craving something tasty? We deliver fresh, hot meals in minutes!
          </p>
          <button style={styles.button} onClick={() => navigate("/products")}>
            Browse Menu
          </button>
        </div>
        <img
          src="/images/hero.avif"
          alt="Delicious Meals"
          style={styles.heroImage}
        />
      </div>

      <section style={styles.familySection}>
        <img
          src="/images/family.avif"
          alt="Family enjoying meal"
          style={styles.familyImage}
        />
        <div style={styles.familyText}>
          <h2>🍲 Moments That Matter</h2>
          <p>
            From late-night cravings to weekend dinners — we bring joy to your table.
            Trusted by thousands of families for quality and taste.
          </p>
        </div>
      </section>

      <section style={styles.features}>
        <h2 style={styles.sectionHeading}>Why Choose SB Foods?</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <span style={styles.emoji}>⚡</span>
            <h3>Fast Delivery</h3>
            <p>Get your favorite dishes at your doorstep in 30 minutes.</p>
          </div>
          <div style={styles.featureCard}>
            <span style={styles.emoji}>🥗</span>
            <h3>Fresh Ingredients</h3>
            <p>We use only the freshest, high-quality ingredients.</p>
          </div>
          <div style={styles.featureCard}>
            <span style={styles.emoji}>📱</span>
            <h3>Easy to Use</h3>
            <p>Order with just a few taps – simple and fast.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  wrapper: {
    fontFamily: "sans-serif",
    padding: "20px",
    backgroundColor: "#fff",
  },
  heroSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff8f2",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    flexWrap: "wrap",
  },
  heroText: {
    maxWidth: "50%",
    padding: "20px",
  },
  heading: {
    fontSize: "3rem",
    color: "#ff6600",
    marginBottom: "15px",
  },
  tagline: {
    fontSize: "1.2rem",
    color: "#444",
    marginBottom: "25px",
  },
  button: {
    padding: "12px 25px",
    fontSize: "1rem",
    backgroundColor: "#ff6600",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  heroImage: {
    width: "350px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  familySection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "60px",
    gap: "30px",
    flexWrap: "wrap",
  },
  familyImage: {
    width: "50%",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  familyText: {
    flex: 1,
    padding: "20px",
    fontSize: "1.1rem",
    color: "#333",
  },
  features: {
    marginTop: "50px",
    textAlign: "center",
  },
  sectionHeading: {
    fontSize: "2rem",
    marginBottom: "30px",
  },
  featureGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  featureCard: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    width: "220px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  emoji: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
};
