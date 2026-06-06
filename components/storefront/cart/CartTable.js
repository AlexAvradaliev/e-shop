import QuantitySelector from "./QuantitySelector.js";
import styles from "./CartTable.module.css";

export default function CartTable({
  items = [],
}) {
  if (items.length === 0) {
    return (
      <p className={styles.empty}>Your cart is empty.</p>
    );
  }

  return (
    <div className={styles.card}>
      <table className={styles.table} aria-label="Cart table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>€{item.price.toFixed(2)}</td>
              <td>
                <QuantitySelector value={item.quantity} />
              </td>
              <td>€{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
