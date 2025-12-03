import z, { email } from "zod";

const LoginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "The password must be at least 8 characters long" }),
});

export {
    LoginSchema
}