import { createContext, useContext } from "react";
import data from "../data/index.json";

const Products = createContext();

export function ProductsProvider({ children }) {
  const values = {
    burgers: [],
    drinks: [],
    desserts: [],
  };

  data.forEach((category) => {
    switch (category.category) {
      case "Burgers":
        values.burgers = category.items;
        break;
      case "Drinks":
        values.drinks = category.items;
        break;
      case "Desserts":
        values.desserts = category.items;
        break;
      default:
        break;
    }
  });

  return <Products.Provider value={values}>{children}</Products.Provider>;
}

export const useProducts = () => useContext(Products);
