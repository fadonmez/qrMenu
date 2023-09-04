import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/products";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function HomeAdmin() {
  const navigate = useNavigate();
  const { burgers, drinks, desserts } = useProducts();
  const categories = [
    {
      name: "Burgers",
      items: burgers,
      length: burgers.length,
      img: "https://www.burgerking.com.tr/cmsfiles/products/big-king-menu.png?v=263",
    },
    {
      name: "Drinks",
      items: drinks,
      length: drinks.length,
      img: "https://www.burgerking.com.tr/cmsfiles/products/coca-cola.png?v=285",
    },
    {
      name: "Desserts",
      items: desserts,
      length: desserts.length,
      img: "https://www.burgerking.com.tr/cmsfiles/products/sundae.png?v=263",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start h-screen gap-8 mt-12">
      {categories.map((category, index) => {
        return (
          <Card
            key={index}
            shadow="sm"
            isPressable
            onPress={() => {
              navigate(`/admin/seestock/${category.name.toLowerCase()}`);
            }}
          >
            <CardBody className="p-0 overflow-visible">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-full object-cover h-[140px]"
                src={category.img}
              />
            </CardBody>
            <CardFooter className="justify-between text-small">
              <b>Total {category.name}</b>
              <p className="text-default-500">{category.length}</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
