import { z } from "zod";
import { field } from "../../utils";

export const TrainingExerciseSchema = z.object({
  id: field.string(),
  trainingId: field.string(),
  exerciseId: field.string(),
  sets: field.int(),
  repeats: field.int(),
  position: field.number(),
  createdAt: field.stringISO(),
  updatedAt: field.stringISO(),
});
export type ITrainingExercise = z.infer<typeof TrainingExerciseSchema>;
