import ProductCard from "../components/ProductCard";

function Home() {
  const products = [
    { _id: 1, name: "Shoes", price: 1200 },
    { _id: 2, name: "Watch", price: 2500 },
    { _id: 3, name: "Bag", price: 1800 }
  ];

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  return (
    <div style={styles.container}>
      <h1>Products</h1>

      <div style={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p._id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px" },
  grid: { display: "flex", gap: "15px" }
};

export default Home;