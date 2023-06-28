import * as Yup from "yup";

export const postSignupSchema = Yup.object().shape({
	name: Yup.string().required("This is required"),
	email: Yup.string().email("Invalid email").required("This is required"),
	username: Yup.string().required("This is required"),
	password: Yup.string().required("This required"),
	cpassword: Yup.string()
		.required("This is required")
		.oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export type IPostSignupSchema = Yup.InferType<typeof postSignupSchema>;
