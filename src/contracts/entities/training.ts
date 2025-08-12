import { z } from "zod";
import { field } from "../../utils";

export const TrainingSchema = z.object({
  id: field.uuid(),
  title: field.string(),
  imageUrl: field.url().nullable().optional(),
  createdAt: field.stringISO(),
  updatedAt: field.stringISO(),
});
export type ITraining = z.infer<typeof TrainingSchema>;
