import { z } from "zod";
import { TrainingExerciseSchema } from "../../entities";

export const UpdateTrainingExerciseSchema = TrainingExerciseSchema.omit({
  id: true,
  trainingId: true,
  exerciseId: true,
  createdAt: true,
  updatedAt: true,
}).partial();
export type IUpdateTrainingExercise = z.infer<
  typeof UpdateTrainingExerciseSchema
>;
