import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [
    { id: "c1", name: "Spicy Garlic Beef", amount: 2, price: 29.25 },
  ];

  const cartItemElements = cartItems.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItemElements}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>58.5</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
