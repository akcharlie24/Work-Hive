import { z } from "zod";

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: "too short , please enter a correct name" }),
  username: z.string().min(2, "too short username").max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password Must Be atleast 8 Characters" }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password Must Be atleast 8 Characters" }),
});


export const PostValidation = z.object({
  caption : z.string().max(1000),
  file : z.custom<File[]>(),
  location : z.string().max(100),
  tags : z.string(),
});
