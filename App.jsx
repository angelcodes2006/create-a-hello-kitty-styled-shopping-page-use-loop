import React, { useState } from "react";

export default function App() {
  // Sample product data – in a real app this would come from a server or DB
  const initialProducts = [
    { id: 1, name: "Hello Kitty T‑Shirt", price: 19.99, img: "https://via.placeholder.com/150" },
    { id: 2, name: "Hello Kitty Mug", price: 9.99, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Hello Kitty Backpack", price: 29.99, img: "https://via.placeholder.com/150" },
    { id: 4, name: "Hello Kitty Sticker Pack", price: 4.99, img: "https://via.placeholder.com/150" }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Build product cards using a classic for‑loop (instead of Array.map)
  const productCards = [];
  for (let i = 0; i < initialProducts.length; i++) {
    const product = initialProducts[i];
    productCards.push(
      <article
        key={product.id}
        style={styles.card}
        aria-label={`Product: ${product.name}`}
      >
        <img
          src={product.img}
          alt={product.name}
          style={styles.image}
          loading="lazy"
        />
        <h2 style={styles.title}>{product.name}</h2>
        <p style={styles.price}>${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          style={styles.button}
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </article>
    );
  }

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.heading}>Hello Kitty Shop</h1>
        <div aria-live="polite" style={styles.cartInfo}>
          Cart Items: {cart.length}
        </div>
      </header>
      <section style={styles.grid}>{productCards}</section>
      <footer style={styles.footer}>
        <p>© 2024 Hello Kitty Store</p>
      </footer>
    </main>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ffe6f2",
    color: "#333",
    minHeight: "100vh",
    padding: "1rem",
    boxSizing: "border-box"
  },
  header: {
    textAlign: "center",
    marginBottom: "1.5rem"
  },
  heading: {
    fontSize: "2rem",
    color: "#ff69b4",
    margin: 0,
    position: "relative"
  },
  cartInfo: {
    marginTop: "0.5rem",
    fontSize: "1rem"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1rem"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "4px"
  },
  title: {
    fontSize: "1.2rem",
    margin: "0.5rem 0"
  },
  price: {
    fontWeight: "bold",
    marginBottom: "0.5rem"
  },
  button: {
    backgroundColor: "#ff69b4",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
    cursor: "pointer"
  },
  footer: {
    marginTop: "2rem",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#666"
  }
};