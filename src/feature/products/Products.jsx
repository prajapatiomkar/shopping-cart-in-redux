import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../cart/cartSlice";
import { fetchProducts } from "./productAPI";
import { STATUSES } from "../../constants/STATUSES";

export default function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products"); //its reture a stream of data
    //   const data = await response.json(); //its convert the stream of data into json format
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4 className="">{product.title}</h4>
          <h5 className="">{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
      ;
    </div>
  );
}
