import React from "react";

import Products from "../feature/products/Products";

export default function Home() {
  return (
    <div>
      <h1 className="heading">Welcome to the redux toolkit store.</h1>
      <section className="">
        <h3 className="">Products</h3>
        <Products />
      </section>
    </div>
  );
}
