import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function Page404() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mt-16 gap-y-8">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl font-bold text-gray-600">
        Oops! Looks like you are lost.
      </p>
      <Button
        color="primary"
        className="font-semibold "
        onClick={() => navigate("/")}
      >
        Home
      </Button>
    </div>
  );
}
