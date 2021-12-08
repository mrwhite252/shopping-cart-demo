import { useState } from "react";
import { Add as AddIcon, Remove as RemoveIcon } from "@material-ui/icons";

import "./Cart.css";

export default function Cart({ propsData, handleDelete }) {
  const [count, setCount] = useState(null);

  const handlePlus = (id) => {
    propsData.map((item) => {
      if (item.id === id) {
        return setCount((count) => item.quantity++);
      }
    });
  };

  const handleMinus = (id) => {
    propsData.map((item) => {
      if (item.id === id) {
        return setCount((count) => item.quantity--);
      }
    });
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {propsData &&
        propsData.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-container">
              <img src={`../img/${item.img}`} alt={item.img} />
              <h3>{item.name}</h3>
            </div>
            <div className="quantity-container">
              <AddIcon onClick={() => handlePlus(item.id)} />
              <p id={item.id}>{item.quantity}</p>
              <RemoveIcon onClick={() => handleMinus(item.id)} />
            </div>
            <button onClick={() => handleDelete(item.id)}>X</button>
          </div>
        ))}
    </div>
  );
}
