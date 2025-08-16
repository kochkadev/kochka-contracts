import { z } from "zod";
import { field } from "../../utils";

export const SessionExerciseSchema = z.object({
  id: field.string(),
  sessionId: field.string(),
  trainingExerciseId: field.string(),
  set: field.int(),
  weight: field.number().nullable().optional(),
  repeats: field.number().nullable().optional(),
  createdAt: field.stringISO(),
  updatedAt: field.stringISO(),
});
export type ISessionExercise = z.infer<typeof SessionExerciseSchema>;
