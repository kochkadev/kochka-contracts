import { z } from "zod";
import { field } from "../../utils";

export const TrainingExerciseSchema = z.object({
  id: field.uuid(),
  trainingId: field.uuid(),
  exerciseId: field.uuid(),
  sets: field.int(),
  repeats: field.int(),
  position: field.number(),
  createdAt: field.stringISO(),
  updatedAt: field.stringISO(),
});
export type ITrainingExercise = z.infer<typeof TrainingExerciseSchema>;
