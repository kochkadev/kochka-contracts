import { z } from "zod";
import { field } from "../../utils";

export const SignUpRequestSchema = z.object({
  username: field.string().min(3).max(15).describe("User username"),
  password: field.string().min(6).max(25).describe("User password"),
});

export type ISignUpRequest = z.infer<typeof SignUpRequestSchema>;
