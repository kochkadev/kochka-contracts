import { z } from "zod";
import { ExerciseSchema } from "../../entities";

export const CreateExerciseRequestSchema = ExerciseSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type ICreateExerciseRequest = z.infer<
  typeof CreateExerciseRequestSchema
>;
