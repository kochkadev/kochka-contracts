import { z } from "zod";
import { ExerciseSchema } from "../../entities";

export const UpdateExerciseRequestSchema = ExerciseSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).partial();
export type IUpdateExerciseRequestSchema = z.infer<
  typeof UpdateExerciseRequestSchema
>;
