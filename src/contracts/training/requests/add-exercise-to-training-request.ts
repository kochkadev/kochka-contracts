import { z } from "zod";
import { TrainingExerciseSchema } from "../../entities";

export const AddExerciseToTrainingRequestSchema = TrainingExerciseSchema.omit({
  id: true,
  trainingId: true,
  createdAt: true,
  updatedAt: true,
});
export type IAddExerciseToTrainingRequest = z.infer<
  typeof AddExerciseToTrainingRequestSchema
>;
