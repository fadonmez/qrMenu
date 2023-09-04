import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "İsim en az 3 karakter olmalıdır !")
    .max(20, "İsim 20 karakterden fazla olamaz !")
    .required("İsim zorunludur !"),
  price: yup.string().required("Fiyat zorunludur !"),

  image: yup
    .string()
    .min(6, "Link en az 6 karakter olmalıdır !")
    .required("Link zorunludur !"),
});
