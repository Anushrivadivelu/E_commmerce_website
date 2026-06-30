function ProductCard({ product, addToCart }) {
  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "8px",
    width: "200px"
  }
};

export default ProductCard;