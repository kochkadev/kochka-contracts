import { z } from "zod";
import { field } from "../../utils";

export const SignInRequestSchema = z.object({
  login: field
    .string()
    .min(3)
    .max(15)
    .describe("User username or something else for login"),
  password: field.string().min(6).max(25).describe("User password"),
});

export type ISignInRequest = z.infer<typeof SignInRequestSchema>;
