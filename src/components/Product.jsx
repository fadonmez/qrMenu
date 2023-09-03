export default function Product({ product }) {
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
            <div className="mt-4 text-center">
              <h2 className="text-lg font-medium text-gray-900 title-font">
                {product.name}
              </h2>
              <p className="mt-1">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
