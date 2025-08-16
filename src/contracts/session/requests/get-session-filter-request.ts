import { z } from "zod";
import { field } from "../../../utils";

export const GetSessionFilterRequestSchema = z.object({
  trainingId: field.uuid().optional(),
});
export type IGetSessionFilterRequest = z.infer<
  typeof GetSessionFilterRequestSchema
>;
