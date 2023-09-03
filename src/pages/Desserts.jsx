import Product from "../components/Product";
import { useProducts } from "../context/products";

export default function Desserts() {
  const { desserts } = useProducts();

  return (
    <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {desserts.map((dessert) => {
        return <Product key={dessert.id} product={dessert} />;
      })}
    </div>
  );
}
