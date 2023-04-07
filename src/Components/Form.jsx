import React from "react";
import { Input, Button } from "../Styles/StyledComponent";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const getInitialValues = () => ({
    name: "",
    email: "",
  });

  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object().shape({
        name: Yup.string()
          .min(5, "Debe ser mayor a 5 caracteres")
          .required("Campo obligatorio"),
        email: Yup.string()
          .email()
          .required("Campo obligatorio"),
      })
    );

  const handleOnClick = (values) => {
    return (
      <p>
        Gracias {values.name}, te contactaremos cuanto antes via mail.
      </p>
    );
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const { handleSubmit, values, setFieldValue, errors } = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    onSubmit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo</label>
        <Input
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            setFieldValue("name", e.target.value);
          }}
        />

        <label>Email</label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={(e) => {
            setFieldValue("email", e.target.value);
          }}
        />

        <Button type="submit" onClick={handleOnClick}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
