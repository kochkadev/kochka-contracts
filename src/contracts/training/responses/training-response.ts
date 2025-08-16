import { z } from "zod";
import {
  ExerciseSchema,
  TrainingExerciseSchema,
  TrainingSchema,
} from "../../entities";
import { field } from "../../../utils";

export const TrainingResponseSchema = TrainingSchema.extend({
  exercises: field.array(
    TrainingExerciseSchema.omit({
      trainingId: true,
      exerciseId: true,
      createdAt: true,
      updatedAt: true,
    }).extend({
      exercise: ExerciseSchema.omit({ createdAt: true, updatedAt: true }),
    }),
  ),
});
export type ITrainingResponse = z.infer<typeof TrainingResponseSchema>;
