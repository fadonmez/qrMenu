import { useState } from "react";
import { Input } from "@nextui-org/react";

export default function Product({ product, mode }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [thisPrice, setThisPrice] = useState(product.price);
  const [thisName, setThisName] = useState(product.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    product.name = thisName;
    product.price = thisPrice;
    setIsUpdate(!isUpdate);
  };
  return (
    <section className="text-gray-600 body-font justify-self-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="w-full p-4 ">
            <a className="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                className="block object-cover object-center w-full h-full"
                src={product.image}
              />
            </a>
            <div
              className={`mt-4 text-center ${
                isUpdate ? "flex flex-col gap-y-4" : ""
              }`}
            >
              {isUpdate ? (
                <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
                  <Input
                    value={thisName}
                    onChange={(e) => setThisName(e.target.value)}
                    label="İsim güncelle"
                  />
                  <Input
                    value={thisPrice}
                    onChange={(e) => setThisPrice(e.target.value)}
                    label="Fiyat Güncelle"
                  />
                  <button type="submit">Kaydet</button>
                </form>
              ) : (
                <div className="flex items-center justify-evenly">
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    {product.name}
                  </h2>
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    {product.price}$
                  </h2>
                </div>
              )}
              {mode === "admin" && (
                <button
                  className={isUpdate ? "hidden" : "inline-block"}
                  onClick={() => setIsUpdate(true)}
                >
                  Düzenle
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
