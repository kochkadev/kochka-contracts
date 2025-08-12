import { z } from "zod";
import { field } from "../../utils";
import { USER_ROLE } from "../../utils/enums";

export const UserSchema = z.object({
  id: field.uuid(),
  username: field.string(),
  passwordHash: field.string(),
  createdAt: field.stringISO(),
  updatedAt: field.stringISO(),
  role: field.enum(USER_ROLE).default("user"),
  refreshTokenHash: field.string().nullable().optional(),
});
export type IUserSchema = z.infer<typeof UserSchema>;
