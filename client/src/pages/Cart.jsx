import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items</p>
      ) : (
        cart.map((item, i) => (
          <div key={i}>
            {item.name} - ₹{item.price}
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;