import { z } from "zod";
import { SessionExerciseSchema } from "../../entities";

export const SaveSessionExerciseRequestSchema = SessionExerciseSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type ISaveSessionExerciseRequest = z.infer<
  typeof SaveSessionExerciseRequestSchema
>;
