import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useProducts } from "../context/products";
import Input from "../components/Input";
import { basicSchema } from "../schemas/index";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function AddStock() {
  const { burgers, drinks, desserts } = useProducts();
  const [type, setType] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const initialValues = {
    name: "",
    price: "",
    image: "",
  };

  const onSubmit = (values, actions) => {
    const nameInUpperCase = values.name.toUpperCase();
    if (type === "burgers") {
      burgers.push({
        id: burgers.length + 1,
        name: nameInUpperCase,
        price: values.price,
        image: values.image,
      });
      console.log(burgers);
    } else if (type === "drinks") {
      drinks.push({
        id: drinks.length + 1,
        name: nameInUpperCase,
        price: values.price,
        image: values.image,
      });
      console.log(drinks);
    } else if (type === "desserts") {
      desserts.push({
        id: desserts.length + 1,
        name: nameInUpperCase,
        price: values.price,
        image: values.image,
      });
      console.log(desserts);
    }
    setIsSelected(false);
    actions.resetForm();
  };

  const handleButtonClick = (buttonType) => {
    setType(buttonType);
    setIsSelected(true);
  };

  return (
    <div className="flex flex-col mt-16 gap-y-8">
      <ButtonGroup>
        <Button
          color={type === "burgers" ? "success" : "primary"}
          onClick={() => handleButtonClick("burgers")}
        >
          Burgers
        </Button>
        <Button
          color={type === "drinks" ? "success" : "primary"}
          onClick={() => handleButtonClick("drinks")}
        >
          Drinks
        </Button>
        <Button
          color={type === "desserts" ? "success" : "primary"}
          onClick={() => handleButtonClick("desserts")}
        >
          Desserts
        </Button>
      </ButtonGroup>
      <Formik
        initialValues={initialValues}
        validationSchema={basicSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col w-full p-8 gap-y-4">
          <Input type="text" name="name" label="Name" />
          <Input type="text" name="price" label="Price" />
          <Input type="text" name="image" label="Image Link" />

          <Button
            disabled={!isSelected}
            type="submit"
            className={`disabled:bg-gray-500 ${
              isSelected ? "bg-primary" : "bg-gray-300"
            }`}
            color="primary"
          >
            {isSelected ? "Add" : "Select Type"}
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
