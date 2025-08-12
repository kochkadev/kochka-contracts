import { z } from "zod";
import { ExerciseSchema, TrainingSchema } from "../../entities";
import { field } from "../../../utils";

export const TrainingResponseSchema = TrainingSchema.extend({
  exercises: field.array(ExerciseSchema),
});
export type ITrainingResponse = z.infer<typeof TrainingResponseSchema>;
