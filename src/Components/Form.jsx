import React, { useState } from "react";
import { Input, Button } from "../Styles/StyledComponent";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
	//Aqui deberan implementar el form completo con sus validaciones

	const [ message, setMessage ] = useState(false)

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

	const handleMessageOnClick = () => {
		setMessage(true)
	};

	const onSubmit = (values) => {
		console.log(values);
		handleMessageOnClick();
	};

	const { handleSubmit, values, setFieldValue, errors } = useFormik({
		validateOnBlur: false,
		validateOnChange: false,
		initialValues: getInitialValues(),
		validationSchema: getValidationSchema(),
		onSubmit,
	});

	return (
		<>
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

					<Button type="submit">
						Submit
					</Button>
				</form>
			</div>
			<div>
				{
					message ? <p>Gracias, {values.name}, te contactaremos via mail cuanto antes.</p> : ""
				}
			</div>
		</>
	);
};

export default Form;
