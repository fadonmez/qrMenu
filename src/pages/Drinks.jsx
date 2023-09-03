import Product from "../components/Product";
import { useProducts } from "../context/products";

export default function Drinks() {
  const { drinks } = useProducts();
  return (
    <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {drinks.map((drink) => {
        return <Product key={drink.id} product={drink} />;
      })}
    </div>
  );
}
