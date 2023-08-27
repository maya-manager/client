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

export const postLoginSchema = Yup.object().shape({
	email_username: Yup.string().required("Email/Username is required"),
	password: Yup.string().required("Password is required"),
});

export type PostLoginSchema = Yup.InferType<typeof postLoginSchema>;

export const getForgotPasswordSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Email is required"),
});

export type GetForgotPasswordSchema = Yup.InferType<typeof getForgotPasswordSchema>;

export const postResetPasswordSchema = Yup.object().shape({
	verification_code: Yup.string().required("OTP is required"),
	password: Yup.string().required("password is required"),
	cpassword: Yup.string().required("confirm password is required"),
});

export type PostResetPasswordSchema = Yup.InferType<typeof postResetPasswordSchema>;
