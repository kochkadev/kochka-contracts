import { z } from "zod";
import { field } from "../../utils";
import { USER_ROLE } from "../../utils/enums";

export const UserSafeResponseSchema = z.object({
  id: field.string().describe("User ID"),
  username: field.string().describe("User username"),
  createdAt: field.stringISO().describe('A "created at" timestamp'),
  updatedAt: field.stringISO().describe('A "updated at" timestamp'),
  role: field.enum(USER_ROLE).describe("User role"),
});

export type IUserSafeResponse = z.infer<typeof UserSafeResponseSchema>;
