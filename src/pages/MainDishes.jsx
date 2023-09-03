import Product from "../components/Product";
import { useProducts } from "../context/products";

export default function MainDishes() {
  const { burgers } = useProducts();
  return (
    <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {burgers.map((burger) => {
        return <Product key={burger.id} product={burger} />;
      })}
    </div>
  );
}
