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

export type PostSignupSchema = Yup.InferType<typeof postSignupSchema>;

export const getVerifyAccountSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("This is required"),
	verification_code: Yup.string().required("This is required"),
});

export type GetVerifyAccountSchema = Yup.InferType<typeof getVerifyAccountSchema>;
