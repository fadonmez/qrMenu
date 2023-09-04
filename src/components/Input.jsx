import { useField } from "formik";
import { Input as NextUIInput } from "@nextui-org/react";

export default function Input({ type, label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      <NextUIInput
        type={type}
        errorMessage={meta.error}
        label={label}
        {...props}
        {...field}
        color={meta.error ? "danger" : "success"}
      />
    </div>
  );
}
