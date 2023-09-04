import React from "react";
import { useProducts } from "../context/products";
import Product from "../components/Product";
import { useParams } from "react-router-dom";

export default function SeeStock() {
  const { type } = useParams();
  const { burgers, drinks, desserts } = useProducts();
  let productList;

  // type değerine göre hangi ürün listesini kullanacağımızı belirleyin
  if (type === "burgers") {
    productList = burgers;
  } else if (type === "drinks") {
    productList = drinks;
  } else if (type === "desserts") {
    productList = desserts;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {productList &&
        productList.map((product) => (
          <Product key={product.id} product={product} mode="admin" />
        ))}
    </div>
  );
}
