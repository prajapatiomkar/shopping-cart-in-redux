import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { selectCart } from "../store/cartSlice";

export default function Navbar() {
  // const items = useSelector((state) => state.cart.items);
  const cart = useSelector((state) => state.cart);
  return (
    <div className="navbar">
      <div className="logo">Redux Store</div>
      <div className="">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Item : {cart.length}</span>
      </div>
    </div>
  );
}
