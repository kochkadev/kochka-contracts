import { z } from "zod";
import { field } from "../../utils";

export const ExerciseSchema = z.object({
  id: field.string(),
  title: field.string(),
  imageUrl: field.url().nullable().optional(),
  createdAt: field.stringISO(),
  updatedAt: field.stringISO(),
});
export type IExercise = z.infer<typeof ExerciseSchema>;
