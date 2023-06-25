import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, selectCart } from "./cartSlice";

export default function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3>Cart</h3>
      {products.length > 0 ? (
        <div className="cartWrapper">
          {products.map((product, index) => (
            <div key={index} className="cartCard">
              <img src={product.image} alt={product.title} />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => handleRemove(product.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h3>No items in cart</h3>
      )}
    </div>
  );
}
